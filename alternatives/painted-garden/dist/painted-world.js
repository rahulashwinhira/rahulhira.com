'use strict';

/* A continuous painted landscape in world space. Scrolling translates the
   camera along the lane; focal length never changes. Every pigment, blade,
   bank and pond has a fixed place, so retracing the road retraces the scene. */
class PaintedRoadWorld {
  constructor(canvas, invalidate) {
    this.canvas = canvas;
    this.invalidate = invalidate;
    this.width = this.height = 1;
    this.ready = false;
    this.gl = canvas.getContext('webgl', {
      alpha: false, antialias: true, depth: true, stencil: false,
      powerPreference: 'default'
    });
    this.image = new Image();
    this.atlas = new Image();
    let loaded = 0;
    const ready = () => {
      if (++loaded < 2) return;
      if (!this.gl) return;
      try { this.initialize(); this.ready = true; this.invalidate(); }
      catch (error) { this.fallback(error); }
    };
    this.image.onload = ready;
    this.atlas.onload = ready;
    this.image.onerror = () => this.fallback(new Error('The painted texture could not load.'));
    this.atlas.onerror = this.image.onerror;
    this.image.src = './assets/painted-landscape.png';
    this.atlas.src = './assets/painted-materials.png';
    canvas.addEventListener('webglcontextlost', event => {
      event.preventDefault(); this.ready = false; canvas.style.opacity = '0';
    });
    canvas.addEventListener('webglcontextrestored', () => {
      try { this.initialize(); this.ready = true; this.invalidate(); }
      catch (error) { this.fallback(error); }
    });
  }

  static road(z) { return 9 * Math.sin(z * .025) + 5 * Math.sin(z * .057); }
  static elevation(z) { return 1.2 * Math.sin(z * .022) + .48 * Math.sin(z * .061); }
  static ponds = [{ z: 78, side: -1, offset: 19, rx: 12, rz: 20 }, { z: 196, side: 1, offset: 23, rx: 15, rz: 24 }];
  static smooth(a, b, x) { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
  static height(x, z) {
    const d = Math.abs(x - this.road(z));
    const side = this.smooth(2.3, 6.4, d);
    const bank = (2.45 + .62 * Math.sin(z * .14 + x * .12)) * Math.exp(-Math.pow((d - 6.3) / 6.4, 2));
    const field = 1.9 + 1.8 * Math.sin(x * .064 + z * .035) + 1.15 * Math.sin(z * .079 - x * .048);
    const ridges = this.smooth(30, 95, d) * (7 + 5 * Math.sin(z * .033 + x * .027));
    let y = this.elevation(z) + side * (bank + this.smooth(7, 16, d) * field + ridges);
    for (const pond of this.ponds) {
      const px = this.road(pond.z) + pond.side * pond.offset;
      const r = Math.hypot((x - px) / pond.rx, (z - pond.z) / pond.rz) + .023 * Math.sin(x * .9 + z * .15) + .019 * Math.sin(z * .7 - x * .3);
      const basin = 1 - this.smooth(.77, 1.34, r);
      y = y * (1 - basin) + (this.elevation(pond.z) - 1.05) * basin;
    }
    return y;
  }

  initialize() {
    const gl = this.gl;
    const common = `
      precision highp float;
      uniform sampler2D uPaint, uAtlas;
      uniform vec3 uEye, uRight, uUp, uForward;
      uniform float uAspect, uLens, uTime;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
      }
      vec2 mirrorUV(vec2 p) { return 1. - abs(mod(p, 2.) - 1.); }
      float lane(float z) { return 9.*sin(z*.025)+5.*sin(z*.057); }
      vec4 project(vec3 p) {
        vec3 q=p-uEye;
        float depth=dot(q,uForward);
        return vec4(dot(q,uRight)*uLens/uAspect,dot(q,uUp)*uLens,1.001*depth-.4002,depth);
      }
      vec3 atmosphere(vec3 color, vec3 p) {
        float distance=length(p-uEye);
        float fog=1.-exp(-distance*distance*.000024);
        float tunnelShade=smoothstep(291.,318.,p.z)*(1.-smoothstep(7.,10.,abs(p.x-lane(p.z))));
        return mix(color*(1.-tunnelShade*.96),vec3(.47,.66,.72),min(.91,fog));
      }
      // The material atlas has evenly scaled, top-down impasto brushwork.
      // Sampling a perspective painting directly would stretch its strokes.
      vec3 pigment(vec2 p, float region) {
        vec2 offset=vec2(mod(region,2.),floor(region/2.))*.5;
        vec2 q=mirrorUV(p)*.476+.012;
        vec2 q2=mirrorUV(mat2(.8,.6,-.6,.8)*p*1.37+vec2(.34,.75))*.476+.012;
        return mix(texture2D(uAtlas,offset+q).rgb,texture2D(uAtlas,offset+q2).rgb,.24);
      }
    `;
    const vertex = common + `
      attribute vec3 aPosition, aNormal;
      varying vec3 vWorld, vNormal;
      void main() { vWorld=aPosition; vNormal=aNormal; gl_Position=project(aPosition); }
    `;
    const fragment = common + `
      varying vec3 vWorld, vNormal;
      void main() {
        vec2 p=vWorld.xz;
        float d=abs(p.x-lane(p.y));
        float n=noise(p*.16);
        vec2 q=vec2(p.x*.083+p.y*.018,p.y*.077)+vec2(n*.15);
        vec3 road=pigment(vec2(p.x*.11,p.y*.10),0.);
        vec3 bank=pigment(q,1.);
        vec3 field=pigment(q*.71+vec2(7.3,4.7),2.);
        vec3 meadow=pigment(q*.82+vec2(2.2,9.1),1.);
        float patches=smoothstep(.48,.76,noise(p*.035+vec2(30.,7.)));
        field=mix(field,meadow,patches*.72);
        float border=2.52+(noise(p*2.1)-.5)*.30;
        vec3 color=mix(road,bank,smoothstep(border-.13,border+.2,d));
        color=mix(color,field,smoothstep(7.8,12.,d));
        // Directional daubs, bristle grooves and thick ridges stay anchored
        // to the surface, instead of sliding across the screen with the view.
        float bristle=noise(vec2(p.x*27.+p.y*5.,p.y*2.5));
        float daub=noise(vec2(p.x*4.8+p.y*1.9,p.y*8.));
        color*=.89+.20*bristle+.10*daub;
        vec3 normal=normalize(vNormal);
        float light=dot(normal,normalize(vec3(-.55,.82,-.35)));
        color*=.79+.28*max(0.,light);
        color+=vec3(.06,.036,.002)*pow(bristle,5.);
        gl_FragColor=vec4(atmosphere(color,vWorld),1.);
      }
    `;
    this.shaderCommon=common;
    this.terrainProgram=this.program(vertex,fragment);
    this.skyProgram=this.program(`
      attribute vec2 aPosition; varying vec2 vUV;
      void main(){vUV=vec2(aPosition.x*.5+.5,.5-aPosition.y*.5);gl_Position=vec4(aPosition,.999,1.);}
    `,common+`
      varying vec2 vUV;
      void main(){
        float yaw=atan(uForward.x,uForward.z);
        float x=.5+(vUV.x-.5)*min(1.,uAspect/1.8)+yaw*.30;
        x=mirrorUV(vec2(x,0.)).x;
        float horizon=.5+uForward.y/max(.1,length(uForward.xz))*uLens*.5;
        float y=clamp(vUV.y/max(.25,horizon)*.24,0.,.24);
        vec3 color=texture2D(uPaint,vec2(x,y)).rgb;
        color=mix(color,vec3(.50,.67,.71),smoothstep(horizon-.025,horizon+.08,vUV.y));
        gl_FragColor=vec4(color,1.);
      }
    `);
    this.grassProgram=this.program(common+`
      attribute vec3 aPosition;
      attribute vec2 aCorner;
      attribute vec2 aBrush;
      attribute vec3 aColor;
      varying vec2 vUV; varying vec3 vColor,vWorld;
      void main(){
        vec3 p=aPosition;
        float wave=sin(p.x*.6+p.z*.23-uTime*1.25);
        p+=uRight*aCorner.x;
        p.x+=wave*.14*aCorner.y;
        p.y+=aCorner.y;
        vUV=aBrush;vColor=aColor;vWorld=p;
        gl_Position=project(p);
      }
    `,common+`
      varying vec2 vUV; varying vec3 vColor,vWorld;
      void main(){
        float edge=noise(vec2(vUV.y*24.,vWorld.z*7.));
        if(vUV.x<edge*.12 || vUV.x>1.-edge*.16)discard;
        float grain=noise(vWorld.xz*43.+vec2(vUV.y*19.,0.));
        vec3 c=mix(vColor,pigment(vWorld.xz*.071+vUV*.06,1.),.62)*(.86+.25*grain);
        gl_FragColor=vec4(atmosphere(c,vWorld),1.);
      }
    `);
    this.waterProgram=this.program(vertex,common+`
      varying vec3 vWorld, vNormal;
      void main(){
        vec2 p=vWorld.xz;
        float ripple=sin(p.y*7.-uTime*1.1+sin(p.x*.50));
        vec3 c=pigment(vec2(p.x*.059,p.y*.098)+vec2(.0025*ripple,.0012*sin(p.x*4.-uTime)),3.);
        c+=vec3(.035,.046,.05)*ripple;
        gl_FragColor=vec4(atmosphere(c,vWorld),1.);
      }
    `);
    this.rockProgram=this.program(vertex,common+`
      varying vec3 vWorld,vNormal;
      void main(){
        vec3 paint=pigment(vWorld.xy*.073+vWorld.z*.018,1.);
        float grain=noise(vWorld.xy*2.4+vWorld.z*.35);
        vec3 rock=mix(paint,vec3(.27,.20,.12),.32);
        rock*=.57+.43*max(0.,dot(normalize(vNormal),normalize(vec3(-.5,.7,-.8))));
        rock+=vec3(.10,.066,.018)*grain;
        gl_FragColor=vec4(atmosphere(rock,vWorld),smoothstep(175.,235.,uEye.z));
      }
    `);
    this.texture=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,this.texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,this.image);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    this.atlasTexture=gl.createTexture();gl.activeTexture(gl.TEXTURE1);gl.bindTexture(gl.TEXTURE_2D,this.atlasTexture);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,this.atlas);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    this.skyBuffer=this.buffer(new Float32Array([-1,-1,1,-1,-1,1,1,1]));
    this.buildTerrain();
    this.buildGrass();
    this.buildCave();
    gl.clearColor(.5,.7,.8,1);
    gl.viewport(0,0,this.canvas.width,this.canvas.height);
  }

  program(vertex, fragment) {
    const gl=this.gl, program=gl.createProgram();
    for(const [type,source] of [[gl.VERTEX_SHADER,vertex],[gl.FRAGMENT_SHADER,fragment]]) {
      const shader=gl.createShader(type);
      const highp=gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT).precision;
      gl.shaderSource(shader,highp?source:source.replace('precision highp float;','precision mediump float;'));
      gl.compileShader(shader);
      if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
      gl.attachShader(program,shader); gl.deleteShader(shader);
    }
    gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
    const uniforms={};
    for(const name of ['uPaint','uAtlas','uEye','uRight','uUp','uForward','uAspect','uLens','uTime']) uniforms[name]=gl.getUniformLocation(program,name);
    return { program, uniforms };
  }

  buffer(data, target) {
    const gl=this.gl, b=gl.createBuffer();
    gl.bindBuffer(target||gl.ARRAY_BUFFER,b);gl.bufferData(target||gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);return b;
  }

  buildTerrain() {
    const W=PaintedRoadWorld, gl=this.gl;
    this.terrain=[];
    // Dense near the road, coarser at the edges. Normals derive from the same
    // continuous height function on both sides of every mesh boundary.
    const xs=[];
    for(let i=0;i<=160;i++){const s=(i-80)/80;xs.push(Math.sign(s)*145*Math.pow(Math.abs(s),1.75));}
    for(let start=-30;start<250;start+=56) {
      const vertices=[],indices=[],rows=81;
      for(let j=0;j<rows;j++) {
        const z=start+j*.7;
        for(const offset of xs){
          const x=W.road(z)+offset,y=W.height(x,z),e=.15;
          const dx=(W.height(x+e,z)-W.height(x-e,z))/(2*e);
          const dz=(W.height(x,z+e)-W.height(x,z-e))/(2*e);
          const l=Math.hypot(dx,1,dz);
          vertices.push(x,y,z,-dx/l,1/l,-dz/l);
        }
      }
      for(let j=0;j<rows-1;j++)for(let i=0;i<xs.length-1;i++){
        const a=j*xs.length+i,b=a+xs.length;indices.push(a,b,a+1,a+1,b,b+1);
      }
      this.terrain.push({v:this.buffer(new Float32Array(vertices)),i:this.buffer(new Uint16Array(indices),gl.ELEMENT_ARRAY_BUFFER),count:indices.length,start});
    }
    this.water=[];
    for(const pond of W.ponds){
      const vertices=[],indices=[],cx=W.road(pond.z)+pond.side*pond.offset,y=W.elevation(pond.z)-.28;
      vertices.push(cx,y,pond.z,0,1,0);
      for(let i=0;i<=100;i++){
        const a=i/100*Math.PI*2,r=1+.025*Math.sin(a*7)+.018*Math.sin(a*13);
        vertices.push(cx+Math.cos(a)*pond.rx*r,y,pond.z+Math.sin(a)*pond.rz*r,0,1,0);
        if(i<100)indices.push(0,i+1,i+2);
      }
      this.water.push({v:this.buffer(new Float32Array(vertices)),i:this.buffer(new Uint16Array(indices),gl.ELEMENT_ARRAY_BUFFER),count:indices.length});
    }
  }

  buildGrass() {
    const W=PaintedRoadWorld, vertices=[];
    let seed=71829;
    const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
    const palette=[[.86,.68,.15],[.96,.79,.24],[.29,.48,.18],[.12,.36,.27],[.54,.62,.21],[.72,.35,.34]];
    for(let i=0;i<6500;i++){
      const z=-12+rand()*225,side=rand()>.5?1:-1,d=3.1+Math.pow(rand(),1.9)*61;
      const x=W.road(z)+side*d,y=W.height(x,z);
      if(W.ponds.some(p=>Math.hypot((x-W.road(p.z)-p.side*p.offset)/p.rx,(z-p.z)/p.rz)<1.1)) continue;
      const h=.15+rand()*.36,w=.025+rand()*.065,lean=(rand()-.5)*.19;
      const color=palette[Math.floor(rand()*palette.length)];
      // Curved ribbons with irregular tips, rather than pointed triangles.
      for(let k=0;k<3;k++){
        const a=k/3,b=(k+1)/3;
        const xa=lean*a*a,xb=lean*b*b,wa=w*(1-.8*a*a),wb=w*(1-.8*b*b);
        for(const [cx,cy,u,v] of [[xa-wa,a*h,0,a],[xa+wa,a*h,1,a],[xb+wb,b*h,1,b],[xa-wa,a*h,0,a],[xb+wb,b*h,1,b],[xb-wb,b*h,0,b]])
          vertices.push(x,y-.02,z,cx,cy,...color,u,v);
      }
    }
    this.grass={v:this.buffer(new Float32Array(vertices)),count:vertices.length/10};
  }

  buildCave() {
    const W=PaintedRoadWorld,gl=this.gl,vertices=[],indices=[];
    const segments=128,layers=16,rings=50,start=292,step=1.8;
    const cx=W.road(start),base=W.elevation(start)-.2;
    // One mesh shares the mouth's exact vertex ring between the rock face
    // and the tunnel. Different shapes or sampling counts leave sky slivers.
    for(let j=0;j<=layers;j++){
      const t=j/layers;
      for(let i=0;i<=segments;i++){
        const a=i/segments*Math.PI,s=Math.sin(a),c=Math.cos(a);
        const uneven=1+.035*Math.sin(a*9)+.018*Math.sin(a*17);
        const radiusX=7.3*uneven*(1-t)+(43+3*Math.sin(a*5))*t;
        const radiusY=10.6*uneven*(1-t)+(28+3*Math.sin(a*7))*t;
        const relief=Math.sin(t*Math.PI)*(3+1.3*Math.sin(a*19+t*13));
        vertices.push(cx+c*radiusX,base+s*radiusY,start+relief+t*4,c*.15,s*.3,-1);
        if(j<layers&&i<segments){const k=j*(segments+1)+i,n=k+segments+1;indices.push(k,n,k+1,k+1,n,n+1);}
      }
    }
    // Ring zero is already the opening of the front face. Start the tunnel
    // from those shared indices and ease its irregular walls inward.
    let previous=Array.from({length:segments+1},(_,i)=>i);
    for(let j=1;j<=rings;j++){
      const z=start+j*step,blend=W.smooth(start,start+6,z),ring=[];
      for(let i=0;i<=segments;i++){
        const a=i/segments*Math.PI,s=Math.sin(a),c=Math.cos(a);
        const mouth=1+.035*Math.sin(a*9)+.018*Math.sin(a*17);
        const interior=1+.04*Math.sin(a*9+z*.31)+.02*Math.sin(a*17-z*.17);
        const ripple=mouth*(1-blend)+interior*blend;
        ring.push(vertices.length/6);
        vertices.push(W.road(z)+c*(7.3-.05*blend)*ripple,W.elevation(z)-.2+s*10.6*ripple,z,-c,-s,0);
      }
      for(let i=0;i<segments;i++){
        const a=previous[i],b=previous[i+1],c=ring[i],d=ring[i+1];
        indices.push(a,c,b,b,c,d);
      }
      previous=ring;
    }
    // The far wall reuses the final ring too, closing the tunnel completely.
    const end=start+rings*step,center=vertices.length/6;
    vertices.push(W.road(end),W.elevation(end)-.2,end,0,0,-1);
    for(let i=0;i<segments;i++)indices.push(center,previous[i],previous[i+1]);
    this.cave=[{v:this.buffer(new Float32Array(vertices)),i:this.buffer(new Uint16Array(indices),gl.ELEMENT_ARRAY_BUFFER),count:indices.length}];
  }

  use(info, camera, time) {
    const gl=this.gl,u=info.uniforms;
    gl.useProgram(info.program);
    gl.uniform1i(u.uPaint,0);
    gl.uniform1i(u.uAtlas,1);
    gl.uniform3fv(u.uEye,camera.eye);gl.uniform3fv(u.uRight,camera.right);
    gl.uniform3fv(u.uUp,camera.up);gl.uniform3fv(u.uForward,camera.forward);
    gl.uniform1f(u.uAspect,this.width/this.height);gl.uniform1f(u.uLens,1.7);
    gl.uniform1f(u.uTime,time);
  }

  attribute(info,name,size,stride,offset) {
    const gl=this.gl,location=gl.getAttribLocation(info.program,name);
    if(location<0)return;
    gl.enableVertexAttribArray(location);gl.vertexAttribPointer(location,size,gl.FLOAT,false,stride,offset);
    this.enabled.push(location);
  }

  clearAttributes() { for(const l of this.enabled||[])this.gl.disableVertexAttribArray(l);this.enabled=[]; }

  drawMesh(mesh,info) {
    const gl=this.gl;this.clearAttributes();gl.bindBuffer(gl.ARRAY_BUFFER,mesh.v);
    this.attribute(info,'aPosition',3,24,0);this.attribute(info,'aNormal',3,24,12);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,mesh.i);gl.drawElements(gl.TRIANGLES,mesh.count,gl.UNSIGNED_SHORT,0);
  }

  static camera(progress) {
    const z=5+Math.max(0,Math.min(1,progress))*325;
    const eye=[this.road(z),this.elevation(z)+5.2,z];
    const target=[this.road(z+18),this.elevation(z+18)+1.4,z+18];
    let forward=target.map((v,i)=>v-eye[i]);const l=Math.hypot(...forward);forward=forward.map(v=>v/l);
    let right=[forward[2],0,-forward[0]];const r=Math.hypot(...right);right=right.map(v=>v/r);
    const up=[forward[1]*right[2],forward[2]*right[0]-forward[0]*right[2],-forward[1]*right[0]];
    return {eye,forward,right,up};
  }

  render(progress,time) {
    if(!this.ready||!this.gl)return;
    const gl=this.gl,camera=PaintedRoadWorld.camera(progress);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,this.texture);
    gl.activeTexture(gl.TEXTURE1);gl.bindTexture(gl.TEXTURE_2D,this.atlasTexture);
    gl.disable(gl.DEPTH_TEST);this.use(this.skyProgram,camera,time);
    this.clearAttributes();gl.bindBuffer(gl.ARRAY_BUFFER,this.skyBuffer);
    this.attribute(this.skyProgram,'aPosition',2,8,0);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
    gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);
    this.use(this.terrainProgram,camera,time);
    for(const mesh of this.terrain)if(mesh.start+56>camera.eye[2]-20)this.drawMesh(mesh,this.terrainProgram);
    this.use(this.waterProgram,camera,time);
    for(const mesh of this.water)this.drawMesh(mesh,this.waterProgram);
    this.use(this.grassProgram,camera,time);this.clearAttributes();gl.bindBuffer(gl.ARRAY_BUFFER,this.grass.v);
    this.attribute(this.grassProgram,'aPosition',3,40,0);this.attribute(this.grassProgram,'aCorner',2,40,12);this.attribute(this.grassProgram,'aColor',3,40,20);this.attribute(this.grassProgram,'aBrush',2,40,32);
    gl.drawArrays(gl.TRIANGLES,0,this.grass.count);
    if(camera.eye[2]>175){
      gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
      this.use(this.rockProgram,camera,time);
      for(const mesh of this.cave)this.drawMesh(mesh,this.rockProgram);
      gl.disable(gl.BLEND);
    }
    this.canvas.style.opacity='1';
  }

  resize(width,height,ratio) {
    this.width=width;this.height=height;
    // Bound fill rate on retina displays while keeping the brushwork crisp.
    const scale=Math.min(ratio,1.15,1600/width);
    this.canvas.width=Math.round(width*scale);this.canvas.height=Math.round(height*scale);
    this.gl?.viewport(0,0,this.canvas.width,this.canvas.height);
  }

  fallback(error) { this.ready=false;this.canvas.style.opacity='0';if(error)console.warn('Using the still painting:',error); }
}

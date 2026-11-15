'use strict';
// The painted terrain comes from Rahul’s original essay. These natural
// sculptures and the interaction camera are new, in the same world space.
PaintedRoadWorld.ponds=[{z:102,side:-1,offset:17,rx:12,rz:18}];
class GardenWorld extends PaintedRoadWorld {
  constructor(canvas,invalidate){super(canvas,invalidate);this.yaw=0;this.pitch=0;this.focus=-1;this.hover=-1;this.selected=-1;this.zoom=1;this.landmarks=[];}
  buildCave(){this.cave=[];}
  initialize(){
    super.initialize();
    this.natureProgram=this.program(this.shaderCommon+`
      attribute vec3 aPosition,aNormal,aColor;attribute float aSway;
      varying vec3 vWorld,vNormal,vColor;
      void main(){vec3 p=aPosition;p.x+=sin(uTime*.75+p.z*.16)*aSway*.14;vWorld=p;vNormal=aNormal;vColor=aColor;gl_Position=project(p);}
    `,this.shaderCommon+`
      varying vec3 vWorld,vNormal,vColor;uniform float uHover;
      void main(){
        float light=.63+.37*max(0.,dot(normalize(vNormal),normalize(vec3(-.5,.8,-.7))));
        float grain=noise(vWorld.xy*32.+vWorld.z*7.);float strokes=noise(vec2(vWorld.x*6.+vWorld.y*3.,vWorld.y*17.));
        vec3 paint=pigment(vWorld.xy*.17+vWorld.z*.08,2.);
        vec3 c=mix(vColor,paint,.12)*light*(.87+.19*grain+.12*strokes);
        c+=vec3(.12,.085,.018)*uHover;gl_FragColor=vec4(atmosphere(c,vWorld),1.);
      }
    `);
    this.hoverUniform=this.gl.getUniformLocation(this.natureProgram.program,'uHover');
    this.buildNature();
  }
  buildNature(){
    const W=PaintedRoadWorld,gl=this.gl,shapes=[];
    const color=hex=>[parseInt(hex.slice(1,3),16)/255,parseInt(hex.slice(3,5),16)/255,parseInt(hex.slice(5,7),16)/255];
    let vertices=[];
    const triangle=(a,b,c,tint,sway=0)=>{let n=[(b[1]-a[1])*(c[2]-a[2])-(b[2]-a[2])*(c[1]-a[1]),(b[2]-a[2])*(c[0]-a[0])-(b[0]-a[0])*(c[2]-a[2]),(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0])];const l=Math.hypot(...n)||1;n=n.map(v=>v/l);for(const p of [a,b,c])vertices.push(...p,...n,...color(tint),sway);};
    const ellipsoid=(center,scale,tint,rotation=0,sway=0,segments=16,rings=10)=>{
      const point=(u,v)=>{const x=Math.sin(v)*Math.cos(u)*scale[0],y=Math.cos(v)*scale[1],z=Math.sin(v)*Math.sin(u)*scale[2];return [center[0]+x*Math.cos(rotation)-y*Math.sin(rotation),center[1]+x*Math.sin(rotation)+y*Math.cos(rotation),center[2]+z];};
      for(let j=0;j<rings;j++)for(let i=0;i<segments;i++){const a=point(i/segments*Math.PI*2,j/rings*Math.PI),b=point((i+1)/segments*Math.PI*2,j/rings*Math.PI),c=point(i/segments*Math.PI*2,(j+1)/rings*Math.PI),d=point((i+1)/segments*Math.PI*2,(j+1)/rings*Math.PI);triangle(a,b,c,tint,sway);triangle(b,d,c,tint,sway);}
    };
    const stem=(x,y,z,h,bend=.35)=>{for(let j=0;j<12;j++){const t=j/12,x0=x+Math.sin(t*1.5)*bend,y0=y+t*h;ellipsoid([x0,y0,z],[.07,h/22,.07],'#456d49',-.07,t,8,4);}};
    const flower=(x,z,h,size,tint)=>{const y=W.height(x,z);stem(x,y,z,h);const cx=x+Math.sin(1.5)*.35,cy=y+h;
      for(let i=0;i<7;i++){const a=i/7*Math.PI*2;ellipsoid([cx+Math.cos(a)*size*.73,cy+Math.sin(a)*size*.73,z],[size*.85,size*.39,size*.19],tint,a,1,18,10);}
      ellipsoid([cx,cy,z-.23],[size*.37,size*.37,size*.23],'#c69a3c',0,1);ellipsoid([cx,cy,z-.43],[size*.13,size*.13,size*.05],'#5f4c2f',0,1);
      ellipsoid([x-.45,y+h*.42,z],[.87,.17,.29],'#537d48',.4,.45);ellipsoid([x+.55,y+h*.66,z],[.7,.15,.25],'#7b9851',-.4,.65);
      return [cx,cy,z];
    };
    let x=W.road(23)-7.5;
    const flowerCenter=flower(x,23,4.5,1.45,'#df967b');flower(x-3.4,26,3.2,.95,'#bd7da0');flower(x+2.5,26.5,2.3,.72,'#e5b868');flower(x-1.7,20,1.35,.48,'#f2c789');
    shapes.push({name:'flower',label:'The flower',center:flowerCenter,radius:3.5,route:7,vertices});vertices=[];
    x=W.road(59)+8.8;const y=W.height(x,59);
    // Weathered stones gathered into an imperfect, open circle.
    for(let i=0;i<13;i++){const a=i/12*Math.PI,cx=x+Math.cos(a)*2.35,cy=y+Math.sin(a)*3.1;ellipsoid([cx,cy+.35,59+(i%3-.8)*.12],[.75,.81,.64],['#b1b2a5','#949b8d','#c0b8a3'][i%3],-.3+a*.12,0,12,8);}
    ellipsoid([x-2.35,y-.03,58.8],[1.2,.32,.92],'#7d9562');ellipsoid([x+2.35,y-.03,59],[1.1,.29,.85],'#7d9562');
    for(let i=0;i<5;i++)ellipsoid([x-1.7+i*.8,y+.06,57.7+(i%2)*.25],[.48,.13,.37],'#c6bca5',0,0,10,6);
    shapes.push({name:'stones',label:'The stones',center:[x,y+1.8,59],radius:3.2,route:43,vertices});vertices=[];
    const pond=W.ponds[0];x=W.road(pond.z)+pond.side*pond.offset;const py=W.elevation(pond.z)-.23;
    // A water lily is the pool’s tactile focal point, not a floating label.
    ellipsoid([x,py,pond.z],[3.1,.08,2.8],'#66896c');
    for(let layer=0;layer<2;layer++)for(let i=0;i<8;i++){const a=(i/8+layer/16)*Math.PI*2,r=layer?.65:1.15;ellipsoid([x+Math.cos(a)*r,py+.15+layer*.24,pond.z+Math.sin(a)*r],[.8,.25,.48],layer?'#f3d4b3':'#d2bfc0',a*.2,.12,14,8);}
    ellipsoid([x,py+.48,pond.z],[.48,.35,.48],'#dcb262',0,.1);for(let i=0;i<5;i++){const a=i*2.4;ellipsoid([x+Math.cos(a)*5,py-.03,pond.z+Math.sin(a)*4],[1.3,.04,1.1],'#6a8a60');}
    shapes.push({name:'pool',label:'The pool',center:[x,py+.4,pond.z],radius:4,route:82,vertices});
    this.landmarks=shapes.map(s=>({...s,buffer:this.buffer(new Float32Array(s.vertices)),count:s.vertices.length/10,vertices:undefined}));
    // Nearby wildflowers add depth without separate draw calls.
    vertices=[];for(let i=0;i<32;i++){const z=12+i*3.7,side=i%2?1:-1,fx=W.road(z)+side*(4.4+(i%4)*2.1),fy=W.height(fx,z);stem(fx,fy,z,.65,.1);ellipsoid([fx,fy+.68,z],[.22,.15,.1],['#dfb264','#c5849d','#e5c7a0'][i%3],0,.4,8,5);}
    this.wildflowers={buffer:this.buffer(new Float32Array(vertices)),count:vertices.length/10};
  }
  use(info,camera,time){super.use(info,camera,time);this.gl.uniform1f(info.uniforms.uLens,this.lens());}
  lens(){return (this.width<this.height?.76:1.7)*this.zoom;}
  camera(progress){
    const W=PaintedRoadWorld,z=2+progress*113;const eye=[W.road(z),W.elevation(z)+6.2,z];
    let target=[W.road(z+23),W.elevation(z+23)+2.8,z+23];
    if(this.focus>=0&&this.landmarks[this.focus])target=this.landmarks[this.focus].center;
    let f=target.map((v,i)=>v-eye[i]);const distance=Math.hypot(...f);f=f.map(v=>v/distance);
    const baseYaw=Math.atan2(f[0],f[2])+this.yaw,basePitch=Math.asin(f[1])+this.pitch;
    f=[Math.sin(baseYaw)*Math.cos(basePitch),Math.sin(basePitch),Math.cos(baseYaw)*Math.cos(basePitch)];
    const right=[f[2],0,-f[0]],rl=Math.hypot(...right);for(let i=0;i<3;i++)right[i]/=rl;
    const up=[f[1]*right[2],f[2]*right[0]-f[0]*right[2],-f[1]*right[0]];
    return {eye,forward:f,right,up};
  }
  project(point,progress){const c=this.camera(progress),q=point.map((v,i)=>v-c.eye[i]),dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0),depth=dot(q,c.forward);return {x:(.5+dot(q,c.right)*this.lens()/depth/(this.width/this.height)*.5)*this.width,y:(.5-dot(q,c.up)*this.lens()/depth*.5)*this.height,depth};}
  pick(x,y,progress){const c=this.camera(progress),nx=(x/this.width*2-1)*(this.width/this.height)/this.lens(),ny=(1-y/this.height*2)/this.lens();let ray=c.forward.map((v,i)=>v+c.right[i]*nx+c.up[i]*ny);const rl=Math.hypot(...ray);ray=ray.map(v=>v/rl);let picked=-1,closest=Infinity;for(let i=0;i<this.landmarks.length;i++){const o=this.landmarks[i],q=o.center.map((v,j)=>v-c.eye[j]),along=q.reduce((s,v,j)=>s+v*ray[j],0),d2=q.reduce((s,v)=>s+v*v,0)-along*along;if(along>0&&d2<o.radius*o.radius&&along<closest){picked=i;closest=along;}}return picked;}
  render(progress,time){
    if(!this.ready||!this.gl)return;const gl=this.gl,c=this.camera(progress);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.activeTexture(gl.TEXTURE1);gl.bindTexture(gl.TEXTURE_2D,this.atlasTexture);
    gl.disable(gl.DEPTH_TEST);this.use(this.skyProgram,c,time);this.clearAttributes();gl.bindBuffer(gl.ARRAY_BUFFER,this.skyBuffer);this.attribute(this.skyProgram,'aPosition',2,8,0);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
    gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);this.use(this.terrainProgram,c,time);for(const m of this.terrain)if(m.start+56>c.eye[2]-85)this.drawMesh(m,this.terrainProgram);
    this.use(this.waterProgram,c,time);for(const m of this.water)this.drawMesh(m,this.waterProgram);
    this.use(this.grassProgram,c,time);this.clearAttributes();gl.bindBuffer(gl.ARRAY_BUFFER,this.grass.v);this.attribute(this.grassProgram,'aPosition',3,40,0);this.attribute(this.grassProgram,'aCorner',2,40,12);this.attribute(this.grassProgram,'aColor',3,40,20);this.attribute(this.grassProgram,'aBrush',2,40,32);gl.drawArrays(gl.TRIANGLES,0,this.grass.count);
    this.use(this.natureProgram,c,time);for(const [i,m] of [...this.landmarks,this.wildflowers].entries()){gl.uniform1f(this.hoverUniform,i===this.hover?.65:i===this.selected?.25:0);this.clearAttributes();gl.bindBuffer(gl.ARRAY_BUFFER,m.buffer);this.attribute(this.natureProgram,'aPosition',3,40,0);this.attribute(this.natureProgram,'aNormal',3,40,12);this.attribute(this.natureProgram,'aColor',3,40,24);this.attribute(this.natureProgram,'aSway',1,40,36);gl.drawArrays(gl.TRIANGLES,0,m.count);}
    this.canvas.style.opacity='1';
  }
}

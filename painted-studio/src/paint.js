import * as THREE from 'three';

export async function loadPaint(){
  const atlas=await new THREE.TextureLoader().loadAsync(`${import.meta.env.BASE_URL}assets/painted-materials.png`);
  atlas.colorSpace=THREE.SRGBColorSpace;atlas.anisotropy=4;atlas.wrapS=atlas.wrapT=THREE.RepeatWrapping;
  const bump=atlas.clone();bump.colorSpace=THREE.NoColorSpace;bump.repeat.set(.472,.472);bump.offset.set(.014,.514);bump.needsUpdate=true;
  const cache=new Map();
  function material(original,region=0,scale=.65){
    const key=original.uuid+':'+region+':'+scale;if(cache.has(key))return cache.get(key);
    const m=original.clone();m.metalness=0;m.roughness=.98;m.bumpMap=bump;m.bumpScale=.04;
    const regions=[[0,.5],[.5,.5],[0,0],[.5,0]];
    m.onBeforeCompile=shader=>{
      shader.uniforms.uPaintAtlas={value:atlas};shader.uniforms.uPaintRegion={value:new THREE.Vector2(...regions[region])};shader.uniforms.uPaintScale={value:scale};
      shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vBrushPosition; varying vec3 vBrushNormal;');
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvBrushPosition=position; vBrushNormal=normal;');
      shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
        uniform sampler2D uPaintAtlas;uniform vec2 uPaintRegion;uniform float uPaintScale;
        varying vec3 vBrushPosition;varying vec3 vBrushNormal;
        vec3 paintSample(vec2 p){vec2 uv=(1.-abs(mod(p,2.)-1.))*.472+.014+uPaintRegion;return texture2D(uPaintAtlas,uv).rgb;}
      `);
      shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
        vec3 brushWeights=pow(abs(normalize(vBrushNormal)),vec3(4.));brushWeights/=max(.001,dot(brushWeights,vec3(1.)));
        vec3 bp=vBrushPosition*uPaintScale;
        vec3 brush=paintSample(bp.yz)*brushWeights.x+paintSample(bp.xz)*brushWeights.y+paintSample(bp.xy)*brushWeights.z;
        float pigment=dot(brush,vec3(.299,.587,.114));
        ${region===0?`diffuseColor.rgb*=.3+.95*pigment;
        diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*brush/max(.4,pigment),.65);`:`diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*brush*1.4,.58);`}
      `);
    };
    m.customProgramCacheKey=()=>`impasto-${region}-${scale}`;cache.set(key,m);return m;
  }
  function coat(root){root.traverse(o=>{if(o.isMesh&&o.material?.isMeshStandardMaterial)o.material=material(o.material);});}
  return {atlas,material,coat};
}

export function createMeadow(scene,paint){
  let seed=87219;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  const smooth=(a,b,x)=>{const t=THREE.MathUtils.clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
  const height=(x,z)=>{
    const r=Math.hypot(x,z);const flat=smooth(9,14,r);
    return -.025+flat*(.7*Math.sin(x*.17+z*.08)+.8*Math.sin(z*.13-x*.06)+smooth(13,35,r)*(1.5+1.5*Math.sin(x*.08+z*.07)));
  };
  const geometry=new THREE.PlaneGeometry(140,140,150,150);geometry.rotateX(-Math.PI/2);
  const pos=geometry.attributes.position;for(let i=0;i<pos.count;i++)pos.setY(i,height(pos.getX(i),pos.getZ(i)));geometry.computeVertexNormals();
  const groundMaterial=paint.material(new THREE.MeshStandardMaterial({color:'#a6b67f',roughness:1}),1,.13);
  const ground=new THREE.Mesh(geometry,groundMaterial);ground.receiveShadow=true;scene.add(ground);

  // Reuse the essay's pigment atlas for an actual painted sky, not a photo backdrop.
  const skyCanvas=document.createElement('canvas');skyCanvas.width=2048;skyCanvas.height=1024;
  const c=skyCanvas.getContext('2d'),gradient=c.createLinearGradient(0,0,0,1024);
  gradient.addColorStop(0,'#71a9c2');gradient.addColorStop(.5,'#adc5c4');gradient.addColorStop(.78,'#e7dac1');gradient.addColorStop(1,'#a8b59a');c.fillStyle=gradient;c.fillRect(0,0,2048,1024);
  c.globalAlpha=.28;c.drawImage(paint.atlas.image,paint.atlas.image.width*.51,paint.atlas.image.height*.51,paint.atlas.image.width*.47,paint.atlas.image.height*.47,0,0,2048,800);c.globalAlpha=1;
  for(let i=0;i<550;i++){
    const x=random()*2048,y=160+random()*520,len=20+random()*160;
    c.strokeStyle=`rgba(${i%4?'245,231,204':'164,186,204'},${.08+random()*.24})`;c.lineWidth=3+random()*18;c.lineCap='round';c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+len*.5,y-7-random()*13,x+len,y-3);c.stroke();
  }
  const skyTexture=new THREE.CanvasTexture(skyCanvas);skyTexture.colorSpace=THREE.SRGBColorSpace;
  const sky=new THREE.Mesh(new THREE.SphereGeometry(68,40,24),new THREE.MeshBasicMaterial({map:skyTexture,side:THREE.BackSide,depthWrite:false,fog:false}));scene.add(sky);

  // Each blade is a tapered dab of paint in world space. A few merged draw calls
  // cover the meadow; the central carpet and desk remain clear and pickable.
  const blade=new THREE.PlaneGeometry(.09,.7,1,3);blade.translate(0,.35,0);
  const bp=blade.attributes.position;for(let i=0;i<bp.count;i++){const y=bp.getY(i);bp.setX(i,bp.getX(i)*(1-y/.85)+y*y*.12);}
  blade.computeVertexNormals();
  const grassMat=new THREE.MeshBasicMaterial({color:'#97a76c',side:THREE.DoubleSide});
  const grass=new THREE.InstancedMesh(blade,grassMat,6000);const dummy=new THREE.Object3D();const color=new THREE.Color();
  for(let i=0;i<6000;i++){
    let x,z,r;do{x=(random()-.5)*72;z=(random()-.5)*72;r=Math.hypot(x,z);}while((Math.abs(x)<3.5&&Math.abs(z)<2.65)||r>37);
    dummy.position.set(x,height(x,z),z);dummy.rotation.set((random()-.5)*.25,random()*Math.PI*2,(random()-.5)*.35);dummy.scale.set(.65+random()*1.6,.15+random()*.45,1);dummy.updateMatrix();grass.setMatrixAt(i,dummy.matrix);
    color.setHSL(.17+random()*.08,.18+random()*.15,.55+random()*.15);grass.setColorAt(i,color);
  }
  grass.receiveShadow=true;scene.add(grass);

  const petalGeometry=new THREE.SphereGeometry(1,6,4);
  const stems=new THREE.InstancedMesh(new THREE.CylinderGeometry(.005,.008,1,3),new THREE.MeshBasicMaterial({color:'#899963'}),1300);
  const petals=new THREE.InstancedMesh(petalGeometry,paint.material(new THREE.MeshStandardMaterial({color:'#f7d3b3'}),0,5),1300);
  for(let i=0;i<1300;i++){
    let x,z;do{x=(random()-.5)*50;z=(random()-.5)*50;}while(Math.abs(x)<3.6&&Math.abs(z)<2.7);
    const y=height(x,z),scale=.025+random()*.05,stemHeight=.18+random()*.2;dummy.rotation.set(0,0,0);dummy.position.set(x,y+stemHeight*.5,z);dummy.scale.set(1,stemHeight,1);dummy.updateMatrix();stems.setMatrixAt(i,dummy.matrix);dummy.position.set(x,y+stemHeight,z);dummy.rotation.set(random(),random()*3,random());dummy.scale.set(scale*1.8,scale*.6,scale);dummy.updateMatrix();petals.setMatrixAt(i,dummy.matrix);
    color.set(['#e4bd65','#e6c3ad','#bc8ca3','#d6dcac'][i%4]);petals.setColorAt(i,color);
  }
  scene.add(stems,petals);

  function tree(x,z,size){
    const base=height(x,z),treeGroup=new THREE.Group();treeGroup.position.set(x,base,z);
    const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.06*size,.11*size,2.8*size,6),paint.material(new THREE.MeshStandardMaterial({color:'#806448'}),0,2));trunk.position.y=1.4*size;treeGroup.add(trunk);
    for(let j=0;j<3;j++){
      const crown=new THREE.Mesh(new THREE.IcosahedronGeometry(1,2),paint.material(new THREE.MeshStandardMaterial({color:['#718962','#88a075','#9eae7b'][j%3]}),1,1.1));
      crown.position.set(Math.cos(j*2.4)*.17*size,(1.9+j*.55)*size,Math.sin(j*2.4)*.17*size);crown.scale.set((.8-j*.17)*size,1.25*size,(.65-j*.12)*size);crown.rotation.set(random()*.1,random(),random()*.12);crown.castShadow=true;treeGroup.add(crown);
    }
    scene.add(treeGroup);
  }
  tree(-6.8,-5.8,1.0);tree(7.5,-7.5,1.15);tree(-11,-14,1.1);
  for(let i=0;i<13;i++){const a=i/13*Math.PI*2;tree(Math.cos(a)*(22+random()*9),Math.sin(a)*(22+random()*9),.5+random()*.8);}
  scene.fog=new THREE.FogExp2('#b8c7b1',.018);
  return {height};
}

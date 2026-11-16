import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createRoom, mesh } from './models.js';
import { RoomPhysics } from './physics.js';
import { loadPaint, createMeadow } from './paint.js';

const $=id=>document.getElementById(id),canvas=$('scene');
let renderer;
try { renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'default'}); }
catch(error){$('loading').hidden=true;$('fallback').hidden=false;console.error('WebGL unavailable',error);}
if(renderer)start().catch(error=>{$('loading').hidden=true;$('fallback').hidden=false;console.error('Painted studio could not load',error);});
async function start(){
  const paint=await loadPaint();
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scene=new THREE.Scene();scene.background=new THREE.Color('#bdcdbd');
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.02;
  const camera=new THREE.PerspectiveCamera(38,1,.08,160);
  const hemi=new THREE.HemisphereLight('#fff7e3','#788466',1.7);scene.add(hemi);
  const sun=new THREE.DirectionalLight('#ffe0aa',2.4);sun.position.set(-3,7,5);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.1,far:18});sun.shadow.bias=-.0002;sun.shadow.normalBias=.025;sun.shadow.radius=3;scene.add(sun);
  const fill=new THREE.DirectionalLight('#dbe7dc',.9);fill.position.set(4,3,-2);scene.add(fill);
  const room=createRoom(scene);paint.coat(room.room);createMeadow(scene,paint);
  const physics=new RoomPhysics(room.colliders,room.props);
  const selectable=[...room.interactives.filter(p=>p.section==='lamp'),...room.props];for(const p of selectable){p.mesh.userData.item=p;}
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),dragPlane=new THREE.Plane(),hitPoint=new THREE.Vector3(),normal=new THREE.Vector3();
  let frame=0,lastTime=0,frameCount=0,transition=null,pending=null,dragging=false,view='room',lampOn=true,interacting=false,physicsMs=0,renderMs=0,framesMeasured=0,measureMs=0,activeFps=0;
  const grabs={};let lastGrab=null;
  const controls=new OrbitControls(camera,canvas);controls.enablePan=false;controls.enableDamping=!reduced;controls.dampingFactor=.085;controls.rotateSpeed=.65;controls.zoomSpeed=.7;controls.minPolarAngle=.16;controls.maxPolarAngle=Math.PI/2-.07;controls.minDistance=2.5;controls.maxDistance=36;
  controls.addEventListener('change',invalidate);controls.addEventListener('start',()=>{transition=null;interacting=true;invalidate();});controls.addEventListener('end',()=>{interacting=false;invalidate();});
  function invalidate(){if(!frame&&!document.hidden)frame=requestAnimationFrame(tick);}
  function viewPose(which){
    const aspect=innerWidth/innerHeight;const fit=Math.max(1,1.2/aspect);
    if(which==='desk')return {target:new THREE.Vector3(0,1.15,-.95),position:new THREE.Vector3(3.6,4.1,4.7).multiplyScalar(Math.max(1,.82/aspect)).add(new THREE.Vector3(0,.1,-.65))};
    const target=new THREE.Vector3(0,.95,0),offset=new THREE.Vector3(6.0,2.5,8.2).multiplyScalar(fit);
    return {target,position:target.clone().add(offset)};
  }
  function setView(which,immediate=false){view=which;const pose=viewPose(which);for(const name of ['room','desk']){$(`view-${name}`).classList.toggle('selected',which===name);$(`view-${name}`).setAttribute('aria-pressed',String(which===name));}
    if(immediate||reduced){camera.position.copy(pose.position);controls.target.copy(pose.target);controls.update();transition=null;}
    else transition={start:performance.now(),from:camera.position.clone(),targetFrom:controls.target.clone(),...pose};invalidate();
  }
  function resize(){const w=innerWidth,h=innerHeight;renderer.setPixelRatio(Math.min(Math.max(1,devicePixelRatio),w<700?1.5:1.75,Math.sqrt(2300000/(w*h))));renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();setView(view,true);invalidate();}
  window.addEventListener('resize',resize);resize();
  function updateDiagnostics(idle){
    const points={};for(const p of selectable){const v=p.mesh.getWorldPosition(new THREE.Vector3()).project(camera);points[p.name||p.section]={x:Math.round((v.x*.5+.5)*innerWidth),y:Math.round((-.5*v.y+.5)*innerHeight)};}
    $('diagnostics').textContent=JSON.stringify({held:physics.drag?.body.name??null,grabs,lastGrab,idle,frames:frameCount,awake:physics.awake,steps:physics.stepCount,physicsMs:+physicsMs.toFixed(2),renderMs:+renderMs.toFixed(2),activeFps,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,pixelRatio:renderer.getPixelRatio(),view,lampOn,camera:camera.position.toArray().map(n=>+n.toFixed(2)),points,bodies:physics.bodies.map(b=>({name:b.name,position:b.position.toArray().map(n=>+n.toFixed(3)),sleeping:b.sleepState===2}))});
  }
  function tick(now){
    frame=0;const dt=lastTime?Math.min((now-lastTime)/1000,.05):1/60;lastTime=now;
    const begin=performance.now();const awake=physics.step(dt);physicsMs=performance.now()-begin;
    if(transition){const t=Math.min(1,(now-transition.start)/850),ease=1-Math.pow(1-t,3);camera.position.lerpVectors(transition.from,transition.position,ease);controls.target.lerpVectors(transition.targetFrom,transition.target,ease);if(t===1)transition=null;}
    const changed=dragging?false:controls.update();
    if(physics.drag){const b=physics.drag.body;grabs[b.name].peakLift=Math.max(grabs[b.name].peakLift,b.position.y-pending.startY);grabs[b.name].peakSpin=Math.max(grabs[b.name].peakSpin,b.angularVelocity.length());}
    // Cutaway walls disappear when viewed from outside, so orbit works all the way around.
    room.backWall.visible=true;room.leftWall.visible=true;
    const renderStart=performance.now();renderer.render(scene,camera);renderMs=performance.now()-renderStart;frameCount++;
    if(dt<.05){framesMeasured++;measureMs+=dt*1000;if(measureMs>500){activeFps=Math.round(framesMeasured*1000/measureMs);framesMeasured=0;measureMs=0;}}
    const keep=awake||changed||transition||dragging||interacting;
    if(frameCount%15===0||!keep)updateDiagnostics(!keep);
    if(keep)invalidate();else lastTime=0;
  }
  function locate(event){const rect=canvas.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);}
  function pick(event){locate(event);const hits=raycaster.intersectObjects(selectable.map(i=>i.mesh),true);for(const h of hits){let o=h.object;while(o&&!o.userData.item)o=o.parent;if(o)return {item:o.userData.item,point:h.point};}return null;}
  function moveHeld(event){
    locate(event);
    if(raycaster.ray.intersectPlane(dragPlane,hitPoint)){
      hitPoint.y=Math.min(pending.point.y+.48,3.8);
      hitPoint.x=THREE.MathUtils.clamp(hitPoint.x,-2.8,2.85);hitPoint.z=THREE.MathUtils.clamp(hitPoint.z,-2.2,2.3);
      physics.moveDrag(hitPoint);
    }
    invalidate();
  }
  canvas.addEventListener('pointerdown',event=>{
    if(event.button!==0||pending)return;
    const hit=pick(event);transition=null;
    if(!hit||!hit.point.toArray().every(Number.isFinite))return;
    pending={...hit,id:event.pointerId,x:event.clientX,y:event.clientY,moved:false,startY:hit.item.body?.position.y};
    if(hit.item.body){
      event.preventDefault();event.stopImmediatePropagation();controls.enabled=false;
      normal.set(0,1,0);dragPlane.setFromNormalAndCoplanarPoint(normal,pending.point);
      if(!physics.startDrag(hit.item.body,pending.point)){pending=null;controls.enabled=true;return;}
      dragging=true;canvas.style.cursor='grabbing';canvas.setPointerCapture(event.pointerId);
      const name=hit.item.body.name;grabs[name]={count:(grabs[name]?.count??0)+1,peakLift:0,peakSpin:0};lastGrab=name;
      moveHeld(event);
    }
  },true);
  canvas.addEventListener('pointermove',event=>{
    if(pending&&event.pointerId===pending.id){
      if(Math.hypot(event.clientX-pending.x,event.clientY-pending.y)>6)pending.moved=true;
      if(dragging){event.preventDefault();event.stopImmediatePropagation();moveHeld(event);}return;
    }
    if(event.pointerType==='touch'||interacting)return;
    const hit=pick(event);canvas.style.cursor=hit?.item.section==='lamp'?'pointer':'grab';
  },true);
  function release(){
    const id=pending?.id;pending=null;dragging=false;physics.endDrag();controls.enabled=true;canvas.style.cursor='grab';
    if(id!==undefined&&canvas.hasPointerCapture(id))canvas.releasePointerCapture(id);
    invalidate();
  }
  canvas.addEventListener('pointerup',event=>{
    if(!pending||event.pointerId!==pending.id)return;
    const item=pending.item,click=!pending.moved;
    if(item.body){event.preventDefault();event.stopImmediatePropagation();}
    release();if(click&&item.section==='lamp')toggleLamp();
  },true);
  canvas.addEventListener('pointercancel',release,true);
  canvas.addEventListener('lostpointercapture',()=>{if(pending)release();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){release();if(frame)cancelAnimationFrame(frame);frame=0;lastTime=0;}else invalidate();});
  window.addEventListener('blur',()=>{if(pending)release();});
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();$('fallback').hidden=false;});canvas.addEventListener('webglcontextrestored',()=>location.reload());
  function toggleLamp(){lampOn=!lampOn;room.lamp.intensity=lampOn?6:0;$('light').setAttribute('aria-pressed',String(lampOn));invalidate();}
  $('view-room').addEventListener('click',()=>setView('room'));$('view-desk').addEventListener('click',()=>setView('desk'));
  function reset(){release();physics.reset();invalidate();}
  $('reset').addEventListener('click',reset);$('light').addEventListener('click',toggleLamp);
  window.addEventListener('keydown',event=>{
    if(event.key==='Escape')release();
    if(event.key.toLowerCase()==='r'&&!event.metaKey&&!event.ctrlKey)reset();
    if(event.key.toLowerCase()==='l'&&!event.metaKey&&!event.ctrlKey)toggleLamp();
    if(event.target!==canvas)return;
    const offset=camera.position.clone().sub(controls.target),spherical=new THREE.Spherical().setFromVector3(offset);
    if(event.key==='ArrowLeft')spherical.theta-=.14;else if(event.key==='ArrowRight')spherical.theta+=.14;else if(event.key==='ArrowUp')spherical.phi-=.1;else if(event.key==='ArrowDown')spherical.phi+=.1;else if(event.key==='+'||event.key==='=')spherical.radius*=.9;else if(event.key==='-')spherical.radius*=1.1;else return;
    event.preventDefault();transition=null;spherical.phi=THREE.MathUtils.clamp(spherical.phi,controls.minPolarAngle,controls.maxPolarAngle);spherical.radius=THREE.MathUtils.clamp(spherical.radius,controls.minDistance,controls.maxDistance);camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(spherical));controls.update();invalidate();
  });
  $('loading').hidden=true;
  invalidate();
}

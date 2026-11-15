import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createRoom, mesh } from './models.js';
import { RoomPhysics } from './physics.js';

const $=id=>document.getElementById(id),canvas=$('scene');
let renderer;
try { renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'default'}); }
catch(error){$('loading').hidden=true;$('fallback').hidden=false;console.error('WebGL unavailable',error);}
if(renderer)start();
function start(){
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scene=new THREE.Scene();scene.background=new THREE.Color('#eee9df');
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.12;
  const camera=new THREE.PerspectiveCamera(35,1,.08,80);
  const hemi=new THREE.HemisphereLight('#fff7e3','#928b74',2.2);scene.add(hemi);
  const sun=new THREE.DirectionalLight('#fff3d7',3.1);sun.position.set(-3,7,5);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.1,far:18});sun.shadow.bias=-.0002;sun.shadow.normalBias=.025;sun.shadow.radius=3;scene.add(sun);
  const fill=new THREE.DirectionalLight('#dbe7dc',.9);fill.position.set(4,3,-2);scene.add(fill);
  // A feathered grounding shadow makes the miniature sit in the page.
  const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=128;const sc=shadowCanvas.getContext('2d');const grad=sc.createRadialGradient(64,64,15,64,64,64);grad.addColorStop(0,'rgba(59,63,43,.22)');grad.addColorStop(1,'rgba(59,63,43,0)');sc.fillStyle=grad;sc.fillRect(0,0,128,128);
  const shadow=new THREE.Mesh(new THREE.PlaneGeometry(10,8),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=-.25;scene.add(shadow);
  const room=createRoom(scene),physics=new RoomPhysics(room.colliders,room.props);
  const selectable=[...room.interactives,...room.props];for(const p of selectable){p.mesh.userData.item=p;}
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),dragPlane=new THREE.Plane(),hitPoint=new THREE.Vector3(),normal=new THREE.Vector3();
  let frame=0,lastTime=0,frameCount=0,transition=null,pending=null,dragging=false,hover=null,view='room',lampOn=true,interacting=false,physicsMs=0,renderMs=0,framesMeasured=0,measureMs=0,activeFps=0;
  let priorFocus=null;
  const controls=new OrbitControls(camera,canvas);controls.enablePan=false;controls.enableDamping=!reduced;controls.dampingFactor=.085;controls.rotateSpeed=.65;controls.zoomSpeed=.7;controls.minPolarAngle=.16;controls.maxPolarAngle=Math.PI/2-.07;controls.minDistance=2.5;controls.maxDistance=36;
  controls.addEventListener('change',invalidate);controls.addEventListener('start',()=>{transition=null;interacting=true;invalidate();});controls.addEventListener('end',()=>{interacting=false;invalidate();});
  function invalidate(){if(!frame&&!document.hidden)frame=requestAnimationFrame(tick);}
  function viewPose(which){
    const aspect=innerWidth/innerHeight;const fit=Math.max(1,1.2/aspect);
    if(which==='desk')return {target:new THREE.Vector3(0,1.15,-.95),position:new THREE.Vector3(3.6,4.1,4.7).multiplyScalar(Math.max(1,.82/aspect)).add(new THREE.Vector3(0,.1,-.65))};
    const target=new THREE.Vector3(0,.95,0),offset=new THREE.Vector3(7.4,5.9,8.5).multiplyScalar(fit);
    return {target,position:target.clone().add(offset)};
  }
  function setView(which,immediate=false){view=which;const pose=viewPose(which);for(const name of ['room','desk']){$(`view-${name}`).classList.toggle('selected',which===name);$(`view-${name}`).setAttribute('aria-pressed',String(which===name));}
    if(immediate||reduced){camera.position.copy(pose.position);controls.target.copy(pose.target);controls.update();transition=null;}
    else transition={start:performance.now(),from:camera.position.clone(),targetFrom:controls.target.clone(),...pose};invalidate();
  }
  function resize(){const w=innerWidth,h=innerHeight;renderer.setPixelRatio(Math.min(Math.max(1,devicePixelRatio),w<700?1.5:1.75,Math.sqrt(2300000/(w*h))));renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();setView(view,true);$('gesture-hint').innerHTML=w<700?'Drag to look around <b>·</b> Pinch to come closer':'<span>↔</span> Drag to look around <b>·</b> Scroll to come closer';invalidate();}
  window.addEventListener('resize',resize);resize();
  function updateDiagnostics(idle){
    const points={};for(const p of selectable){const v=p.mesh.getWorldPosition(new THREE.Vector3()).project(camera);points[p.name||p.section]={x:Math.round((v.x*.5+.5)*innerWidth),y:Math.round((-.5*v.y+.5)*innerHeight)};}
    $('diagnostics').textContent=JSON.stringify({idle,frames:frameCount,awake:physics.awake,steps:physics.stepCount,physicsMs:+physicsMs.toFixed(2),renderMs:+renderMs.toFixed(2),activeFps,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,pixelRatio:renderer.getPixelRatio(),view,lampOn,camera:camera.position.toArray().map(n=>+n.toFixed(2)),points,bodies:physics.bodies.map(b=>({name:b.name,position:b.position.toArray().map(n=>+n.toFixed(3)),sleeping:b.sleepState===2}))});
  }
  function tick(now){
    frame=0;const dt=lastTime?Math.min((now-lastTime)/1000,.05):1/60;lastTime=now;
    const begin=performance.now();const awake=physics.step(dt);physicsMs=performance.now()-begin;
    if(transition){const t=Math.min(1,(now-transition.start)/850),ease=1-Math.pow(1-t,3);camera.position.lerpVectors(transition.from,transition.position,ease);controls.target.lerpVectors(transition.targetFrom,transition.target,ease);if(t===1)transition=null;}
    const changed=controls.update();
    // Cutaway walls disappear when viewed from outside, so orbit works all the way around.
    room.backWall.visible=camera.position.z>-2.5;room.leftWall.visible=camera.position.x>-3.1;
    const renderStart=performance.now();renderer.render(scene,camera);renderMs=performance.now()-renderStart;frameCount++;
    if(dt<.05){framesMeasured++;measureMs+=dt*1000;if(measureMs>500){activeFps=Math.round(framesMeasured*1000/measureMs);framesMeasured=0;measureMs=0;}}
    const keep=awake||changed||transition||dragging||interacting;
    if(frameCount%15===0||!keep)updateDiagnostics(!keep);
    if(keep)invalidate();else lastTime=0;
  }
  function locate(event){const rect=canvas.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);}
  function pick(event){locate(event);const hits=raycaster.intersectObjects(selectable.map(i=>i.mesh),true);for(const h of hits){let o=h.object;while(o&&!o.userData.item)o=o.parent;if(o)return {item:o.userData.item,point:h.point};}return null;}
  function hideTooltip(){$('tooltip').classList.remove('visible');hover=null;}
  canvas.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;const hit=pick(event);hideTooltip();transition=null;
    if(pending){release();return;}
    if(hit){pending={...hit,id:event.pointerId,x:event.clientX,y:event.clientY,moved:false};
      if(hit.item.body){event.stopImmediatePropagation();controls.enabled=false;canvas.setPointerCapture(event.pointerId);}
    }
  },true);
  canvas.addEventListener('pointermove',event=>{
    if(pending&&event.pointerId===pending.id){
      const distance=Math.hypot(event.clientX-pending.x,event.clientY-pending.y);if(distance>6)pending.moved=true;
      if(pending.item.body&&pending.moved){
        if(!dragging){camera.getWorldDirection(normal);dragPlane.setFromNormalAndCoplanarPoint(normal,pending.point);physics.startDrag(pending.item.body,pending.point);dragging=true;canvas.style.cursor='grabbing';}
        locate(event);if(raycaster.ray.intersectPlane(dragPlane,hitPoint)){hitPoint.y=THREE.MathUtils.clamp(hitPoint.y+.18,.12,3.8);hitPoint.x=THREE.MathUtils.clamp(hitPoint.x,-2.8,2.85);hitPoint.z=THREE.MathUtils.clamp(hitPoint.z,-2.2,2.3);physics.moveDrag(hitPoint);}invalidate();event.stopImmediatePropagation();
      }return;
    }
    if(event.pointerType==='touch'||interacting)return;
    const hit=pick(event);hover=hit?.item;
    canvas.style.cursor=hover?(hover.body?'grab':'pointer'):'grab';
    if(hover){$('tooltip').textContent=hover.label;$('tooltip').style.left=`${Math.min(event.clientX+15,innerWidth-230)}px`;$('tooltip').style.top=`${Math.max(12,event.clientY-34)}px`;$('tooltip').classList.add('visible');}else hideTooltip();
  },true);
  function release(){if(pending&&canvas.hasPointerCapture(pending.id))canvas.releasePointerCapture(pending.id);physics.endDrag();pending=null;dragging=false;controls.enabled=true;canvas.style.cursor='grab';invalidate();}
  canvas.addEventListener('pointerup',event=>{if(!pending||event.pointerId!==pending.id)return;const item=pending.item,click=!pending.moved;if(item.body)event.stopImmediatePropagation();release();if(click&&item.section)openSection(item.section);},true);
  canvas.addEventListener('pointercancel',release,true);canvas.addEventListener('lostpointercapture',()=>{if(dragging)release();});canvas.addEventListener('pointerleave',hideTooltip);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){release();if(frame)cancelAnimationFrame(frame);frame=0;lastTime=0;}else invalidate();});
  window.addEventListener('blur',()=>{if(dragging)release();});
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();$('fallback').hidden=false;});canvas.addEventListener('webglcontextrestored',()=>location.reload());
  const content={
    work:{kicker:'01 / ON THE LAPTOP',title:'Things I’m making.',body:'<h2>Underfoot</h2><p>A playful desktop space with objects that move, collide, and settle. The inspiration for the tactile feel of this room.</p><a href="https://github.com/rahulashwinhira" target="_blank" rel="noopener noreferrer">Explore my GitHub <span>↗</span></a>'},
    notes:{kicker:'02 / IN THE NOTEBOOK',title:'Room for ideas.',body:'<p>A small corner for sketches, experiments, and things still taking shape.</p><p class="small-note">The notebook is empty for now. More to come.</p>'},
    about:{kicker:'03 / SAY HELLO',title:'Hi, I’m Rahul.',body:'<p>Welcome to my little room on the internet. Have a look around. You can move things.</p><a href="https://github.com/rahulashwinhira" target="_blank" rel="noopener noreferrer">Find me on GitHub <span>↗</span></a>'}
  };
  function openSection(section){
    if(section==='lamp'){lampOn=!lampOn;room.lamp.intensity=lampOn?6:0;$('announcement').textContent=lampOn?'Lamp on':'Lamp off';invalidate();return;}
    const c=content[section];if(!c)return;priorFocus=document.activeElement;$('detail-kicker').textContent=c.kicker;$('detail-title').textContent=c.title;$('detail-content').innerHTML=c.body;$('detail').hidden=false;$('help').hidden=true;$('help-toggle').setAttribute('aria-expanded','false');$('close-detail').focus({preventScroll:true});hideTooltip();
  }
  function closeDetail(){$('detail').hidden=true;if(priorFocus?.isConnected)priorFocus.focus({preventScroll:true});}
  for(const b of document.querySelectorAll('[data-section]'))b.addEventListener('click',()=>openSection(b.dataset.section));
  $('close-detail').addEventListener('click',closeDetail);
  $('view-room').addEventListener('click',()=>setView('room'));$('view-desk').addEventListener('click',()=>setView('desk'));
  $('home').addEventListener('click',e=>{e.preventDefault();closeDetail();setView('room');});
  function reset(){release();physics.reset();$('announcement').textContent='Everything is back in its place.';invalidate();}
  $('reset').addEventListener('click',reset);$('help-toggle').addEventListener('click',()=>{$('help').hidden=!$('help').hidden;$('help-toggle').setAttribute('aria-expanded',String(!$('help').hidden));});
  window.addEventListener('keydown',event=>{
    if(event.key==='Escape'){closeDetail();$('help').hidden=true;$('help-toggle').setAttribute('aria-expanded','false');release();}
    if(event.key.toLowerCase()==='r'&&!event.metaKey&&!event.ctrlKey)reset();
    if(event.key.toLowerCase()==='l'&&!event.metaKey&&!event.ctrlKey)openSection('lamp');
    if(event.target!==canvas)return;
    const offset=camera.position.clone().sub(controls.target),spherical=new THREE.Spherical().setFromVector3(offset);
    if(event.key==='ArrowLeft')spherical.theta-=.14;else if(event.key==='ArrowRight')spherical.theta+=.14;else if(event.key==='ArrowUp')spherical.phi-=.1;else if(event.key==='ArrowDown')spherical.phi+=.1;else if(event.key==='+'||event.key==='=')spherical.radius*=.9;else if(event.key==='-')spherical.radius*=1.1;else return;
    event.preventDefault();transition=null;spherical.phi=THREE.MathUtils.clamp(spherical.phi,controls.minPolarAngle,controls.maxPolarAngle);spherical.radius=THREE.MathUtils.clamp(spherical.radius,controls.minDistance,controls.maxDistance);camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(spherical));controls.update();invalidate();
  });
  $('loading').classList.add('done');$('loading').addEventListener('transitionend',()=>{$('loading').hidden=true;},{once:true});if(reduced)$('loading').hidden=true;
  invalidate();
}

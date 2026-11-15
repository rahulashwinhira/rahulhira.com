import test from 'node:test';
import assert from 'node:assert/strict';
import { RoomPhysics } from '../src/physics.js';
const floor={size:[6,.2,5],pos:[0,-.1,0]};
const cube=(name,pos)=>({name,shape:'box',size:[.2,.2,.2],mass:.5,pos});
function run(p,seconds,fps=60){for(let i=0;i<seconds*fps;i++)p.step(1/fps);}
test('objects land on the desk and settle to sleep',()=>{
 const p=new RoomPhysics([floor,{size:[3,.13,1.3],pos:[0,1.38,-1]}],[cube('book',[0,2.3,-1])]);run(p,5);
 assert.ok(Math.abs(p.bodies[0].position.y-1.545)<.015);assert.equal(p.awake,0);
});
test('collision supports stacked objects rather than overlapping',()=>{
 const p=new RoomPhysics([floor],[cube('bottom',[0,.12,0]),cube('top',[0,.5,0])]);run(p,6);
 assert.ok(p.bodies[1].position.y>.28);assert.ok(p.bodies[0].position.y>.09);assert.equal(p.awake,0);
});
test('fixed time steps produce the same falling motion at 30 and 120 fps',()=>{
 const a=new RoomPhysics([floor],[cube('a',[0,2,0])]),b=new RoomPhysics([floor],[cube('b',[0,2,0])]);run(a,.4,30);run(b,.4,120);
 assert.ok(Math.abs(a.bodies[0].position.y-b.bodies[0].position.y)<.001);
});
test('spring lifting and release preserve gravity and collisions',()=>{
 const p=new RoomPhysics([floor],[cube('cube',[0,.12,0])]);run(p,2);const b=p.bodies[0];p.startDrag(b,{x:0,y:.2,z:0});p.moveDrag({x:.7,y:1.2,z:.2});run(p,1);
 assert.ok(b.position.y>.8);assert.ok(b.position.x>.5);p.endDrag();run(p,4);assert.ok(Math.abs(b.position.y-.1)<.015);assert.equal(p.awake,0);
});
test('reset puts a thrown object back and clears its momentum',()=>{
 const p=new RoomPhysics([floor],[cube('cube',[0,1,0])]);p.bodies[0].velocity.set(6,2,1);run(p,.5);p.reset();assert.deepEqual(p.bodies[0].position.toArray(),[0,1,0]);assert.equal(p.bodies[0].velocity.length(),0);
});

test('awake physics bodies produce finite Three.js transforms and ray hits',async()=>{
 const THREE=await import('three');
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(.5,.07,.36),new THREE.MeshBasicMaterial());
 const p=new RoomPhysics([floor],[{...cube('notebook',[0,1,0]),size:[.5,.07,.36],mesh}]);
 p.bodies[0].angularVelocity.set(1,2,.5);
 p.step(1/60);
 assert.ok(mesh.quaternion.toArray().every(Number.isFinite),'render quaternion must remain finite while awake');
 mesh.updateMatrixWorld();
 const ray=new THREE.Raycaster(new THREE.Vector3(0,3,0),new THREE.Vector3(0,-1,0));
 const hits=ray.intersectObject(mesh);
 assert.ok(hits.length>0,'moving object remains pickable');
 assert.ok(hits[0].point.toArray().every(Number.isFinite));
});

test('repeated edge grabs of thin props stay finite through pickup and release',async()=>{
 const THREE=await import('three');
 for(const def of [{name:'notebook',mass:.7,size:[.5,.07,.36]},{name:'pencil',mass:.12,size:[.53,.028,.028]}]){
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(...def.size),new THREE.MeshBasicMaterial());
  const p=new RoomPhysics([floor],[{...def,pos:[0,.5,0],mesh}]);run(p,2);
  const b=p.bodies[0];
  for(let turn=0;turn<6;turn++){
   const point=b.pointToWorldFrame({x:def.size[0]*.4,y:def.size[1]/2,z:0});
   assert.equal(p.startDrag(b,point),true);
   p.moveDrag({x:point.x,y:point.y+.6,z:point.z});run(p,.6);
   assert.ok(b.position.y>.25,`${def.name} lifts clear of the surface`);
   for(let i=0;i<60;i++){
    p.moveDrag({x:Math.sin(i/8)*1.5,y:1+Math.cos(i/11)*.3,z:Math.cos(i/9)});p.step(1/30);
    assert.ok([...b.position.toArray(),...mesh.quaternion.toArray()].every(Number.isFinite));
   }
   p.endDrag();run(p,3);assert.ok(b.position.y>0);
  }
 }
});
test('invalid grab coordinates cannot poison the scene and damaged bodies recover',()=>{
 const p=new RoomPhysics([floor],[cube('cube',[0,1,0])]);const b=p.bodies[0];
 assert.equal(p.startDrag(b,{x:NaN,y:1,z:0}),false);assert.equal(p.drag,null);
 p.startDrag(b,{x:0,y:1,z:0});p.moveDrag({x:Infinity,y:2,z:0});run(p,.3);
 assert.ok(b.position.toArray().every(Number.isFinite));
 b.position.x=NaN;p.step(1/60);assert.equal(p.drag,null);assert.ok(b.position.toArray().every(Number.isFinite));
 p.step(NaN);p.step(-1);assert.ok(b.position.toArray().every(Number.isFinite));
});

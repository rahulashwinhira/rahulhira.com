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

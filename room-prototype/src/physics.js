import * as CANNON from 'cannon-es';
const finiteVector=v=>v&&[v.x,v.y,v.z].every(Number.isFinite);
const finiteBody=b=>finiteVector(b.position)&&finiteVector(b.velocity)&&finiteVector(b.angularVelocity)&&finiteVector(b.quaternion)&&Number.isFinite(b.quaternion.w);
export class RoomPhysics {
  constructor(colliders, definitions){
    this.world=new CANNON.World({gravity:new CANNON.Vec3(0,-9.81,0),allowSleep:true});
    this.world.broadphase=new CANNON.SAPBroadphase(this.world);this.world.solver.iterations=12;this.world.solver.tolerance=.0001;
    this.world.defaultContactMaterial.friction=.55;this.world.defaultContactMaterial.restitution=.12;
    this.world.defaultContactMaterial.contactEquationStiffness=1e7;
    this.bodies=[];this.accumulator=0;this.drag=null;this.stepCount=0;
    for(const c of colliders){const body=new CANNON.Body({mass:0,shape:new CANNON.Box(new CANNON.Vec3(...c.size.map(v=>v/2))),position:new CANNON.Vec3(...c.pos)});if(c.quat)body.quaternion.set(...c.quat);this.world.addBody(body);}
    for(const def of definitions){
      const material=new CANNON.Material({friction:.6,restitution:def.restitution??.12});
      const body=new CANNON.Body({mass:def.mass,material,position:new CANNON.Vec3(...def.pos),linearDamping:.2,angularDamping:.4,sleepSpeedLimit:.12,sleepTimeLimit:.65});
      if(def.shape==='sphere')body.addShape(new CANNON.Sphere(def.radius));
      else if(def.shape==='cylinder')body.addShape(new CANNON.Cylinder(def.radius,def.radius,def.height,12));
      else body.addShape(new CANNON.Box(new CANNON.Vec3(...def.size.map(v=>v/2))));
      if(def.rotation)body.quaternion.setFromEuler(...def.rotation);
      body.home={pos:body.position.clone(),quat:body.quaternion.clone()};body.name=def.name;body.mesh=def.mesh;this.world.addBody(body);this.bodies.push(body);def.body=body;
      this.syncBody(body,true);
    }
    this.world.addEventListener('preStep',()=>{if(this.drag){this.drag.body.wakeUp();this.drag.spring.applyForce();}});
  }
  startDrag(body,point){
    if(!this.bodies.includes(body)||!finiteVector(point))return false;
    this.endDrag();const anchor=new CANNON.Body({mass:0,collisionFilterGroup:0,collisionFilterMask:0});anchor.position.set(point.x,point.y,point.z);
    const local=body.pointToLocalFrame(new CANNON.Vec3(point.x,point.y,point.z));
    // Mass-scaled, near critically damped spring: responsive without teleporting through furniture.
    const spring=new CANNON.Spring(anchor,body,{restLength:0,stiffness:body.mass*200,damping:body.mass*22,localAnchorB:local});
    body.wakeUp();this.drag={body,anchor,spring};return true;
  }
  moveDrag(point){if(this.drag&&finiteVector(point))this.drag.anchor.position.set(point.x,point.y,point.z);}
  endDrag(){if(this.drag){const b=this.drag.body;const speed=b.velocity.length();if(speed>7)b.velocity.scale(7/speed,b.velocity);b.wakeUp();this.drag=null;}}
  resetBody(b){if(this.drag?.body===b)this.endDrag();b.position.copy(b.home.pos);b.quaternion.copy(b.home.quat);b.previousPosition.copy(b.position);b.interpolatedPosition.copy(b.position);b.previousQuaternion.copy(b.quaternion);b.interpolatedQuaternion.copy(b.quaternion);b.velocity.setZero();b.angularVelocity.setZero();b.force.setZero();b.torque.setZero();b.aabbNeedsUpdate=true;b.updateInertiaWorld(true);b.wakeUp();this.syncBody(b,true);}
  reset(){this.endDrag();this.accumulator=0;for(const b of this.bodies)this.resetBody(b);}
  step(dt){
    // A bounded fixed step prevents large tab-resume jumps and keeps thin props on the desk.
    for(const b of this.bodies)if(!finiteBody(b))this.resetBody(b);
    this.accumulator+=Number.isFinite(dt)?Math.max(0,Math.min(dt,.05)):0;let count=0;const h=1/120;
    while(this.accumulator>=h&&count<6){this.world.step(h);this.accumulator-=h;count++;this.stepCount++;
      for(const b of this.bodies){if(!finiteBody(b)||b.position.y < -1.2||Math.abs(b.position.x)>6||Math.abs(b.position.z)>6)this.resetBody(b);const speed=b.velocity.length();if(speed>8)b.velocity.scale(8/speed,b.velocity);const spin=b.angularVelocity.length();if(spin>16)b.angularVelocity.scale(16/spin,b.angularVelocity);}
    }
    for(const b of this.bodies)this.syncBody(b,false,this.accumulator/h);
    return this.bodies.some(b=>b.sleepState!==CANNON.Body.SLEEPING)||!!this.drag;
  }
  syncBody(b,exact,alpha=1){if(!b.mesh)return;if(exact||b.sleepState===CANNON.Body.SLEEPING){b.mesh.position.copy(b.position);b.mesh.quaternion.copy(b.quaternion);}else{b.mesh.position.copy(b.previousPosition).lerp(b.position,alpha);// Cannon and Three use different quaternion representations; interpolate within Cannon first.
      b.previousQuaternion.slerp(b.quaternion,alpha,b.interpolatedQuaternion);b.mesh.quaternion.copy(b.interpolatedQuaternion);}}
  get awake(){return this.bodies.filter(b=>b.sleepState!==CANNON.Body.SLEEPING).length;}
}

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const materials = new Map();
const colors = { cream: '#e5ddc8', plaster: '#e0dccb', sage: '#7c8a72', dark: '#344739', oak: '#9a6840', walnut: '#69472f', brass: '#af8c4d', clay: '#ad5941', paper: '#e8dfc8', black: '#202c28' };
export function mat(color, extra = {}) {
  color = colors[color] || color;
  const key = color + JSON.stringify(extra);
  if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial({ color, roughness: .78, ...extra }));
  return materials.get(key);
}
export function mesh(parent, geometry, material, pos = [0,0,0], rotation = [0,0,0]) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(...pos); m.rotation.set(...rotation); m.castShadow = m.receiveShadow = true;
  parent.add(m); return m;
}
export function box(parent, size, material, pos, radius = .015, rotation) {
  return mesh(parent, radius ? new RoundedBoxGeometry(...size, 2, Math.min(radius,...size.map(n=>n/2))) : new THREE.BoxGeometry(...size), material, pos, rotation);
}
function cylinder(parent, top, bottom, height, material, pos, rotation, segments = 24) {
  return mesh(parent, new THREE.CylinderGeometry(top,bottom,height,segments),material,pos,rotation);
}
function sphere(parent, radius, material, pos, scale=[1,1,1]) {
  const m=mesh(parent,new THREE.SphereGeometry(radius,16,12),material,pos);m.scale.set(...scale);return m;
}
function rod(parent, a, b, radius, material) {
  const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),delta=bv.clone().sub(av);
  const m=cylinder(parent,radius,radius,delta.length(),material,av.clone().add(bv).multiplyScalar(.5).toArray());
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return m;
}
function texture(width,height,draw){const c=document.createElement('canvas');c.width=width;c.height=height;draw(c.getContext('2d'),width,height);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;}
function seeded(seed=1){return()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};}
const random=seeded(42);
function woodTexture(){return texture(512,512,(c,w,h)=>{
  c.fillStyle='#a77e51';c.fillRect(0,0,w,h);
  for(let i=0;i<1100;i++){const y=random()*h;c.strokeStyle=`rgba(${random()>.5?'66,39,18':'234,203,155'},${.03+random()*.09})`;c.lineWidth=.4+random()*1.6;c.beginPath();c.moveTo(0,y);for(let x=0;x<=w;x+=24)c.lineTo(x,y+Math.sin(x/95+i)*2.2);c.stroke();}
});}
function printTexture(kind){return texture(512,640,(c,w,h)=>{
  c.fillStyle='#f0e7ce';c.fillRect(0,0,w,h);
  if(kind==='art'){
    c.fillStyle='#b75f43';c.beginPath();c.arc(256,241,132,Math.PI,0);c.lineTo(388,453);c.lineTo(124,453);c.fill();
    c.fillStyle='#52634e';c.beginPath();c.arc(286,319,87,0,Math.PI*2);c.fill();
    c.fillStyle='#e9c28c';c.beginPath();c.arc(210,312,69,0,Math.PI*2);c.fill();
    c.fillStyle='#4b5845';c.font='21px Georgia';c.textAlign='center';c.fillText('ROOM FOR IDEAS',256,535);c.font='10px Arial';c.fillText('A STUDY IN EVERYDAY THINGS',256,566);
  }else{
    c.fillStyle='#58664c';c.font='italic 72px Georgia';c.fillText('Small',60,160);c.fillText('things,',60,240);c.fillText('well made.',60,320);c.font='17px Arial';c.fillText('NOTES / RAHUL HIRA',60,560);
  }
});}
function surface(parent,w,h,map,pos,rot=[0,0,0],emissive=false){return mesh(parent,new THREE.PlaneGeometry(w,h),new THREE.MeshStandardMaterial({map,roughness:.9,...(emissive?{emissive:0xffffff,emissiveMap:map,emissiveIntensity:.32}:{})}),pos,rot);}
// Bake transforms and merge by material. Detailed furniture stays inexpensive to draw.
export function compact(group){
  group.updateMatrixWorld(true);const inverse=group.matrixWorld.clone().invert(),buckets=new Map();
  group.traverse(o=>{if(!o.isMesh||Array.isArray(o.material))return;const g=o.geometry.clone();g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,o.matrixWorld));const plain=g.index?g.toNonIndexed():g;for(const a of Object.keys(plain.attributes))if(!['position','normal','uv'].includes(a))plain.deleteAttribute(a);const list=buckets.get(o.material)||[];list.push(plain);buckets.set(o.material,list);});
  group.clear();for(const [material,geometries] of buckets){const geometry=mergeGeometries(geometries);if(geometry){const m=mesh(group,geometry,material);m.frustumCulled=true;}for(const g of geometries)g.dispose();}
  return group;
}
function group(parent,pos=[0,0,0],ry=0){const g=new THREE.Group();g.position.set(...pos);g.rotation.y=ry;parent.add(g);return g;}
function plant(parent,pos,scale=1){
  const g=group(parent,pos);g.scale.setScalar(scale);cylinder(g,.25,.19,.4,mat('clay'),[0,.2,0]);cylinder(g,.255,.255,.045,mat('#bd7254'),[0,.39,0]);cylinder(g,.226,.226,.015,mat('#3f3c2a'),[0,.407,0]);
  for(let i=0;i<9;i++){const a=i*2.4, y=.85+(i%3)*.27;const x=Math.cos(a)*.28,z=Math.sin(a)*.28;rod(g,[0,.4,0],[x,y,z],.013,mat('dark'));const leaf=sphere(g,.24,mat(i%2?'#526b44':'#758650'),[x,y,z],[.52,1.5,.17]);leaf.rotation.set(Math.sin(a)*.6, a, Math.cos(a)*.5);}
  return g;
}
function book(parent,pos,size,color,angle=0){const g=group(parent,pos,angle);box(g,size,mat('paper'),[0,0,0],.005);box(g,[size[0]+.025,.018,size[2]+.025],mat(color),[0,size[1]/2,0]);box(g,[size[0]+.025,.018,size[2]+.025],mat(color),[0,-size[1]/2,0]);box(g,[.025,size[1],size[2]+.025],mat(color),[-size[0]/2,0,0]);return g;}

export function createRoom(scene){
  const room=group(scene),staticGroup=group(room),backWall=group(room),leftWall=group(room),interactives=[],props=[],colliders=[];
  const oak=new THREE.MeshStandardMaterial({map:woodTexture(),color:'#c6a47c',roughness:.73});
  const walnut=mat('walnut'),cream=mat('cream'),sage=mat('sage'),brass=mat('brass',{metalness:.5,roughness:.4});
  const collider=(size,pos,quat)=>colliders.push({size,pos,quat});
  box(staticGroup,[6.2,.22,4.9],mat('#b59d78'),[0,-.12,0],.06);
  // Individual boards, with staggered seams and quiet variations in tone.
  for(let row=0;row<12;row++)for(let col=0;col<4;col++){
    const z=-2.23+row*.405,x=-2.3+col*1.54;const m=box(staticGroup,[1.532,.035,.397],oak,[x,.006,z],.004);m.material=oak;
  }
  collider([6.2,.2,4.9],[0,-.09,0]);
  box(backWall,[6.2,2.85,.15],mat('plaster'),[0,1.425,-2.45],.025);collider([6.2,2.85,.15],[0,1.425,-2.45]);
  box(backWall,[6.1,.12,.06],cream,[0,.08,-2.34],.007);
  // The left wall has a real opening for a recessed four-pane window.
  box(leftWall,[.15,2.85,1.1],mat('#bac1ad'),[-3.04,1.425,-1.97],.02);
  box(leftWall,[.15,2.85,1.1],mat('#bac1ad'),[-3.04,1.425,1.94],.02);
  box(leftWall,[.15,.86,2.85],mat('#bac1ad'),[-3.04,.43,0],.02);
  box(leftWall,[.15,.52,2.85],mat('#bac1ad'),[-3.04,2.59,0],.02);
  collider([.15,2.85,4.9],[-3.04,1.425,0]);
  box(leftWall,[.28,.1,3],cream,[-2.97,.9,0]);
  for(const z of [-1.41,1.41])box(leftWall,[.18,1.55,.09],cream,[-2.97,1.64,z]);
  box(leftWall,[.18,.09,2.9],cream,[-2.97,2.38,0]);
  box(leftWall,[.12,1.5,.055],cream,[-2.97,1.65,0]);box(leftWall,[.12,.055,2.8],cream,[-2.97,1.65,0]);
  const skyMap=texture(256,256,(c,w,h)=>{const gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#c4d5cb');gr.addColorStop(.65,'#dce1cb');gr.addColorStop(1,'#9fae86');c.fillStyle=gr;c.fillRect(0,0,w,h);c.fillStyle='#a4b291';for(let i=0;i<6;i++){c.beginPath();c.arc(i*64,260,100+i*3,0,Math.PI*2);c.fill();}});
  surface(leftWall,2.8,1.44,skyMap,[-3.06,1.65,0],[0,Math.PI/2,0],true);
  box(leftWall,[.09,.12,4.8],cream,[-2.94,.08,0]);
  // Framed print and pinboard behind the desk.
  box(backWall,[.97,1.2,.055],walnut,[.65,2.01,-2.34]);box(backWall,[.9,1.13,.015],cream,[.65,2.01,-2.303]);surface(backWall,.82,1.04,printTexture('art'),[.65,2.01,-2.29]);
  box(backWall,[.69,.65,.04],oak,[-.6,2.15,-2.33]);box(backWall,[.61,.57,.012],mat('#b59865'),[-.6,2.15,-2.302]);
  for(let i=0;i<3;i++){const note=box(backWall,[.19,.23,.008],mat(['#e6cf8e','#d4d8bc','#e9dfc4'][i]),[-.8+i*.2,2.2-(i%2)*.16,-2.283],0,[0,0,(i-1)*.14]);sphere(backWall,.014,mat('clay'),[note.position.x,note.position.y+.09,-2.27]);}
  // Desk with a raised lip, tapered legs, and a drawer unit.
  box(staticGroup,[3.45,.13,1.3],oak,[0,1.38,-1.27],.04);collider([3.45,.13,1.3],[0,1.38,-1.27]);
  box(staticGroup,[3.35,.11,.07],walnut,[0,1.49,-1.89]);
  for(const x of [-1.48,1.48])for(const z of [-1.76,-.79]){rod(staticGroup,[x,1.32,z],[x*1.06,.045,z+.02],.055,walnut);collider([.13,1.32,.13],[x,.66,z]);}
  box(staticGroup,[.73,.58,1.04],oak,[-1.06,1.02,-1.3],.025);collider([.73,.58,1.04],[-1.06,1.02,-1.3]);
  for(let i=0;i<2;i++){box(staticGroup,[.68,.255,.04],oak,[-1.06,.88+i*.28,-.755]);box(staticGroup,[.18,.023,.035],brass,[-1.06,.91+i*.28,-.724]);}
  // Woven rug with a geometric border, rendered as one textured surface.
  const rugMap=texture(1024,768,(c,w,h)=>{
    c.fillStyle='#a75f46';c.fillRect(0,0,w,h);c.strokeStyle='#d7ba83';c.lineWidth=26;c.strokeRect(39,39,w-78,h-78);c.strokeStyle='#465a47';c.lineWidth=12;c.strokeRect(66,66,w-132,h-132);
    for(let y=120;y<h-80;y+=100)for(let x=130;x<w-90;x+=120){c.save();c.translate(x,y);c.rotate(Math.PI/4);c.fillStyle='#d1ae7b';c.fillRect(-23,-23,46,46);c.fillStyle='#6c7454';c.fillRect(-10,-10,20,20);c.restore();}
    for(let y=0;y<h;y+=3){c.fillStyle=y%2?'#ffffff0b':'#33251912';c.fillRect(0,y,w,1);}
  });
  box(staticGroup,[3.9,.017,2.55],mat('#9d6e50'),[.05,.034,.65],.025);surface(staticGroup,3.88,2.53,rugMap,[.05,.044,.65],[-Math.PI/2,0,0]);
  // Desk chair, angled as if someone has just stood up.
  const chair=group(staticGroup,[.25,0,.38],-.25);
  box(chair,[.86,.13,.8],walnut,[0,.77,0],.06);box(chair,[.81,.14,.75],mat('#7a8566'),[0,.87,0],.08);
  box(chair,[.87,.55,.13],walnut,[0,1.26,.36],.075,[-.13,0,0]);box(chair,[.79,.44,.12],mat('#7a8566'),[0,1.28,.285],.07,[-.13,0,0]);
  for(const x of [-.35,.35])for(const z of [-.3,.3])rod(chair,[x,.79,z],[x*1.25,.06,z*1.4],.037,walnut);
  for(const x of [-.36,.36])rod(chair,[x,.7,.29],[x,1.28,.36],.03,walnut);
  collider([.95,.9,.95],[.25,.48,.38]);collider([.95,.5,.16],[.34,1.22,.72]);
  // Sideboard, records, books, and a record player.
  const side=group(staticGroup,[-2.22,0,.63]);box(side,[.94,.55,1.18],oak,[0,.47,0],.025);
  for(const x of [-.34,.34])for(const z of [-.45,.45])box(side,[.07,.24,.07],walnut,[x,.12,z]);
  for(let i=0;i<7;i++)box(side,[.07,.37,.65],mat(['#4f6252','#ae5e48','#d2bf94','#b38c55'][i%4]),[-.31+i*.088,.46,.12],.006);
  box(side,[.86,.075,1.05],walnut,[0,.79,0]);cylinder(side,.325,.325,.023,mat('black'),[0,.841,-.06]);cylinder(side,.11,.11,.025,mat('clay'),[0,.854,-.06]);cylinder(side,.018,.018,.034,brass,[0,.87,-.06]);rod(side,[.32,.88,-.4],[.3,.88,.14],.012,brass);box(side,[.07,.027,.08],mat('black'),[.28,.87,.18]);
  collider([.94,.86,1.18],[-2.22,.43,.63]);
  plant(staticGroup,[2.35,0,-1.67],1.15);collider([.65,.5,.65],[2.35,.25,-1.67]);
  // Floor lamp: ribbed linen shade, warm pool of light.
  cylinder(staticGroup,.3,.32,.055,mat('dark'),[2.26,.06,.68]);rod(staticGroup,[2.26,.08,.68],[2.26,2.04,.68],.025,brass);
  cylinder(staticGroup,.32,.47,.5,mat('#e6d7b4'),[2.26,1.96,.68],undefined,40);
  cylinder(staticGroup,.44,.44,.015,mat('#f5e8c7',{emissive:'#e6bd73',emissiveIntensity:.55}),[2.26,1.711,.68]);
  for(let i=0;i<20;i++){const a=i*Math.PI/10;rod(staticGroup,[2.26+Math.cos(a)*.325,2.205,.68+Math.sin(a)*.325],[2.26+Math.cos(a)*.466,1.715,.68+Math.sin(a)*.466],.004,mat('#c5b58f'));}
  collider([.62,2.2,.62],[2.26,1.1,.68]);
  const lampHit=mesh(room,new THREE.CylinderGeometry(.33,.47,.5,24),new THREE.MeshBasicMaterial({visible:false}),[2.26,1.96,.68]);interactives.push({mesh:lampHit,label:'Lamp · switch the light',section:'lamp'});
  const lamp=new THREE.PointLight('#ffce85',6,5,2);lamp.position.set(2.26,1.7,.68);room.add(lamp);
  // Laptop: the work portal.
  const laptop=group(room,[-.2,1.465,-1.36],.04);box(laptop,[.83,.035,.56],mat('#b8bdb3',{metalness:.55,roughness:.4}),[0,.019,0],.02);box(laptop,[.7,.006,.25],mat('#405047'),[0,.039,-.065],.01);
  for(let row=0;row<4;row++)for(let col=0;col<11;col++)box(laptop,[.048,.004,.035],mat('#919b91'),[-.31+col*.062,.044,-.16+row*.053],.004);
  box(laptop,[.25,.003,.12],mat('#a2aa9e'),[0,.04,.16],.01);
  const lid=group(laptop,[0,.04,-.255]);lid.rotation.x=-.19;box(lid,[.83,.54,.033],mat('#a7afa4'),[0,.27,0],.025);
  const screenMap=texture(768,480,(c,w,h)=>{c.fillStyle='#253d33';c.fillRect(0,0,w,h);c.fillStyle='#b5c4a0';c.font='18px Arial';c.fillText('A FEW THINGS I’VE MADE',48,57);c.fillStyle='#f1e8cf';c.font='italic 110px Georgia';c.fillText('hello.',45,242);c.font='25px Georgia';c.fillText('I’m Rahul.',49,296);c.strokeStyle='#83947d';c.beginPath();c.moveTo(48,375);c.lineTo(720,375);c.stroke();c.font='17px Arial';c.fillStyle='#b5c4a0';c.fillText('EXPLORE MY WORK',48,422);c.fillText('↗',680,422);});
  surface(lid,.76,.467,screenMap,[0,.278,.019],undefined,true);compact(laptop);interactives.push({mesh:laptop,label:'Laptop · selected work',section:'work'});collider([.85,.56,.25],[-.2,1.72,-1.65]);collider([.85,.05,.56],[-.2,1.47,-1.36]);
  // A small clock and pencil pot on the desk.
  const clock=group(staticGroup,[-1.36,1.66,-1.63]);cylinder(clock,.17,.17,.075,cream,[0,0,0],[Math.PI/2,0,0]);cylinder(clock,.149,.149,.008,mat('#f7efd8'),[0,0,.041],[Math.PI/2,0,0]);rod(clock,[0,0,.049],[-.065,.045,.049],.007,mat('dark'));rod(clock,[0,0,.05],[.015,.1,.05],.006,mat('dark'));box(clock,[.15,.04,.1],walnut,[0,-.18,0]);
  cylinder(staticGroup,.075,.07,.18,mat('clay'),[1.37,1.54,-1.72]);for(let i=0;i<4;i++)rod(staticGroup,[1.34+i*.022,1.52,-1.72],[1.33+i*.03,1.85-(i%2)*.06,-1.72],.009,mat(i%2?'sage':'#cda35b'));
  plant(leftWall,[-2.84,.95,.98],.33);
  // Original small props. Every loose object is a separate rigid body.
  const notebook=group(room);book(notebook,[0,0,0],[.48,.045,.34],'#bd7254');surface(notebook,.42,.29,printTexture('notes'),[0,.034,0],[-Math.PI/2,0,0]);props.push({mesh:compact(notebook),name:'notebook',label:'Notebook · notes / drag to pick up',section:'notes',shape:'box',size:[.5,.07,.36],mass:.7,pos:[.85,1.52,-1.12],rotation:[0,-.18,0]});
  const mug=group(room);cylinder(mug,.112,.092,.23,mat('#e7ddc5'),[0,0,0]);cylinder(mug,.096,.096,.012,mat('#61442d'),[0,.119,0]);const handle=mesh(mug,new THREE.TorusGeometry(.079,.023,8,20),cream,[.122,.017,0]);props.push({mesh:compact(mug),name:'mug',label:'Coffee · pick me up',shape:'cylinder',radius:.115,height:.25,mass:1.8,pos:[-.91,1.61,-1.05]});
  const ball=group(room);sphere(ball,.115,mat('#25302b',{roughness:.4}),[0,0,0]);const ballMap=texture(128,128,(c)=>{c.fillStyle='#f4ecd6';c.fillRect(0,0,128,128);c.fillStyle='#24332c';c.font='bold 88px Arial';c.textAlign='center';c.fillText('8',64,97);});surface(ball,.115,.115,ballMap,[0,.045,.108],[-.4,0,0]);props.push({mesh:compact(ball),name:'eight-ball',label:'Eight ball · give it a nudge',shape:'sphere',radius:.115,mass:.45,restitution:.55,pos:[1.3,1.58,-.88]});
  const phone=group(room);box(phone,[.23,.045,.43],mat('clay'),[0,0,0],.03);box(phone,[.197,.005,.36],mat('#273c32'),[0,.026,0],.02);surface(phone,.17,.3,texture(192,320,(c)=>{c.fillStyle='#314a3a';c.fillRect(0,0,192,320);c.fillStyle='#e5d5ad';c.textAlign='center';c.font='52px Georgia';c.fillText('rh.',96,157);c.font='13px Arial';c.fillText('SAY HELLO',96,223);}),[0,.03,0],[-Math.PI/2,0,0],true);props.push({mesh:compact(phone),name:'phone',label:'Phone · about / drag to pick up',section:'about',shape:'box',size:[.23,.06,.43],mass:.8,pos:[.37,1.51,-.80],rotation:[0,.2,0]});
  const pencil=group(room);cylinder(pencil,.013,.013,.42,mat('#d4a251'),[0,0,0],[0,0,Math.PI/2],6);cylinder(pencil,.013,0,.055,mat('#dbc5a0'),[.236,0,0],[0,0,Math.PI/2],6);cylinder(pencil,.014,.014,.055,mat('clay'),[-.235,0,0],[0,0,Math.PI/2]);props.push({mesh:compact(pencil),name:'pencil',label:'Pencil · pick me up',shape:'box',size:[.53,.028,.028],mass:.12,pos:[.93,1.49,-.79],rotation:[0,.15,0]});
  const block=group(room);box(block,[.19,.19,.19],mat('sage'),[0,0,0],.025);for(let x of [-1,1])for(let z of [-1,1])sphere(block,.018,cream,[x*.047,.097,z*.047],[1,.2,1]);props.push({mesh:compact(block),name:'wooden-die',label:'Wooden die · toss it',shape:'box',size:[.19,.19,.19],mass:.4,restitution:.24,pos:[1.18,1.57,-1.39]});
  compact(staticGroup);compact(backWall);compact(leftWall);
  return {room,props,colliders,interactives,backWall,leftWall,lamp};
}

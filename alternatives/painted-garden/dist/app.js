'use strict';
(()=>{
 const $=id=>document.getElementById(id),canvas=$('world'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let progress=0,target=0,time=0,last=0,raf=0,dirty=true,wind=!reduced.matches,active=-1,drag=null,moved=false,frames=0,frameMs=0,flight=null,priorFocus=null,pinch=null;
 const world=new GardenWorld(canvas,invalidate),clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
 const notes=[
  {title:'Things taking shape.',kicker:'THE FLOWER / SELECTED WORK',symbol:'✳',body:'<h3>Underfoot</h3><p>A playful desktop world. Small objects, real weight, and the pleasure of moving things around.</p><h3>A little room</h3><p>An experiment in making a personal website feel like a place you can visit.</p><a href="https://github.com/rahulashwinhira" target="_blank" rel="noopener noreferrer">Explore my projects ↗</a>'},
  {title:'Ideas worth sitting with.',kicker:'THE STONES / WORDS',symbol:'◌',body:'<h3>Response to the Intelligence Age</h3><p>A close reading of the promises, language, and assumptions behind an imagined AI future. Written as a journey through a painted landscape.</p><a href="https://rahulashwinhira.github.io/response-to-the-intelligence-age/" target="_blank" rel="noopener noreferrer">Walk through the essay ↗</a><p class="subtle">One idea at a time. More writing to come.</p>'},
  {title:'Hi, I’m Rahul.',kicker:'THE POOL / A MOMENT TO PAUSE',symbol:'≈',body:'<p>I make things, write things, and follow ideas that catch my attention.</p><p>This garden is another way to explore that work. Nothing here needs to be rushed.</p><a href="https://github.com/rahulashwinhira" target="_blank" rel="noopener noreferrer">Find me on GitHub ↗</a>'}
 ];
 function invalidate(){dirty=true;if(!raf&&!document.hidden)raf=requestAnimationFrame(frame);}
 function frame(now){raf=0;const dt=last?Math.min(.05,(now-last)/1000):1/60;last=now;const delta=target-progress;progress=reduced.matches||Math.abs(delta)<.00005?target:progress+delta*(1-Math.exp(-dt/.35));if(wind)time+=dt;
  if(world.ready){const start=performance.now();world.render(progress,time);frameMs=performance.now()-start;frames++;$('loading').classList.add('done');$('loading').setAttribute('aria-hidden','true');$('trail-fill').style.width=`${progress*100}%`;
   if(frames%15===0||!wind)$('diagnostics').textContent=JSON.stringify({ready:true,frames,frameMs:+frameMs.toFixed(2),progress:+progress.toFixed(3),wind,active,points:world.landmarks.map(o=>({name:o.name,...world.project(o.center,progress)}))});
  }
  if(flight&&Math.abs(target-progress)<.004){const i=flight;flight=null;showNote(i.index);}
  dirty=false;if(wind||Math.abs(delta)>.00005)raf=requestAnimationFrame(frame);else last=0;
 }
 function resize(){world.resize(innerWidth,innerHeight,Math.min(Math.max(1,devicePixelRatio),1.15));$('hint').textContent=innerWidth<700?'Drag to look · Pinch to zoom · Choose a landmark':'Scroll to wander · Drag to look around';invalidate();}
 function go(index,open=true){active=index;world.selected=index;world.focus=index;world.yaw=world.pitch=0;world.zoom=1;target=clamp((world.landmarks[index]?.route-2)/113,0,1);if(!Number.isFinite(target))target=[.044,.363,.708][index];$('welcome').classList.add('away');$('welcome').inert=true;$('detail').hidden=true;for(const b of document.querySelectorAll('[data-stop]'))b.classList.toggle('active',+b.dataset.stop===index);if(open)flight={index};invalidate();}
 function showNote(index){const n=notes[index];priorFocus=document.activeElement;$('note-number').textContent=String(index+1).padStart(2,'0');$('specimen').textContent=n.symbol;$('detail-kicker').textContent=n.kicker;$('detail-title').textContent=n.title;$('detail-copy').innerHTML=n.body;$('detail').hidden=false;$('close').focus({preventScroll:true});$('object-hint').hidden=true;$('status').textContent=n.title;}
 function close(){flight=null;$('detail').hidden=true;if(priorFocus?.isConnected)priorFocus.focus({preventScroll:true});}
 function home(){close();active=-1;world.focus=world.selected=-1;world.yaw=world.pitch=0;world.zoom=1;target=0;$('welcome').classList.remove('away');$('welcome').inert=false;for(const b of document.querySelectorAll('[data-stop]'))b.classList.remove('active');invalidate();}
 function wander(delta){flight=null;close();target=clamp(target+delta,0,1);world.focus=-1;world.pitch=0;$('welcome').classList.toggle('away',target>.012);$('welcome').inert=target>.012;invalidate();}
 canvas.addEventListener('wheel',e=>{e.preventDefault();wander(e.deltaY*.00023);},{passive:false});
 const touches=new Map();
 canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);touches.set(e.pointerId,[e.clientX,e.clientY]);drag={id:e.pointerId,x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY};moved=false;canvas.style.cursor='grabbing';if(touches.size===2){const p=[...touches.values()];pinch={distance:Math.hypot(p[1][0]-p[0][0],p[1][1]-p[0][1]),zoom:world.zoom};}});
 canvas.addEventListener('pointermove',e=>{
  if(touches.has(e.pointerId))touches.set(e.pointerId,[e.clientX,e.clientY]);if(pinch&&touches.size===2){const p=[...touches.values()];world.zoom=clamp(pinch.zoom*Math.hypot(p[1][0]-p[0][0],p[1][1]-p[0][1])/pinch.distance,.65,1.6);moved=true;invalidate();return;}
  if(drag&&drag.id===e.pointerId){const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>5)moved=true;if(moved){world.yaw-=dx*.004;world.pitch=clamp(world.pitch+dy*.003,-.7,.6);$('welcome').classList.add('away');$('welcome').inert=true;$('object-hint').hidden=true;invalidate();}drag.x=e.clientX;drag.y=e.clientY;return;}
  const hit=world.ready?world.pick(e.clientX,e.clientY,progress):-1;if(hit!==world.hover){world.hover=hit;invalidate();}canvas.style.cursor=hit>=0?'pointer':'grab';$('object-hint').hidden=hit<0||!$('detail').hidden;if(hit>=0)$('object-label').textContent=world.landmarks[hit].label;
 });
 canvas.addEventListener('pointerup',e=>{const click=drag&&!moved&&!pinch;touches.delete(e.pointerId);if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);drag=null;pinch=null;canvas.style.cursor='grab';if(click){const hit=world.pick(e.clientX,e.clientY,progress);if(hit>=0)go(hit);}invalidate();});
 canvas.addEventListener('pointercancel',()=>{touches.clear();drag=null;pinch=null;});canvas.addEventListener('pointerleave',()=>{world.hover=-1;$('object-hint').hidden=true;invalidate();});
 for(const b of document.querySelectorAll('[data-stop]'))b.addEventListener('click',()=>go(+b.dataset.stop));$('enter').addEventListener('click',()=>go(0,false));$('close').addEventListener('click',close);$('next-stop').addEventListener('click',()=>go((active+1)%3));$('home').addEventListener('click',e=>{e.preventDefault();home();});
 function updateMotion(){ $('motion').setAttribute('aria-pressed',String(wind));$('motion').setAttribute('aria-label',wind?'Pause the wind':'Let the wind move');$('motion').textContent=wind?'Ⅱ':'▷';invalidate();}
 $('motion').addEventListener('click',()=>{wind=!wind;updateMotion();});reduced.addEventListener('change',()=>{wind=!reduced.matches;updateMotion();});
 addEventListener('keydown',e=>{if(e.key==='Escape')close();if(e.target!==canvas)return;if(e.key==='ArrowUp'){wander(.04);e.preventDefault();}if(e.key==='ArrowDown'){wander(-.04);e.preventDefault();}if(e.key==='ArrowLeft'){world.yaw-=.13;invalidate();e.preventDefault();}if(e.key==='ArrowRight'){world.yaw+=.13;invalidate();e.preventDefault();}if(e.key==='+'||e.key==='='){world.zoom=clamp(world.zoom*1.1,.65,1.6);invalidate();}if(e.key==='-'){world.zoom=clamp(world.zoom/1.1,.65,1.6);invalidate();}if(e.key==='Enter'&&active>=0)showNote(active);});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;last=0;}else invalidate();});
 addEventListener('resize',resize);resize();updateMotion();
 // The content index remains usable if graphics or an image cannot load.
 const fallback=world.fallback.bind(world);world.fallback=error=>{fallback(error);wind=false;$('loading').hidden=true;$('hint').textContent='Explore the garden using the index';for(const b of document.querySelectorAll('[data-stop]'))b.addEventListener('click',()=>showNote(+b.dataset.stop));};
 if(!world.gl)world.fallback(new Error('WebGL is unavailable'));
})();

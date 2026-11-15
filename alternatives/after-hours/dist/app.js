'use strict';
(()=>{
 const $=id=>document.getElementById(id),canvas=$('atmosphere'),ctx=canvas.getContext('2d'),root=document.documentElement;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let theme='moonlight',running=!reduced.matches,raf=0,last=0,time=0,w=innerWidth,h=innerHeight,frames=0,hover=0,targetHover=0;
 const pointer={x:.75,y:.4},themes={moonlight:{number:'01',name:'Moonlight',description:'A little quieter, after dark.',bg:'#0c0e11'},tide:{number:'02',name:'Tide',description:'Nothing stays still for long.',bg:'#071014'},ember:{number:'03',name:'Ember',description:'Keep a small fire going.',bg:'#100d0b'}};
 let seed=24581;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const stars=Array.from({length:85},()=>({x:rand(),y:rand()*.75,r:.3+rand()*.8,phase:rand()*6.28,alpha:.08+rand()*.3}));
 const sparks=Array.from({length:70},()=>({x:rand(),y:rand(),speed:.025+rand()*.04,len:2+rand()*5,phase:rand()*6.28}));
 const moon=document.createElement('canvas');moon.width=moon.height=420;const mc=moon.getContext('2d');
 function makeMoon(){mc.clearRect(0,0,420,420);mc.save();mc.beginPath();mc.arc(210,210,200,0,Math.PI*2);mc.clip();const light=mc.createRadialGradient(115,115,10,210,210,235);light.addColorStop(0,'#dbd9cb');light.addColorStop(.65,'#9d9f9c');light.addColorStop(1,'#4a5056');mc.fillStyle=light;mc.fillRect(0,0,420,420);
  for(let i=0;i<5200;i++){const x=rand()*420,y=rand()*420,r=rand()*2.2;mc.fillStyle=`rgba(${rand()>.5?'246,244,231':'35,42,49'},${rand()*.12})`;mc.fillRect(x,y,r*2,r);}
  for(let i=0;i<75;i++){const x=rand()*400,y=rand()*400,r=2+rand()*20;const g=mc.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'#30374030');g.addColorStop(.75,'#4a505618');g.addColorStop(1,'#ffffff06');mc.fillStyle=g;mc.beginPath();mc.arc(x,y,r,0,Math.PI*2);mc.fill();}
  const shade=mc.createLinearGradient(90,30,360,260);shade.addColorStop(0,'#0c0e1100');shade.addColorStop(.32,'#0c0e1140');shade.addColorStop(.53,'#0c0e11f7');shade.addColorStop(1,'#0c0e11');mc.fillStyle=shade;mc.fillRect(0,0,420,420);mc.restore();
 }
 makeMoon();
 function invalidate(){if(!raf&&!document.hidden)raf=requestAnimationFrame(draw);}
 function resize(){w=innerWidth;h=innerHeight;const dpr=Math.min(devicePixelRatio||1,1.6,Math.sqrt(2100000/(w*h)));canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);canvas.style.width=w+'px';canvas.style.height=h+'px';ctx?.setTransform(dpr,0,0,dpr,0,0);invalidate();}
 function moonlight(){
  for(const s of stars){const alpha=s.alpha*(.7+.3*Math.sin(time*.28+s.phase));ctx.fillStyle=`rgba(211,219,230,${alpha})`;ctx.beginPath();ctx.arc(s.x*w,s.y*h,s.r,0,Math.PI*2);ctx.fill();}
  const size=w<650?115:Math.min(225,w*.16),x=w<650?w*.80:w*.83,y=w<650?112:h*.26;
  const glow=ctx.createRadialGradient(x,y,0,x,y,size*.85);glow.addColorStop(0,`rgba(170,186,209,${.035+hover*.016})`);glow.addColorStop(1,'rgba(170,186,209,0)');ctx.fillStyle=glow;ctx.fillRect(x-size,y-size,size*2,size*2);
  ctx.globalAlpha=w<650?.19:.55+hover*.12;ctx.drawImage(moon,x-size/2+Math.sin(time*.05)*2,y-size/2,size,size);ctx.globalAlpha=1;
  // A sparse chart of points, more like a pencil constellation than a particle cloud.
  const points=[[.73,.62],[.79,.57],[.85,.64],[.91,.57],[.88,.45]];ctx.strokeStyle=`rgba(178,191,207,${.04+hover*.045})`;ctx.lineWidth=.65;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p[0]*w,p[1]*h):ctx.moveTo(p[0]*w,p[1]*h));ctx.stroke();for(const p of points){ctx.fillStyle='#d1dae35e';ctx.fillRect(p[0]*w-1,p[1]*h-1,1.5,1.5);}
 }
 function tide(){
  const horizon=h*.58,glow=ctx.createLinearGradient(0,horizon-100,0,h);glow.addColorStop(0,'#17282d00');glow.addColorStop(.6,'#1832381c');glow.addColorStop(1,'#0c1b2190');ctx.fillStyle=glow;ctx.fillRect(0,horizon-100,w,h);
  for(let i=0;i<45;i++){const depth=i/44,y=horizon+Math.pow(depth,1.6)*h*.6;ctx.beginPath();const opacity=(.018+depth*.095)*(w<650?.55:1);ctx.strokeStyle=`rgba(152,182,191,${opacity})`;ctx.lineWidth=.5+depth*.5;
   for(let x=0;x<w+8;x+=8){const phase=x*.008+time*.16+i*.66,amp=2+depth*14+hover*depth*4;const yy=y+Math.sin(phase)*amp+Math.sin(x*.019-time*.21+i*.3)*amp*.22; x?ctx.lineTo(x,yy):ctx.moveTo(x,yy);}ctx.stroke();
  }
  const x=w*.81+Math.sin(time*.08)*20;ctx.fillStyle='#dce8eb75';ctx.fillRect(x,horizon-4,2,2);ctx.strokeStyle='#a5c0c51c';ctx.beginPath();ctx.moveTo(w*.64,horizon);ctx.lineTo(w*.97,horizon);ctx.stroke();
 }
 function ember(){
  const cx=w<650?w*.8:w*.85,cy=h*1.13;const g=ctx.createRadialGradient(cx,cy,0,cx,cy,h*.55);g.addColorStop(0,'#a64b2348');g.addColorStop(.45,'#63371d12');g.addColorStop(1,'#100d0b00');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  for(const s of sparks){const life=(s.y+time*s.speed*.23)%1,fade=Math.sin(life*Math.PI),x=w*(.6+s.x*.35)+Math.sin(time*.2+s.phase)*12+(pointer.x-.5)*life*18,y=h*(1.08-life*.73);ctx.strokeStyle=`rgba(220,167,106,${fade*(.32+hover*.2)})`;ctx.lineWidth=.6+s.x*.5;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-1.5,y+s.len);ctx.stroke();}
  ctx.strokeStyle='#b2835333';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(w*.69,h*.86);ctx.bezierCurveTo(w*.78,h*.85,w*.86,h*.89,w*.94,h*.86);ctx.stroke();
 }
 function draw(now){raf=0;const dt=last?Math.min(.05,(now-last)/1000):1/60;last=now;if(running)time+=dt;hover+=(targetHover-hover)*.1;
  if(ctx){ctx.clearRect(0,0,w,h);if(theme==='moonlight')moonlight();else if(theme==='tide')tide();else ember();}frames++;
  $('diagnostics').textContent=JSON.stringify({theme,running,frames,width:w,height:h,drawer:!$('drawer').hidden});
  if(running||Math.abs(targetHover-hover)>.001)invalidate();else last=0;
 }
 function setTheme(name,save=true){if(!themes[name])return;theme=name;root.dataset.theme=name;document.querySelector('meta[name="theme-color"]').content=themes[name].bg;for(const b of document.querySelectorAll('button[data-theme]'))b.setAttribute('aria-pressed',String(b.dataset.theme===name));$('scene-number').textContent=`${themes[name].number} / ${themes[name].name.toUpperCase()}`;$('scene-description').textContent=themes[name].description;$('announcement').textContent=`${themes[name].name} atmosphere`;if(save){try{localStorage.setItem('rahul-atmosphere',name);}catch{}const url=new URL(location.href);url.searchParams.set('theme',name);history.replaceState(null,'',url);}invalidate();}
 const content={work:{title:'A few things I’m making',html:'<article class="project"><h3><span class="index">01</span>Underfoot</h3><p>A desktop world of objects you can move, collide, and play with.</p><a href="https://github.com/rahulashwinhira" target="_blank" rel="noopener noreferrer">Find my work on GitHub ↗</a></article><article class="project"><h3><span class="index">02</span>Small worlds on the web</h3><p>A room you can inhabit. A painted garden you can wander through. Experiments in making the web feel more tactile.</p></article>'},writing:{title:'Words I’ve written',html:'<article class="project"><h3>Response to the Intelligence Age</h3><p>On the language, promises, and assumptions in a vision of our AI future.</p><a href="https://rahulashwinhira.github.io/response-to-the-intelligence-age/" target="_blank" rel="noopener noreferrer">Read the illustrated essay ↗</a></article>'},about:{title:'A little about me',html:'<p>I’m Rahul Hira. I build interactive experiments and write about ideas that catch my attention.</p><p>This portfolio is an ongoing collection of those things. There’s room for it to change.</p>'}};
 let opened=null;
 function close(){const lastButton=document.querySelector(`[data-open="${opened}"]`);$('drawer').hidden=true;document.body.classList.remove('drawer-open');for(const b of document.querySelectorAll('[data-open]'))b.setAttribute('aria-expanded','false');opened=null;lastButton?.focus({preventScroll:true});invalidate();}
 function open(name){if(opened===name){close();return;}opened=name;const c=content[name];$('drawer-title').textContent=c.title;$('drawer-content').innerHTML=c.html;$('drawer').hidden=false;document.body.classList.add('drawer-open');for(const b of document.querySelectorAll('[data-open]'))b.setAttribute('aria-expanded',String(b.dataset.open===name));$('close').focus({preventScroll:true});$('drawer').scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'center'});invalidate();}
 for(const b of document.querySelectorAll('button[data-theme]'))b.addEventListener('click',()=>setTheme(b.dataset.theme));for(const b of document.querySelectorAll('[data-open]'))b.addEventListener('click',()=>open(b.dataset.open));$('close').addEventListener('click',close);
 for(const el of document.querySelectorAll('.text-link')){el.addEventListener('pointerenter',()=>{targetHover=1;invalidate();});el.addEventListener('pointerleave',()=>{targetHover=0;invalidate();});el.addEventListener('focus',()=>{targetHover=1;invalidate();});el.addEventListener('blur',()=>{targetHover=0;invalidate();});}
 function motionUI(){$('motion').setAttribute('aria-pressed',String(running));$('motion').setAttribute('aria-label',running?'Pause ambient motion':'Resume ambient motion');$('motion-symbol').textContent=running?'Ⅱ':'▷';$('motion-label').textContent=running?'Pause':'Resume';invalidate();}
 $('motion').addEventListener('click',()=>{running=!running;motionUI();});$('home').addEventListener('click',e=>{e.preventDefault();close();window.scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'});});addEventListener('keydown',e=>{if(e.key==='Escape')close();});
 addEventListener('pointermove',e=>{pointer.x=e.clientX/w;pointer.y=e.clientY/h;});addEventListener('resize',resize);document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;last=0;}else invalidate();});reduced.addEventListener('change',()=>{running=!reduced.matches;motionUI();});
 try{const stored=localStorage.getItem('rahul-atmosphere');if(themes[stored])theme=stored;}catch{}const requested=new URL(location.href).searchParams.get('theme');if(themes[requested])theme=requested;resize();setTheme(theme,false);motionUI();
})();

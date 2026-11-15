'use strict';
(() => {
  const root=document.documentElement,canvas=document.getElementById('trails'),ctx=canvas.getContext('2d'),cursor=document.getElementById('cursor'),diagnostics=document.getElementById('diagnostics');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const themes={moonlight:{rgb:'215,225,255'},tide:{rgb:'160,223,225'},ember:{rgb:'255,174,106'}};
  let theme='moonlight',w=innerWidth,h=innerHeight,raf=0,lastFrame=0,frames=0,totalParticles=0,bursts=0;
  let pointer=null,trail=[],particles=[],moveEvents=0,visible=false;
  function report(){diagnostics.textContent=JSON.stringify({theme,frames,moveEvents,totalParticles,bursts,particles:particles.length,trailPoints:trail.length,cursorVisible:visible,reducedMotion:reduced.matches,width:w,height:h});}
  function invalidate(){if(!raf&&!document.hidden&&!reduced.matches&&ctx)raf=requestAnimationFrame(draw);}
  function clear(){trail=[];particles=[];pointer=null;visible=false;root.classList.remove('cursor-active');cancelAnimationFrame(raf);raf=0;lastFrame=0;ctx?.clearRect(0,0,w,h);report();}
  function resize(){w=innerWidth;h=innerHeight;const scale=Math.min(devicePixelRatio||1,1.75);canvas.width=Math.round(w*scale);canvas.height=Math.round(h*scale);ctx?.setTransform(scale,0,0,scale,0,0);report();invalidate();}
  function setTheme(name,save=true){
    if(!themes[name])return;theme=name;root.dataset.theme=name;trail=[];particles=[];
    for(const button of document.querySelectorAll('[data-theme] button,button[data-theme]'))button.setAttribute('aria-pressed',String(button.dataset.theme===name));
    if(save){try{localStorage.setItem('rahul-atmosphere',name);}catch{}const url=new URL(location.href);url.searchParams.set('theme',name);window.history.replaceState(null,'',url);}
    ctx?.clearRect(0,0,w,h);report();invalidate();
  }
  // The art follows pointer movement. Nothing animates behind the letter while idle.
  function particle(x,y,vx,vy,life,size){particles.push({x,y,vx,vy,life,maxLife:life,size});totalParticles++;if(particles.length>200)particles.shift();}
  function move(event){
    if(event.pointerType==='touch'||reduced.matches||!ctx)return;
    const now=performance.now(),x=event.clientX,y=event.clientY;
    const previous=pointer&&now-pointer.time<180?pointer:{x,y,time:now};
    const dx=x-previous.x,dy=y-previous.y,distance=Math.hypot(dx,dy),steps=Math.min(20,Math.max(1,Math.ceil(distance/6)));
    pointer={x,y,time:now};visible=true;moveEvents++;
    cursor.style.transform=`translate3d(${x}px,${y}px,0)`;
    cursor.classList.toggle('over-link',!!event.target.closest('a,button'));
    root.classList.add('cursor-active');
    for(let i=1;i<=steps;i++){
      const px=previous.x+dx*i/steps,py=previous.y+dy*i/steps;
      trail.push({x:px,y:py,time:now});
      if(theme==='ember'){
        particle(px,py,-dx*.6+(Math.random()-.5)*32,-15-Math.random()*55,550+Math.random()*650,.7+Math.random()*1.2);
      }else if(theme==='moonlight'&&i%2===0){
        particle(px,py,(Math.random()-.5)*22,(Math.random()-.5)*22,350+Math.random()*400,.5+Math.random());
      }
    }
    if(trail.length>120)trail.splice(0,trail.length-120);
    invalidate();
  }
  function burst(event){
    if(event.pointerType==='touch'||reduced.matches||!ctx)return;
    bursts++;const count=theme==='tide'?12:24;
    for(let i=0;i<count;i++){const angle=i/count*Math.PI*2,speed=25+Math.random()*100;particle(event.clientX,event.clientY,Math.cos(angle)*speed,Math.sin(angle)*speed,400+Math.random()*500,.8+Math.random());}
    invalidate();
  }
  function strokeTrail(now){
    const life=theme==='tide'?950:theme==='moonlight'?650:300;
    trail=trail.filter(p=>now-p.time<life);if(trail.length<2)return;
    const rgb=themes[theme].rgb,strands=theme==='tide'?5:theme==='moonlight'?3:1;
    ctx.lineCap='round';ctx.lineJoin='round';
    for(let strand=0;strand<strands;strand++){
      for(let i=1;i<trail.length;i++){
        const a=trail[i-1],b=trail[i],age=(now-b.time)/life;
        const dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy)||1;
        const wave=theme==='tide'?Math.sin(age*5+strand*.8)*age*16:(strand-1)*age*5;
        const offset=(strand-(strands-1)/2)*(theme==='tide'?3:2)+wave;
        const alpha=(1-age)**2*(theme==='ember'?.42:theme==='tide'?.35:.36);
        ctx.strokeStyle=`rgba(${rgb},${alpha})`;ctx.lineWidth=theme==='ember'?1.3:1-strand*.11;
        ctx.beginPath();ctx.moveTo(a.x-dy/length*offset,a.y+dx/length*offset);ctx.lineTo(b.x-dy/length*offset,b.y+dx/length*offset);ctx.stroke();
      }
    }
  }
  function draw(now){
    raf=0;const dt=lastFrame?Math.min((now-lastFrame)/1000,.04):1/60;lastFrame=now;
    ctx.clearRect(0,0,w,h);ctx.globalCompositeOperation='lighter';strokeTrail(now);
    const rgb=themes[theme].rgb;
    for(const p of particles){
      p.life-=dt*1000;p.x+=p.vx*dt;p.y+=p.vy*dt;
      if(theme==='ember'){p.vy+=19*dt;p.vx*=.985;}else{p.vx*=.97;p.vy*=.97;}
      const alpha=Math.max(0,p.life/p.maxLife);ctx.strokeStyle=`rgba(${rgb},${alpha*.7})`;ctx.fillStyle=`rgba(${rgb},${alpha*.85})`;ctx.lineWidth=p.size;
      if(theme==='ember'){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-p.vx*.035,p.y-p.vy*.06);ctx.stroke();}
      else if(theme==='moonlight'){const s=p.size*(1+alpha);ctx.fillRect(p.x-s,p.y-.45,s*2,.9);ctx.fillRect(p.x-.45,p.y-s,.9,s*2);}
      else{ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-p.vx*.04,p.y-p.vy*.04);ctx.stroke();}
    }
    particles=particles.filter(p=>p.life>0);ctx.globalCompositeOperation='source-over';frames++;
    report();if(trail.length||particles.length)invalidate();else lastFrame=0;
  }
  for(const button of document.querySelectorAll('button[data-theme]'))button.addEventListener('click',()=>setTheme(button.dataset.theme));
  addEventListener('pointermove',move,{passive:true});addEventListener('pointerdown',burst,{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>{visible=false;pointer=null;root.classList.remove('cursor-active');report();});
  addEventListener('blur',clear);addEventListener('resize',resize);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)clear();});
  reduced.addEventListener('change',clear);
  try{const saved=localStorage.getItem('rahul-atmosphere');if(themes[saved])theme=saved;}catch{}
  const requested=new URL(location.href).searchParams.get('theme');if(themes[requested])theme=requested;
  resize();setTheme(theme,false);
})();

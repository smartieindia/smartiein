/* SMARTIE v9 site.js */
(function(){
  // settings.json runtime overrides (theme, hero images, announcement)
  fetch('/settings.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(s=>{
    if(!s) return;
    /* normalize CMS shapes */
    if(Array.isArray(s.heroSlots)){s.heroImages=s.heroImages||{};s.heroSlots.forEach(h=>{if(h&&h.slot&&h.image)s.heroImages[h.slot]=h.image})}
    if(Array.isArray(s.videos))s.videos=s.videos.map(v=>typeof v==='string'?v:(v&&v.url)||'').filter(Boolean);
    if(Array.isArray(s.clients))s.clientLogos=s.clients.map(c=>typeof c==='string'?c:[(c&&c.logo)||'',(c&&c.name)||''].filter(Boolean).join(' | ')).filter(Boolean);
    if(s.theme && s.theme!=='red') document.documentElement.setAttribute('data-theme',s.theme);
    if(s.announcement){const t=document.getElementById('announce');if(t){t.textContent=s.announcement;t.parentElement.style.display=''}}
    if(s.heroImages){
      document.querySelectorAll('[data-hero-slot]').forEach(el=>{
        const v=s.heroImages[el.getAttribute('data-hero-slot')];
        if(v) el.style.backgroundImage='url("'+v+'")';
      });
    }
  }).catch(()=>{});

  // mobile nav
  const bg=document.querySelector('.burger'), nl=document.querySelector('.navlinks');
  if(bg&&nl) bg.addEventListener('click',()=>nl.classList.toggle('open'));

  // hero slideshow + rotating headline
  const slides=[...document.querySelectorAll('.hero-slide')];
  if(slides.length>1){let i=0;setInterval(()=>{slides[i].classList.remove('on');i=(i+1)%slides.length;slides[i].classList.add('on');
    const cap=document.querySelector('.hero-caption');if(cap&&slides[i].dataset.cap)cap.textContent=slides[i].dataset.cap;},(window.__slideMs||7000));}
  const rot=document.querySelector('.rot');
  if(rot){const words=(rot.dataset.words||'').split('|');let w=0;
    setInterval(()=>{w=(w+1)%words.length;rot.style.opacity=0;setTimeout(()=>{rot.textContent=words[w];rot.style.opacity=1;},260);},2600);
    rot.style.transition='opacity .26s';}

  // image fallback -> branded art
  document.querySelectorAll('.plate img').forEach(img=>{
    function fail(){
      if(img.dataset.drive&&!img.dataset.tried){img.dataset.tried='1';img.src=img.dataset.drive;return}
      img.closest('.plate').classList.add('noimg');
    }
    img.addEventListener('error',fail);
    if(img.complete&&img.naturalWidth===0)fail();
  });

  // scroll reveals + slat reveals
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in','open');io.unobserve(e.target);}}),{threshold:.15});
  document.querySelectorAll('.rv,.slat-reveal').forEach(el=>io.observe(el));
})();
/* v9.1 cinematic layer */
(function(){
  // scroll progress beam
  const p=document.createElement('div');p.className='progress';document.body.appendChild(p);
  addEventListener('scroll',()=>{const h=document.documentElement;p.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
  // count-up hero stats
  const counters=document.querySelectorAll('.hero-stats b');
  const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);
    const raw=e.target.textContent, n=parseInt(raw.replace(/\D/g,''))||0, suf=raw.replace(/[\d]/g,'');
    let t0=null;const dur=1400;
    function step(ts){if(!t0)t0=ts;const k=Math.min((ts-t0)/dur,1);e.target.textContent=Math.round(n*(1-Math.pow(1-k,3)))+suf;if(k<1)requestAnimationFrame(step)}
    requestAnimationFrame(step);}),{threshold:.6});
  counters.forEach(c=>cio.observe(c));
})();

/* featured videos from settings.json */
(function(){
  fetch('/settings.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(s=>{
    if(s&&Array.isArray(s.videos))s.videos=s.videos.map(v=>typeof v==='string'?v:(v&&v.url)||'').filter(Boolean);
    const grid=document.getElementById('vidGrid');
    if(!grid||!s||!Array.isArray(s.videos)||!s.videos.length)return;
    grid.innerHTML='';
    s.videos.slice(0,9).forEach(v=>{
      const id=(v.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/)||[])[1]||v;
      const d=document.createElement('div');d.className='vid';
      d.innerHTML='<img src="https://i.ytimg.com/vi/'+id+'/hqdefault.jpg" alt="SMARTIE installation video" loading="lazy"><div class="play"><span>▶</span></div>';
      d.addEventListener('click',()=>{d.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen title="SMARTIE video"></iframe>'});
      grid.appendChild(d);
    });
  }).catch(()=>{});
})();

/* client logos from settings.json */
(function(){
  fetch('/settings.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(s=>{
    if(s&&Array.isArray(s.clients))s.clientLogos=s.clients.map(c=>typeof c==='string'?c:[(c&&c.logo)||'',(c&&c.name)||''].filter(Boolean).join(' | ')).filter(Boolean);
    const t=document.getElementById('logoTrack');
    if(!t||!s||!Array.isArray(s.clientLogos)||!s.clientLogos.length)return;
    const mk=x=>{const parts=x.split('|').map(t=>t.trim());const img=parts.length>1?parts[0]:(/\.(png|jpe?g|webp|svg)(\?|$)/i.test(parts[0])?parts[0]:'');
      const name=parts.length>1?parts[1]:(img?'':parts[0]);
      const p=document.createElement('span');p.className='logo-pill';
      p.style.cssText='flex:0 0 auto;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;width:230px;height:120px;padding:14px 16px';
      let top;
      if(img){top=document.createElement('img');top.src=img;top.alt=(name||'SMARTIE client')+' logo';top.loading='lazy';top.style.cssText='max-height:56px;max-width:190px;width:auto;height:auto'}
      else{top=document.createElement('span');top.textContent=(name||'?').split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();top.style.cssText='width:44px;height:44px;border-radius:10px;background:var(--graphite);color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--disp);font-weight:900;font-size:.85rem'}
      p.appendChild(top);
      if(name){const t=document.createElement('span');t.textContent=name;t.style.cssText='font-size:.82rem;line-height:1.2';p.appendChild(t)}
      return p};
    t.innerHTML='';s.clientLogos.forEach(x=>t.appendChild(mk(x)));s.clientLogos.forEach(x=>t.appendChild(mk(x)));
  }).catch(()=>{});
})();

/* per-page editable content hydration */
(function(){
  var slug=(location.pathname.replace(/\/$/,'').split('/').pop()||'index.html').replace('.html','')||'index';
  function apply(d){if(!d)return;
    if(d.texts)Object.keys(d.texts).forEach(function(k){var el=document.querySelector('[data-edit="'+k+'"]');if(el&&d.texts[k])el.textContent=d.texts[k]});
    if(d.images)Object.keys(d.images).forEach(function(k){var el=document.querySelector('[data-edit-img="'+k+'"]');if(el&&d.images[k]&&el.getAttribute('src')!==d.images[k]){el.removeAttribute('data-tried');el.src=d.images[k]}});
  }
  fetch('/content/'+slug+'.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(apply).catch(function(){});
  fetch('/content/global.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(function(g){
    if(g&&g.images&&g.images.logo){var l=document.querySelector('.logo img');if(l){l.removeAttribute('data-t');l.src=g.images.logo;l.style.display=''}}
  }).catch(function(){});
})();

/* design controls + custom code from admin */
(function(){
  fetch('/settings.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(s=>{
    if(!s||!s.design)return;var d=s.design,r=document.documentElement.style;
    if(d.heroHeightVh)r.setProperty('--heroH',d.heroHeightVh+'vh');
    if(d.pageHeroHeightVh)r.setProperty('--pageHeroH',d.pageHeroHeightVh+'vh');
    if(d.reviewSpeedSeconds)r.setProperty('--revSpeed',d.reviewSpeedSeconds+'s');
    if(d.logoSpeedSeconds)r.setProperty('--logoSpeed',d.logoSpeedSeconds+'s');
    if(d.kenburns===false)document.body.classList.add('no-kenburns');
    if(d.heroSlideSeconds)window.__slideMs=d.heroSlideSeconds*1000;
  }).catch(()=>{});
  fetch('/content/custom.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(c=>{
    if(!c)return;
    if(c.css&&c.css.indexOf('/*')!==0||c.css&&c.css.replace(/\/\*[\s\S]*?\*\//g,'').trim()){var st=document.createElement('style');st.textContent=c.css;document.head.appendChild(st)}
    if(c.js&&c.js.replace(/\/\*[\s\S]*?\*\//g,'').trim()){var sc=document.createElement('script');sc.textContent=c.js;document.body.appendChild(sc)}
  }).catch(()=>{});
})();

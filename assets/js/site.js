  // mobile menu
  const btn=document.getElementById('menubtn'),links=document.getElementById('navlinks');
  btn.addEventListener('click',()=>{const o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');btn.setAttribute('aria-expanded',false)}));

  // build the telomere strand (G-strand with 3' overhang, complementary C-strand)
  (function(){
    const g=document.getElementById('grow'),c=document.getElementById('crow');
    if(!g||!c)return;
    const Grep='TTAGGG ',Crep='AATCCC ',body=14,over=3;
    for(let i=0;i<body+over;i++){
      const s=document.createElement('span');
      if(i>=body)s.className='lit';
      s.textContent=Grep;g.appendChild(s);
    }
    for(let i=0;i<body;i++){
      const s=document.createElement('span');s.textContent=Crep;c.appendChild(s);
    }
  })();

  // scroll reveal
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const io=new IntersectionObserver((es)=>{
      es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
    },{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  }else{document.querySelectorAll('.rv').forEach(el=>el.classList.add('in'))}

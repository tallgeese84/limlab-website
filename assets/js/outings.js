const data=window.LIMLAB_OUTINGS||[], grid=document.getElementById('grid'), filters=document.getElementById('filters'), empty=document.getElementById('empty');
const years=['All',...new Set(data.map(x=>x.year))];
function render(filter='All'){
  grid.innerHTML='';
  const shown=data.filter(x=>filter==='All'||x.year===filter);
  empty.style.display=shown.length?'none':'block';
  shown.forEach((x)=>{
    const a=document.createElement('article');
    a.className='card';
    a.tabIndex=0;
    a.innerHTML=`<img src="${x.src}" alt="${x.alt}" loading="lazy"><div class="cap"><div class="year">${x.year}</div><h2>${x.title}</h2><p>${x.caption}</p></div>`;
    a.onclick=()=>openBox(x);
    a.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')openBox(x)};
    grid.appendChild(a);
  });
}
years.forEach((y,i)=>{
  const b=document.createElement('button');
  b.className='filter'+(i===0?' active':'');
  b.textContent=y;
  b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(y)};
  filters.appendChild(b);
});
render();
const lb=document.getElementById('lightbox'),big=document.getElementById('big'),cap=document.getElementById('bigcap');
function openBox(x){big.src=x.src;big.alt=x.alt;cap.textContent=x.title+' — '+x.caption;lb.classList.add('open');document.body.style.overflow='hidden'}
function closeBox(){lb.classList.remove('open');document.body.style.overflow=''}
document.getElementById('close').onclick=closeBox;
lb.onclick=e=>{if(e.target===lb)closeBox()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});

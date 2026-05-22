const btn=document.querySelector('[data-menu]');
const nav=document.querySelector('[data-nav]');
if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

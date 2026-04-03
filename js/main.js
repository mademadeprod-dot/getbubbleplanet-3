// Mobile nav
const btn = document.querySelector('.nav__mobile-btn');
const links = document.querySelector('.nav__links');
if(btn && links){
  btn.addEventListener('click',()=>{
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    btn.classList.remove('open');links.classList.remove('open');
  }));
}

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.closest('.faq-item');
    const wasOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el=>el.classList.remove('open'));
    if(!wasOpen)item.classList.add('open');
  });
});

// Open first FAQ
const firstFaq=document.querySelector('.faq-item');
if(firstFaq)firstFaq.classList.add('open');

// Scroll reveal
const obs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

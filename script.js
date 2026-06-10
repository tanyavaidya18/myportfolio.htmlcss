// Typing effect
const phrases = ["beautiful websites","ML models","secure systems","elegant code","creative solutions"];
let phraseIndex=0,charIndex=0,deleting=false;
const typingEl=document.getElementById("typingText");
function type(){
  const cur=phrases[phraseIndex];
  if(!deleting){
    typingEl.textContent=cur.slice(0,++charIndex);
    if(charIndex===cur.length){deleting=true;setTimeout(type,1800);return;}
  }else{
    typingEl.textContent=cur.slice(0,--charIndex);
    if(charIndex===0){deleting=false;phraseIndex=(phraseIndex+1)%phrases.length;}
  }
  setTimeout(type,deleting?50:75);
}
type();

// Cursor glow
const glow=document.getElementById("cursorGlow");
document.addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";});

// Navbar shrink
const navbar=document.getElementById("navbar");
window.addEventListener("scroll",()=>navbar.classList.toggle("scrolled",window.scrollY>60));

// Scroll reveal + skill bars
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      entry.target.querySelectorAll(".skill-card").forEach(c=>c.classList.add("animated"));
    }
  });
},{threshold:0.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// Mobile nav
const toggle=document.getElementById("navToggle");
const navUl=document.querySelector("nav ul");
let navOpen=false;
toggle.addEventListener("click",()=>{
  navOpen=!navOpen;
  Object.assign(navUl.style,navOpen?{display:"flex",flexDirection:"column",position:"absolute",top:"70px",right:"5%",background:"rgba(253,246,248,0.97)",padding:"16px 24px",borderRadius:"16px",boxShadow:"0 8px 28px rgba(160,96,112,.18)"}:{display:"none"});
});

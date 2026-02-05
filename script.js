// ===== SCROLL REVEAL =====
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(r=>{
    if(r.getBoundingClientRect().top < window.innerHeight-100){
      r.classList.add("active");
    }
  });
});

// ===== STARTUP CODE TYPING =====
const codeLines=[
 "Booting system...",
 "Loading neural modules...",
 "Activating safety protocol...",
 "MindGuard AI Online."
];

let i=0;
const codeText=document.getElementById("codeText");
function typeCode(){
  if(i<codeLines.length){
    codeText.innerHTML+=codeLines[i]+"\n";
    i++;
    setTimeout(typeCode,600);
  }
}
typeCode();

// ===== PARTICLES BACKGROUND =====
const pCanvas=document.getElementById("particles");
const pctx=pCanvas.getContext("2d");

function resizeCanvas(){
  pCanvas.width=window.innerWidth;
  pCanvas.height=window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize",resizeCanvas);

let particles=[];
for(let i=0;i<120;i++){
  particles.push({
    x:Math.random()*pCanvas.width,
    y:Math.random()*pCanvas.height,
    vx:Math.random()-0.5,
    vy:Math.random()-0.5
  });
}

function animateParticles(){
  pctx.clearRect(0,0,pCanvas.width,pCanvas.height);
  particles.forEach(p=>{
    p.x+=p.vx;
    p.y+=p.vy;
    if(p.x<0||p.x>pCanvas.width) p.vx*=-1;
    if(p.y<0||p.y>pCanvas.height) p.vy*=-1;
    pctx.fillStyle="#00f5ff";
    pctx.fillRect(p.x,p.y,2,2);
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== BINARY RAIN =====
const binCanvas=document.getElementById("binaryRain");
const bctx=binCanvas.getContext("2d");

function resizeBinary(){
  binCanvas.width=window.innerWidth;
  binCanvas.height=window.innerHeight;
}
resizeBinary();
window.addEventListener("resize",resizeBinary);

const cols=Math.floor(binCanvas.width/20);
const drops=Array(cols).fill(binCanvas.height);

function drawBinary(){
  bctx.fillStyle="rgba(0,0,0,0.05)";
  bctx.fillRect(0,0,binCanvas.width,binCanvas.height);

  bctx.fillStyle="#00ff9c";
  bctx.font="16px monospace";

  for(let i=0;i<drops.length;i++){
    const text=Math.random()>0.5?"1":"0";
    bctx.fillText(text,i*20,drops[i]);
    drops[i]-=20;
    if(drops[i]<0) drops[i]=binCanvas.height;
  }
}
setInterval(drawBinary,50);

// ===== SUPPORT =====
function showSupport(mood){
  const box=document.getElementById("supportMessage");
  const msgs={
    sad:"You are not alone 💙 Stay strong.",
    angry:"Calm mind = powerful mind.",
    stressed:"Relax. Everything will be okay.",
    scared:"You are safe. Help is near."
  };
  box.innerText=msgs[mood];
}

function alertSound(){
  alert("🚨 EMERGENCY MODE ACTIVATED!");
}


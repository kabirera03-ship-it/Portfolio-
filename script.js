const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");
const hoverSound = document.getElementById("hoverSound");
const scrollSound = document.getElementById("scrollSound");

let started = false;
document.addEventListener("click", () => {
  if (!started) {
    bgMusic.volume = 0.35;
    bgMusic.play();
    started = true;
  }
  clickSound.currentTime = 0;
  clickSound.play();
});

document.querySelectorAll("a, span, img").forEach(el => {
  el.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

let lastScroll = 0;
window.addEventListener("scroll", () => {
  if (Date.now() - lastScroll > 700) {
    scrollSound.currentTime = 0;
    scrollSound.play();
    lastScroll = Date.now();
  }
});

// LIVE TIME
const liveTime = document.getElementById("liveTime");
setInterval(() => {
  liveTime.textContent = new Date().toLocaleTimeString();
}, 1000);

// PARTICLES
const c = document.getElementById("chakra");
const ctx = c.getContext("2d");
function resize(){c.width=innerWidth;c.height=innerHeight}
resize();addEventListener("resize",resize);

let p=[];
for(let i=0;i<100;i++)
  p.push({x:Math.random()*c.width,y:Math.random()*c.height,r:2+Math.random()*2,s:0.5+Math.random()});

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle="rgba(0,255,255,.6)";
  p.forEach(a=>{
    ctx.beginPath();
    ctx.arc(a.x,a.y,a.r,0,Math.PI*2);
    ctx.fill();
    a.y-=a.s;
    if(a.y<0)a.y=c.height;
  });
  requestAnimationFrame(draw);
}
draw();

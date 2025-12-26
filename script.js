// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

// SCROLL REVEAL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// TYPING
const text = "Anup Lamichhane";
let i = 0;
setInterval(() => {
  if (i < text.length) {
    document.getElementById("typing").textContent += text[i++];
  }
}, 120);

// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};

// LIVE TIME
const liveTime = document.getElementById("liveTime");
function updateTime() {
  const now = new Date();
  liveTime.innerHTML = `⏰ ${now.toLocaleTimeString()}`;
}
setInterval(updateTime, 1000);
updateTime();

// AUDIO
const audio = document.getElementById("clickSound");
document.querySelectorAll(".sound").forEach(el => {
  el.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
  });
});

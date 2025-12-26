// LIVE TIME
function updateTime() {
  const now = new Date();
  document.getElementById("liveTime").textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);

// SOUND EFFECTS
document.addEventListener("click", () => document.getElementById("clickSound").play());
document.addEventListener("mouseover", () => document.getElementById("hoverSound").play());
window.addEventListener("scroll", () => document.getElementById("scrollSound").play());

// CHATBOT
const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatLog = document.getElementById("chatLog");

sendBtn.addEventListener("click", async () => {
  const message = chatInput.value.trim();
  if (!message) return;
  chatLog.innerHTML += `<div><b>तिमी:</b> ${message}</div>`;
  chatInput.value = "";
  const res = await fetch("/chat", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({message})
  });
  const data = await res.json();
  chatLog.innerHTML += `<div><b>AI:</b> ${data.reply}</div>`;
  chatLog.scrollTop = chatLog.scrollHeight;
});

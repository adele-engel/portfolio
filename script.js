// Son rétro au clic sur les boutons
const sound = document.getElementById("click-sound");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
  });
});

// Animation clignotante sur liens nav
const navLinks = document.querySelectorAll("nav a");
setInterval(() => {
  navLinks.forEach((link) => {
    link.style.textShadow = Math.random() > 0.5 ? "0 0 8px #ff0077" : "none";
  });
}, 800);

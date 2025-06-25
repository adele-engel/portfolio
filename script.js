// Animation simple au clic sur les boutons
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});

// Effet néon clignotant sur les liens
const links = document.querySelectorAll("nav a");

setInterval(() => {
  links.forEach((link) => {
    const glow = Math.random() > 0.5;
    link.style.textShadow = glow ? "0 0 5px #00ffea" : "none";
  });
}, 700);

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const keys = key.split(".");
    let value = translations[lang];

    for (let k of keys) {
      if (value[k]) value = value[k];
      else return;
    }

    el.textContent = value;
  });
}

// Langue par défaut
let currentLang = "fr";
setLang(currentLang);

// Gestion des clics sur les drapeaux
document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.getAttribute("data-lang");
    setLang(currentLang);
  });
});

// Thème clair/sombre
document.getElementById("theme-toggle").addEventListener("click", () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});

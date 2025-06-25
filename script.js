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

const themeToggleBtn = document.getElementById("theme-toggle");

function updateThemeButtonText(theme) {
  if (theme === "dark") {
    themeToggleBtn.textContent = "Mode sombre";
  } else {
    themeToggleBtn.textContent = "Mode clair";
  }
}

// Au chargement, on définit le texte selon le thème par défaut
let currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
updateThemeButtonText(currentTheme);

themeToggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeButtonText(currentTheme);
});


// Thème clair/sombre
document.getElementById("theme-toggle").addEventListener("click", () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});

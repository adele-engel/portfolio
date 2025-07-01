// Variables globales
let currentLanguage = 'en';

// Initialisation
function init() {
  setupLanguageSwitcher();
  updateLanguage();
  setupThemeToggle();
}

// Gestion du changement de langue via boutons drapeaux
function setupLanguageSwitcher() {
  const buttons = document.querySelectorAll('#languageSelector button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedLang = button.getAttribute('data-lang');
      if (selectedLang && selectedLang !== currentLanguage) {
        currentLanguage = selectedLang;
        updateLanguage();
      }
    });
  });
}

// Mise à jour du contenu de la page selon la langue
function updateLanguage() {
  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    const value = languageData[currentLanguage][key];
    if (value) {
      el.textContent = value;
    }
  });
  document.documentElement.lang = currentLanguage;
}

// Gestion du thème clair/sombre
function setupThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle");

  function updateThemeButtonText(theme) {
    if (currentLanguage === 'fr') {
      themeToggleBtn.textContent = theme === "dark" ? "Mode sombre" : "Mode clair";
    } else {
      themeToggleBtn.textContent = theme === "dark" ? "Dark mode" : "Light mode";
    }
  }

  let currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  updateThemeButtonText(currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeButtonText(currentTheme);
  });
}

// Démarrer l'app une fois le DOM chargé
document.addEventListener("DOMContentLoaded", init);

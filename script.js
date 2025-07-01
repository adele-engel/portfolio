// DOM elements
const languageSelector = document.getElementById('languageSelector');
let currentLanguage = 'en';

// Initialize the application
function init() {
  // Gestion du changement de langue par clic sur les drapeaux
  document.querySelectorAll('#languageSelector img').forEach(button => {
    flag.addEventListener('click', () => {
      const selectedLang = button.getAttribute('data-lang');
      currentLanguage = selectedLang;
      updateLanguage();
    });
  });
  updateLanguage(); // Appliquer la langue au démarrage
}

// Set up event listeners
function setupEventListeners() {
    // Home button
    homeButton.addEventListener('click', function() {
        showPage(videoInstructionsPage);
        hideTopMenu();
    });
}

// Update language
function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = languageData[currentLanguage];
    for (let k of keys) {
      if (value[k]) value = value[k];
      else return;
    }
    el.textContent = value;
  });

  document.documentElement.lang = currentLanguage;
}

// Get text in current language
function getLanguageText(key) {
    return languageData[currentLanguage][key] || key;
}





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

// Initialize the app when document is loaded
init();

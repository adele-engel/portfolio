// DOM elements
const languageSelector = document.getElementById('languageSelector');
let currentLanguage = 'en';

// Initialize the application
function init() {
    // Set up language switching
    languageSelector.addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
    });
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
    // Update all text elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (languageData[currentLanguage][key]) {
            element.textContent = languageData[currentLanguage][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Refresh posts to update status messages
    generatePosts();
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

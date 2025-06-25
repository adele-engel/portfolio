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

document.getElementById("fr").addEventListener("click", () => setLang("fr"));
document.getElementById("en").addEventListener("click", () => setLang("en"));

// Langue par défaut
setLang("fr");

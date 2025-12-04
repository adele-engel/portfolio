// --- SYSTÈME DE TRADUCTION ---

// Dictionnaire de toutes les phrases du site
const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_projects: "Projets",
        nav_contact: "Contact",
        hero_greeting: "Bonjour, je m'appelle",
        hero_subtitle: "Développeuse Unity & Game Designer",
        hero_desc: "Je crée des expériences immersives en C#.",
        hero_btn: "Voir mes jeux",
        about_title: "À propos",
        about_text: "Passionnée par le développement de jeux vidéo, je maîtrise le moteur <strong>Unity</strong> et le langage <strong>C#</strong>. J'aime transformer des concepts de gameplay en code propre et performant.",
        about_skills: "Mes compétences :",
        projects_title: "Mes Projets",
        project1_desc: "Un platformer 2D codé en C#. Gestion de la physique et des ennemis.",
        project2_desc: "Un FPS prototype. IA basique et gestion d'inventaire.",
        play_btn: "Jouer (Itch.io)",
        code_btn: "Code (GitHub)",
        contact_title: "Contact",
        contact_desc: "Tu cherches une développeuse pour ton prochain hit ? Discutons-en !",
        contact_btn: "M'envoyer un email"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hi, I am",
        hero_subtitle: "Unity Developer & Game Designer",
        hero_desc: "I create immersive experiences using C#.",
        hero_btn: "See my games",
        about_title: "About Me",
        about_text: "Passionate about video game development, I master the <strong>Unity</strong> engine and <strong>C#</strong> language. I love turning gameplay concepts into clean, performant code.",
        about_skills: "My Skills:",
        projects_title: "My Projects",
        project1_desc: "A 2D platformer coded in C#. Physics and enemy management included.",
        project2_desc: "An FPS prototype. Basic AI and inventory management system.",
        play_btn: "Play (Itch.io)",
        code_btn: "Code (GitHub)",
        contact_title: "Contact",
        contact_desc: "Looking for a developer for your next hit game? Let's talk!",
        contact_btn: "Send me an email"
    }
};

// Variable pour savoir quelle langue est active (français par défaut)
let currentLang = 'fr';
const langToggleBtn = document.getElementById('lang-toggle');

// Fonction qui applique les traductions
function updateContent() {
    // On cherche tous les éléments qui ont l'attribut data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Si on trouve la traduction dans le dictionnaire, on remplace le texte
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });

    // On change le texte du bouton (si on est en FR, on propose EN, et inversement)
    langToggleBtn.innerText = currentLang === 'fr' ? 'EN' : 'FR';
}

// Quand on clique sur le bouton
langToggleBtn.addEventListener('click', () => {
    // Si c'est français, ça devient anglais, sinon ça devient français
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    updateContent(); // On lance la mise à jour
});


// --- ANIMATIONS & SCROLL (Déjà présent avant) ---

// Défilement fluide quand on clique sur le menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation d'apparition des projets
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.project-card').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

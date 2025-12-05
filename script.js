// --- SYSTÈME DE TRADUCTION ---

const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_projects: "Projets",
        nav_contact: "Contact",
        hero_greeting: "Bonjour, je m'appelle",
        hero_subtitle: "Développeuse de jeux vidéo",
        hero_desc: "Je crée des expériences immersives sur Unity et Unreal Engine.",
        hero_btn: "Voir mes jeux",
        about_title: "À propos",
        about_text: "Passionnée par le développement de jeux vidéo, je maîtrise le moteur <strong>Unity</strong> et <strong>Unreal Engine</strong>, mais aussi <strong>Twinmotion</strong> et <strong>Blender</strong>.",
        about_skills: "Mes compétences :",
        projects_title: "Mes Projets",
        project1_desc: "Platforme permettant de découvrir de façon immersive l'école d'ingénieurs de Polytech Angers.",
        project2_desc: "Jeu de rythme en réalité virtuelle permettant d'aider les personnes atteintes de la maladie de Parkinson à travailler leur mobilité.",
        project3_desc: "Application permettant aux jeunes de découvrir des métiers de façon ludique en réalité virtuelle.",
        project4_desc: "Challenge 48h : Création d'une application Unity en moins de 48h pour que les enfants puissent découvrir des animaux et des environnements.",
        project5_desc: "Jeu 2D inspiré du jeu de la pastèque.",
        project6_desc: "Création d'un personnage, d'un avion, d'une Nintendo Switch et d'un crayon.",
        project7_desc: "Création d'un environnement et d'une vidéo sur Twinmotion pour tester ses limites.",
        project8_desc: "Site web où les utilisateurs tentent de deviner un animal mystère à partir d'une base de données.",
        project9_desc: "Tutoriel expliquant comment extraire des informations à partir d'un enregistrement.",
        play_btn: "Jouer (Itch.io)",
        download_btn: "Télécharger",
        code_btn: "Code (GitHub)",
        contact_title: "Contact",
        contact_desc: "Vous rechercher une développeuse <strong>Unity/Unreal</strong> pour vos prochains projets ? N'hésitez pas à me contacter !",
        contact_btn: "M'envoyer un email"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hi, I am",
        hero_subtitle: "Video game developer",
        hero_desc: "I create immersive experiences on Unity and Unreal Engine.",
        hero_btn: "See my games",
        about_title: "About Me",
        about_text: "Passionate about video game development, I am proficient in <strong>Unity</strong> and <strong>Unreal Engine</strong>, as well as <strong>Twinmotion</strong> and <strong>Blender</strong>.",
        about_skills: "My Skills :",
        projects_title: "My Projects",
        project1_desc: "Platform offering an immersive experience of the Polytech Angers engineering school.",
        project2_desc: "Virtual reality rhythm game designed to help people with Parkinson's disease improve their mobility.",
        project3_desc: "Application enabling young people to discover different professions in a fun way through virtual reality.",
        project4_desc: "48-hour challenge: Creation of a Unity application in less than 48 hours to enable children to discover animals and environments.",
        project5_desc: "2D game inspired by the watermelon game.",
        project6_desc: "Creation of a character, an aeroplane, a Nintendo Switch and a pencil.",
        project7_desc: "Creation of an environment and a video on Twinmotion to test its limits.",
        project8_desc: "Website where users try to guess a mystery animal from a database.",
        project9_desc: "Tutorial explaining how to extract information from a recording.",
        play_btn: "Play (Itch.io)",
        download_btn: "Download",
        code_btn: "Code (GitHub)",
        contact_title: "Contact",
        contact_desc: "Are you looking for a <strong>Unity/Unreal</strong> developer for your upcoming projects? Please do not hesitate to contact me !",
        contact_btn: "Send me an email"
    }
};

let currentLang = 'fr';
const langToggleBtn = document.getElementById('lang-toggle');

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
    langToggleBtn.innerText = currentLang === 'fr' ? 'EN' : 'FR';
}

if(langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        updateContent();
    });
}


// --- GESTION DU MENU MOBILE (BURGER) ---
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) {
        burger.addEventListener('click', () => {
            // Ouvrir / Fermer le menu
            nav.classList.toggle('nav-active');

            // Animer les liens (apparition progressive)
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Transformer le burger en croix
            burger.classList.toggle('toggle');
        });
    }
}

// Lancer la fonction du menu
navSlide();


// --- SCROLL & ANIMATIONS ---

// Fermer le menu quand on clique sur un lien (Spécifique mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        // Si le menu est ouvert, on le ferme
        if(nav.classList.contains('nav-active')){
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            document.querySelectorAll('.nav-links li').forEach((li) => {
                li.style.animation = '';
            });
        }
    });
});

// Défilement fluide vers les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animation d'apparition des projets au scroll
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

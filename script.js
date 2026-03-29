// ── Translations ──
const translations = {
    en: {
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.greeting': "Hi, I'm",
        'hero.title': 'Software Developer',
        'hero.tagline': 'Building modern websites for businesses & organizations',
        'hero.cta': 'View My Work',
        'about.title': 'About Me',
        'about.bio': 'Web developer specializing in building modern, responsive websites for businesses and organizations. From e-commerce stores to nonprofit platforms, I create digital experiences that help my clients grow and connect with their communities.',
        'projects.title': 'Projects',
        'projects.visit': 'Visit Site \u2192',
        'project.amhandyjax': 'Home renovation and repair services website for a local contractor.',
        'project.swimriseacademy': 'Swim instruction platform featuring lessons for all ages including adaptive programs.',
        'project.swimriseshop': 'Official merchandise and apparel e-commerce store for SwimRise Aquatics.',
        'project.weriseleague': 'Summer swim league site promoting competitive youth swimming.',
        'project.werisefoundation': 'Nonprofit platform for inclusive swimming programs serving underserved children and athletes.',
        'project.swimriseaquatics': 'Competitive swimming academy site covering coaching from first strokes to competition.',
        'footer.built': 'Built by'
    },
    pt: {
        'nav.about': 'Sobre',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',
        'hero.greeting': 'Ol\u00e1, eu sou',
        'hero.title': 'Desenvolvedor de Software',
        'hero.tagline': 'Construindo sites modernos para empresas e organiza\u00e7\u00f5es',
        'hero.cta': 'Ver Meu Trabalho',
        'about.title': 'Sobre Mim',
        'about.bio': 'Desenvolvedor web especializado em criar sites modernos e responsivos para empresas e organiza\u00e7\u00f5es. De lojas virtuais a plataformas sem fins lucrativos, crio experi\u00eancias digitais que ajudam meus clientes a crescer e se conectar com suas comunidades.',
        'projects.title': 'Projetos',
        'projects.visit': 'Visitar Site \u2192',
        'project.amhandyjax': 'Site de servi\u00e7os de reforma e reparo residencial para um empreiteiro local.',
        'project.swimriseacademy': 'Plataforma de instru\u00e7\u00e3o de nata\u00e7\u00e3o com aulas para todas as idades, incluindo programas adaptativos.',
        'project.swimriseshop': 'Loja virtual oficial de roupas e acess\u00f3rios da SwimRise Aquatics.',
        'project.weriseleague': 'Site de liga de nata\u00e7\u00e3o de ver\u00e3o promovendo nata\u00e7\u00e3o competitiva juvenil.',
        'project.werisefoundation': 'Plataforma sem fins lucrativos para programas inclusivos de nata\u00e7\u00e3o para crian\u00e7as e atletas carentes.',
        'project.swimriseaquatics': 'Site de academia de nata\u00e7\u00e3o competitiva cobrindo treinamento desde as primeiras braçadas até competi\u00e7\u00f5es.',
        'footer.built': 'Feito por'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update active state on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// ── Language Toggle ──
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 100);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// ── Navbar Scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile Nav ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

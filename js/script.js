// === SMOOTH SCROLLING ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// === CHARACTER CARDS INTERACTION ===
const characterCards = document.querySelectorAll('.character-card');

characterCards.forEach(card => {
  card.addEventListener('click', function() {
    // Retirer la classe active de tous les cards
    characterCards.forEach(c => c.classList.remove('active'));
    // Ajouter la classe active au card cliqué
    this.classList.add('active');
  });

  // Animation au survol
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function() {
    if (!this.classList.contains('active')) {
      this.style.transform = 'translateY(0) scale(1)';
    }
  });
});

// === SCROLL ANIMATION ===
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observer tous les éléments avec animation
document.querySelectorAll('.story-section, .character-card').forEach(el => {
  observer.observe(el);
});

// === NAVBAR SCROLL EFFECT ===
const nav = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    nav.style.background = 'rgba(0, 0, 0, 0.8)';
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.3)';
    nav.style.boxShadow = 'none';
  }
  
  lastScrollTop = scrollTop;
});

// === BUTTON CLICK FEEDBACK ===
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', function(e) {
    e.preventDefault();
    alert('🎭 Bienvenue dans l\'aventure épique des 3 Mousquetaires! 🎭\n\nPlus de contenu à venir...');
  });
}

// === PAGE LOAD ANIMATION ===
window.addEventListener('load', function() {
  document.body.style.animation = 'none';
  const elements = document.querySelectorAll('header, .hero, .story-section');
  elements.forEach((el, index) => {
    el.style.animation = `fadeInUp 0.8s ease ${index * 0.2}s forwards`;
  });
});

console.log('🎭 Les 3 Mousquetaires - Site interactif chargé avec succès!');

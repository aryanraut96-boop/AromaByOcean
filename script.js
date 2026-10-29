document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     1. STICKY HEADER SCROLL EFFECT
     ========================================== */
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ==========================================
     2. MOBILE NAVIGATION DRAWER TOGGLE
     ========================================== */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  /* ==========================================
     3. CATEGORY TAB FILTER FOR MENU
     ========================================== */
  const menuTabs = document.querySelectorAll('.menu__tab');
  const menuCards = document.querySelectorAll('.menu__card');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      menuCards.forEach(card => {
        if (card.getAttribute('data-category') === category) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* ==========================================
     4. SCROLL REVEAL ANIMATION
     ========================================== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
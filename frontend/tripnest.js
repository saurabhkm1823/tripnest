// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close menu when clicking a nav link
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navList.classList.remove('show'));
    });
  }

  // ===== Search Tabs =====
  const searchTabs = document.querySelectorAll('.search-tab');
  searchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      searchTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // ===== Search Form Submit =====
  const searchForm = document.querySelector('.search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add your search logic or API call here
      console.log('Search submitted');
    });
  }

  // ===== Newsletter Form =====
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput?.value;
      if (email) {
        console.log('Newsletter signup:', email);
        newsletterForm.reset();
        alert('Thank you for subscribing!');
      }
    });
  }

  // ===== Hero Slider (simple prev/next) =====
  const heroSlider = document.querySelector('.hero-slider');
  const heroSlides = Array.from(document.querySelectorAll('.hero-slider .hero-slide'));
  const heroPrev = document.querySelector('.hero-prev');
  const heroNext = document.querySelector('.hero-next');
  const heroDots = Array.from(document.querySelectorAll('.hero-dot'));

  let heroIndex = Math.max(0, heroSlides.findIndex(s => s.classList.contains('active')));
  let heroTimer = null;

  const setHeroSlide = (nextIndex) => {
    if (!heroSlides.length) return;
    heroIndex = (nextIndex + heroSlides.length) % heroSlides.length;

    heroSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === heroIndex);
      slide.setAttribute('aria-hidden', i === heroIndex ? 'false' : 'true');
    });

    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === heroIndex);
      dot.setAttribute('aria-current', i === heroIndex ? 'true' : 'false');
    });
  };

  const startHeroAutoplay = () => {
    if (!heroSlides.length) return;
    stopHeroAutoplay();
    heroTimer = window.setInterval(() => setHeroSlide(heroIndex + 1), 6000);
  };

  const stopHeroAutoplay = () => {
    if (heroTimer) {
      window.clearInterval(heroTimer);
      heroTimer = null;
    }
  };

  if (heroSlides.length) {
    // Initial state
    setHeroSlide(heroIndex);
    startHeroAutoplay();

    if (heroPrev) {
      heroPrev.addEventListener('click', () => {
        setHeroSlide(heroIndex - 1);
        startHeroAutoplay();
      });
    }

    if (heroNext) {
      heroNext.addEventListener('click', () => {
        setHeroSlide(heroIndex + 1);
        startHeroAutoplay();
      });
    }

    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        setHeroSlide(i);
        startHeroAutoplay();
      });
    });

    if (heroSlider) {
      heroSlider.addEventListener('mouseenter', stopHeroAutoplay);
      heroSlider.addEventListener('mouseleave', startHeroAutoplay);
      heroSlider.addEventListener('focusin', stopHeroAutoplay);
      heroSlider.addEventListener('focusout', startHeroAutoplay);
    }
  }

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ===== Header scroll effect =====
  const header = document.querySelector('.main-header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
      }
      lastScroll = currentScroll;
    });
  }
});

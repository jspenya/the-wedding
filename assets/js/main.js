(function() {
  'use strict';

  // Mobile Navigation
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-menu__list a');

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    navToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', openMobileMenu);
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });
  }

  // Header Scroll Behavior
  const header = document.getElementById('header');
  let lastScroll = 0;
  const scrollThreshold = 100;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
      if (currentScroll > lastScroll) {
        header.classList.add('header--hidden');
      } else {
        header.classList.remove('header--hidden');
      }
    } else {
      header.classList.remove('header--hidden');
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // Countdown Timer
  const countdown = document.getElementById('countdown');

  if (countdown) {
    const weddingDate = new Date(countdown.dataset.weddingDate).getTime();
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        countdown.innerHTML = '<p style="font-family: inherit; color: inherit;">We\'re Married! 🎉</p>';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = days;
      if (hoursEl) hoursEl.textContent = hours;
      if (minutesEl) minutesEl.textContent = minutes;
      if (secondsEl) secondsEl.textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Smooth Scroll for Anchor Links
  const scrollIndicator = document.getElementById('scrollIndicator');

  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      const nextSection = document.getElementById('details');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Scroll Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.animation = 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    fadeInObserver.observe(el);
  });

  // Active Navigation State on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__menu a');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // RSVP Form Handling
  const rsvpForm = document.getElementById('rsvpForm');
  const attendanceSelect = document.getElementById('attendance');
  const guestCountGroup = document.getElementById('guestCountGroup');
  const guestCountInput = document.getElementById('guestCount');

  if (attendanceSelect && guestCountGroup) {
    attendanceSelect.addEventListener('change', function() {
      if (this.value === 'yes') {
        guestCountGroup.style.display = 'block';
        guestCountInput.setAttribute('required', 'required');
      } else {
        guestCountGroup.style.display = 'none';
        guestCountInput.removeAttribute('required');
      }
    });
  }

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      const submitButton = rsvpForm.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      setTimeout(function() {
        const formSuccess = document.getElementById('formSuccess');
        if (formSuccess) {
          rsvpForm.style.display = 'none';
          formSuccess.style.display = 'block';
        }
      }, 1000);
    });

    const emailInput = document.getElementById('email');
    if (emailInput) {
      emailInput.addEventListener('blur', function() {
        const email = this.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email && !emailRegex.test(email)) {
          this.setCustomValidity('Please enter a valid email address');
        } else {
          this.setCustomValidity('');
        }
      });
    }
  }

  // Lazy Loading Images Fallback
  if (!('loading' in HTMLImageElement.prototype)) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }

})();

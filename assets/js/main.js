// Wedding Website JavaScript
// Vanilla JS - No dependencies

(function() {
  'use strict';

  // ===========================
  // Mobile Navigation
  // ===========================
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');

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

  // Close mobile menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close mobile menu when clicking outside
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });
  }

  // ===========================
  // Header Scroll Behavior
  // ===========================
  const header = document.getElementById('header');
  let lastScroll = 0;
  const scrollThreshold = 100;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    // Hide header when scrolling down, show when scrolling up
    if (currentScroll > scrollThreshold) {
      if (currentScroll > lastScroll) {
        // Scrolling down
        header.classList.add('header-hidden');
      } else {
        // Scrolling up
        header.classList.remove('header-hidden');
      }
    }

    lastScroll = currentScroll;
  });

  // ===========================
  // Countdown Timer
  // ===========================
  const countdown = document.getElementById('countdown');

  if (countdown) {
    const weddingDate = new Date('2026-06-20T14:30:00').getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        // Wedding day has passed
        countdown.innerHTML = '<p class="text-olive">We\'re Married! 🎉</p>';
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

    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ===========================
  // Smooth Scroll for Anchor Links
  // ===========================
  const scrollIndicator = document.getElementById('scrollIndicator');

  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      const nextSection = document.getElementById('welcome');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Smooth scroll for all internal links
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

  // ===========================
  // Scroll Animations (Intersection Observer)
  // ===========================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.animation = 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    fadeInObserver.observe(el);
  });

  // ===========================
  // RSVP Form Handling
  // ===========================
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

      // Disable submit button to prevent double submission
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      // Form will be handled by Formspree
      // On success, show success message
      setTimeout(function() {
        const formSuccess = document.getElementById('formSuccess');
        if (formSuccess) {
          rsvpForm.style.display = 'none';
          formSuccess.style.display = 'block';
        }
      }, 1000);
    });

    // Client-side validation
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

  // ===========================
  // Gallery Lightbox
  // ===========================
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentImageIndex = 0;
  const galleryImages = [];

  // Collect all gallery images
  galleryItems.forEach((item, index) => {
    const img = item.querySelector('.gallery-image');
    if (img) {
      galleryImages.push({
        src: img.src,
        alt: img.alt
      });

      item.addEventListener('click', function() {
        currentImageIndex = index;
        openLightbox();
      });
    }
  });

  function openLightbox() {
    if (lightbox && galleryImages.length > 0) {
      lightbox.classList.add('active');
      updateLightboxImage();
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function updateLightboxImage() {
    if (lightboxImage && galleryImages[currentImageIndex]) {
      lightboxImage.src = galleryImages[currentImageIndex].src;
      lightboxImage.alt = galleryImages[currentImageIndex].alt;
    }
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', function(e) {
      e.stopPropagation();
      showPrevImage();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', function(e) {
      e.stopPropagation();
      showNextImage();
    });
  }

  // Close lightbox when clicking outside image
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', function(e) {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'ArrowRight') {
        showNextImage();
      }
    }
  });

  // ===========================
  // Lazy Loading Images
  // ===========================
  // Modern browsers support native lazy loading with loading="lazy"
  // For older browsers, we can add a fallback
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for older browsers using Intersection Observer
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // ===========================
  // Add Active State to Current Page in Navigation
  // ===========================
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a, .mobile-nav-list a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath ||
        currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/') {
      link.style.color = '#8B9F7A';
      link.style.fontWeight = '700';
    }
  });

  // ===========================
  // Initialize on Page Load
  // ===========================
  console.log('Wedding website loaded successfully! 🌿💒');

})();


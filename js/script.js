// Main JavaScript functionality for Akmal Billekar's portfolio website

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  function toggleNavbarBackground() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  // Initialize navbar state
  toggleNavbarBackground();
  toggleBackToTop();

  // Add scroll event listener
  window.addEventListener('scroll', function() {
    toggleNavbarBackground();
    toggleBackToTop();
  });

  // Mobile menu functionality
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Close mobile menu when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });

  // Initialize Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const company = document.getElementById('company').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      // For demonstration, we'll just log the data and show a success message
      console.log('Form submitted:', { name, email, company, message });
      
      // Clear form fields
      contactForm.reset();
      
      // Show success message (in a real implementation, this would be handled better)
      alert('Thank you for your message. I\'ll get back to you soon!');
    });
  }

  // Initialize the testimonials carousel
  const testimonialsCarousel = document.getElementById('testimonialsCarousel');
  if (testimonialsCarousel) {
    new bootstrap.Carousel(testimonialsCarousel, {
      interval: 5000,
      wrap: true
    });
  }

  // Lazy loading of images
  const lazyImages = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver support
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
});
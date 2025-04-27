/**
 * Animations JavaScript functionality
 * 
 * Handles scroll-based animations and transitions
 */

$(document).ready(function() {
    // Initialize scroll reveal for elements with animation classes
    initScrollReveal();
  });
  
  /**
   * Initialize scroll reveal animations
   */
  function initScrollReveal() {
    // Elements to animate when they enter the viewport
    const animatedElements = [
      '.fade-in',
      '.fade-in-left',
      '.fade-in-right',
      '.fade-in-up',
      '.service-card',
      '.blog-card',
      '.feature-item'
    ];
    
    // Check if element is in viewport
    function isInViewport(element) {
      const elementTop = $(element).offset().top;
      const elementBottom = elementTop + $(element).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();
      
      return elementBottom > viewportTop && elementTop < viewportBottom - 100;
    }
    
    // Add visible class to elements in viewport
    function checkVisibility() {
      animatedElements.forEach(selector => {
        $(selector).each(function() {
          if (isInViewport(this) && !$(this).hasClass('has-animated')) {
            $(this).addClass('has-animated');
            
            // Get delay attribute if any
            const delay = $(this).data('delay') || 0;
            
            // Add active class after delay
            setTimeout(() => {
              $(this).addClass('active');
            }, delay);
          }
        });
      });
    }
    
    // Run on page load
    checkVisibility();
    
    // Run on scroll and resize
    $(window).on('scroll resize', checkVisibility);
    
    // Add hover animation to cards and buttons
    $('.service-card, .blog-card, .feature-item').addClass('hover-lift');
    $('.icon-box').addClass('hover-scale');
  }
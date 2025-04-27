// Smooth scrolling functionality for Akmal Billekar's portfolio website

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
  
    // Select all links with hashes
    const scrollLinks = document.querySelectorAll('a[href*="#"]:not([href="#"])');
    
    // Loop through each link
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Only prevent default if the link is on the same page
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
            location.hostname === this.hostname) {
          
          e.preventDefault();
          
          // Get the target element
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            // Get the navbar height to adjust scroll position
            const navbarHeight = document.querySelector('#navbar').offsetHeight;
            
            // Calculate the target position
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            // Smooth scroll to the target
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  
    // Handle the back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
      backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  
    // Add active class to nav links on scroll
    function activateNavLinks() {
      // Get current scroll position
      const scrollPosition = window.scrollY + 100; // Add offset
      
      // Get all sections
      const sections = document.querySelectorAll('section');
      
      // Loop through sections and find the one in view
      sections.forEach(section => {
        const sectionTop = section.offsetTop - document.querySelector('#navbar').offsetHeight;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all nav links
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          
          // Add active class to the corresponding nav link
          const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }
  
    // Call the function on scroll
    window.addEventListener('scroll', activateNavLinks);
    
    // Initialize active link on page load
    activateNavLinks();
  });
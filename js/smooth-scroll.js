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
        const targetElement = document.querySelector(this.getAttribute('href'));

        // Check if the target element exists
        if (targetElement) {
          // Smooth scroll to the target element
          window.scrollTo({
            top: targetElement.offsetTop - 100,  // Offset to account for fixed navbar
            behavior: 'smooth'
          });
        } else {
          console.warn(`Element with ID "${this.getAttribute('href').substring(1)}" not found.`);
        }
      }
    });
  });
});

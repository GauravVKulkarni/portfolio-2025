document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const links = document.querySelectorAll('a[href^="#"]');

    // Toggle menu visibility
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            header.classList.toggle('expanded');
        });
    }

    // Smooth scrolling without changing URL
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight, // Adjust for fixed header
                    behavior: 'smooth'
                });
                
                // Remove the hash from the URL after scrolling
                history.replaceState(null, null, " ");
            }

            // Close the menu if open
            navLinks.classList.remove('active');
            header.classList.remove('expanded');
        });
    });
});
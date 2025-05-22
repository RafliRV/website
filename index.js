 const navLinks = document.querySelectorAll('.nav-link');
  const indicator = document.querySelector('.nav-indicator');

  function updateIndicator(el) {
    const rect = el.getBoundingClientRect();
    const navRect = el.parentElement.getBoundingClientRect();

    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.width = `${el.offsetWidth}px`;

    navLinks.forEach(link => link.classList.remove('active'));
    el.classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      updateIndicator(link);
    });
  });

  // Set default position on load
  window.addEventListener('DOMContentLoaded', () => {
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
      updateIndicator(activeLink);
    }
  });
 
 // Initialize AOS (Animation On Scroll)
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                const nav = document.querySelector('.topnav');
                if (window.scrollY > 50) {
                    nav.style.padding = '10px 50px';
                    nav.style.background = 'rgba(10, 10, 10, 0.95)';
                } else {
                    nav.style.padding = '15px 50px';
                    nav.style.background = 'rgba(10, 10, 10, 0.9)';
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
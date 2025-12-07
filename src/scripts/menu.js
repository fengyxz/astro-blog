const menu = document.querySelector('.menu');
const nav = document.querySelector('#main-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

function toggleMenu() {
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  const newExpanded = !isExpanded;
  menu.setAttribute('aria-expanded', `${newExpanded}`);
  
  if (nav) {
    nav.classList.toggle('hidden');
    // Ensure flex layout when displayed on mobile
    if (!nav.classList.contains('hidden')) {
      nav.classList.add('flex');
    } else {
      nav.classList.remove('flex');
    }
  }
  
  // Toggle icon display
  if (menuIcon && closeIcon) {
    if (newExpanded) {
      menuIcon.classList.add('opacity-0');
      closeIcon.classList.remove('opacity-0');
    } else {
      menuIcon.classList.remove('opacity-0');
      closeIcon.classList.add('opacity-0');
    }
  }
}

menu?.addEventListener('click', toggleMenu);

// Auto-close menu on mobile after clicking navigation links
const navLinks = document.querySelectorAll('#main-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) { // md breakpoint
      if (nav && !nav.classList.contains('hidden')) {
        nav.classList.add('hidden');
        nav.classList.remove('flex');
        menu?.setAttribute('aria-expanded', 'false');
        if (menuIcon && closeIcon) {
          menuIcon.classList.remove('opacity-0');
          closeIcon.classList.add('opacity-0');
        }
      }
    }
  });
});
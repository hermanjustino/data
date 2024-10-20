const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
  
document.addEventListener('click', (event) => {
    const isClickInside = toggleButton.contains(event.target) || navbarLinks.contains(event.target);
  
    if (!isClickInside) {
      navbarLinks.classList.remove('active');
    }
  });
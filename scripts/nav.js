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

// Dark mode toggle
document.getElementById('toggle-mode').addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  // Switch icons based on the mode
  const isDarkMode = document.body.classList.contains('dark-mode');
  const githubIcon = document.querySelector('.social-links a[href*="github"] img');
  const linkedinIcon = document.querySelector('.social-links a[href*="linkedin"] img');

  if (githubIcon) {
    githubIcon.src = isDarkMode
      ? githubIcon.src.replace('light', 'dark')
      : githubIcon.src.replace('dark', 'light');
  }

  if (linkedinIcon) {
    linkedinIcon.src = isDarkMode
      ? linkedinIcon.src.replace('light', 'dark')
      : linkedinIcon.src.replace('dark', 'light');
  }
});
// scripts/projects.js

const projects = [
    {
      name: "Project 1",
      headline: "This is the headline for project 1",
      description: "This is a longer description for project 1. It explains the project in detail.",
      mainImage: "https://via.placeholder.com/300",
      secondaryImage: "https://via.placeholder.com/150",
      githubLink: "https://github.com/yourusername/project1",
      notebookLink: "https://notebooklink.com/project1",
      appLink: "https://applink.com/project1",
      type: "Web Application",
      tools: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Project 2",
      headline: "This is the headline for project 2",
      description: "This is a longer description for project 2. It explains the project in detail.",
      mainImage: "https://via.placeholder.com/300",
      secondaryImage: "https://via.placeholder.com/150",
      githubLink: "https://github.com/yourusername/project2",
      notebookLink: "https://notebooklink.com/project2",
      appLink: "https://applink.com/project2",
      type: "Data Science",
      tools: ["Python", "Pandas", "NumPy"]
    }
  ];
  
  // Function to generate project cards
  function generateProjectCards() {
    const projectsSection = document.getElementById('projects');
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <img src="${project.mainImage}" alt="${project.name}">
        <h2>${project.name}</h2>
        <h3>${project.headline}</h3>
        <p>${project.description}</p>
        <ul class="tools">
          ${project.tools.map(tool => `<li>${tool}</li>`).join('')}
        </ul>
        <div class="links">
          <a href="${project.githubLink}" target="_blank">GitHub</a>
          <a href="${project.notebookLink}" target="_blank">Notebook</a>
          <a href="${project.appLink}" target="_blank">App</a>
        </div>
      `;
      projectsSection.appendChild(projectCard);
    });
  }
  
  generateProjectCards();
  
  document.getElementById('toggle-mode').addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    // Switch icons based on the mode
    const isDarkMode = document.body.classList.contains('dark-mode');
    const githubIcon = document.querySelector('.social-links a:nth-child(1) img');
    const linkedinIcon = document.querySelector('.social-links a:nth-child(2) img');
    
    if (isDarkMode) {
      githubIcon.src = './assets/github-dark.svg';
      linkedinIcon.src = './assets/linkedin-dark.svg';
    } else {
      githubIcon.src = './assets/github-light.svg';
      linkedinIcon.src = './assets/linkedin-light.svg';
    }
  });
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
  },
  {
    name: "Project 3",
    headline: "This is the headline for project 3",
    description: "This is a longer description for project 3. It explains the project in detail.",
    mainImage: "https://via.placeholder.com/300",
    secondaryImage: "https://via.placeholder.com/150",
    githubLink: "https://github.com/yourusername/project3",
    notebookLink: "https://notebooklink.com/project3",
    appLink: "https://applink.com/project3",
    type: "Machine Learning",
    tools: ["Python", "TensorFlow", "Keras"]
  },
  {
    name: "Project 4",
    headline: "This is the headline for project 4",
    description: "This is a longer description for project 4. It explains the project in detail.",
    mainImage: "https://via.placeholder.com/300",
    secondaryImage: "https://via.placeholder.com/150",
    githubLink: "https://github.com/yourusername/project4",
    notebookLink: "https://notebooklink.com/project4",
    appLink: "https://applink.com/project4",
    type: "Web Application",
    tools: ["React", "Node.js", "Express"]
  },
  {
    name: "Project 5",
    headline: "This is the headline for project 5",
    description: "This is a longer description for project 5. It explains the project in detail.",
    mainImage: "https://via.placeholder.com/300",
    secondaryImage: "https://via.placeholder.com/150",
    githubLink: "https://github.com/yourusername/project5",
    notebookLink: "https://notebooklink.com/project5",
    appLink: "https://applink.com/project5",
    type: "Data Science",
    tools: ["R", "Shiny", "ggplot2"]
  },
  {
    name: "Project 6",
    headline: "This is the headline for project 6",
    description: "This is a longer description for project 6. It explains the project in detail.",
    mainImage: "https://via.placeholder.com/300",
    secondaryImage: "https://via.placeholder.com/150",
    githubLink: "https://github.com/yourusername/project6",
    notebookLink: "https://notebooklink.com/project6",
    appLink: "https://applink.com/project6",
    type: "Machine Learning",
    tools: ["Python", "scikit-learn", "Matplotlib"]
  },
  {
    name: "Project 7",
    headline: "This is the headline for project 7",
    description: "This is a longer description for project 7. It explains the project in detail.",
    mainImage: "https://via.placeholder.com/300",
    secondaryImage: "https://via.placeholder.com/150",
    githubLink: "https://github.com/yourusername/project7",
    notebookLink: "https://notebooklink.com/project7",
    appLink: "https://applink.com/project7",
    type: "Web Application",
    tools: ["Vue.js", "Firebase", "Bootstrap"]
  },
  {
    name: "Project 8",
    headline: "This is the headline for project 8",
    description: "This is a longer description for project 8. It explains the project in detail.",
    mainImage: "https://via.placeholder.com/300",
    secondaryImage: "https://via.placeholder.com/150",
    githubLink: "https://github.com/yourusername/project8",
    notebookLink: "https://notebooklink.com/project8",
    appLink: "https://applink.com/project8",
    type: "Data Science",
    tools: ["Python", "Jupyter", "Seaborn"]
  },
  {
    name: "Project 9",
    headline: "This is the headline for project 9",
    description: "This is a longer description for project 9. It explains the project in detail.",
    mainImage: "https://via.placeholder.com/300",
    secondaryImage: "https://via.placeholder.com/150",
    githubLink: "https://github.com/yourusername/project9",
    notebookLink: "https://notebooklink.com/project9",
    appLink: "https://applink.com/project9",
    type: "Machine Learning",
    tools: ["Python", "PyTorch", "OpenCV"]
  },
  {
    name: "Project 10",
    headline: "This is the headline for project 10",
    description: "This is a longer description for project 10. It explains the project in detail.",
    mainImage: "https://via.placeholder.com/300",
    secondaryImage: "https://via.placeholder.com/150",
    githubLink: "https://github.com/yourusername/project10",
    notebookLink: "https://notebooklink.com/project10",
    appLink: "https://applink.com/project10",
    type: "Web Application",
    tools: ["Angular", "TypeScript", "Sass"]
  }
];

// Function to generate filter options
function generateFilterOptions() {
  const types = [...new Set(projects.map(project => project.type))];
  const tools = [...new Set(projects.flatMap(project => project.tools))];

  const typeContainer = document.getElementById('type');
  const toolsContainer = document.getElementById('tools');

  typeContainer.innerHTML = '<button class="filter-option" data-filter="all">All</button>';
  toolsContainer.innerHTML = '<button class="filter-option" data-filter="all">All</button>';

  types.forEach(type => {
    const button = document.createElement('button');
    button.className = 'filter-option';
    button.setAttribute('data-filter', type);
    button.textContent = type;
    typeContainer.appendChild(button);
  });

  tools.forEach(tool => {
    const button = document.createElement('button');
    button.className = 'filter-option';
    button.setAttribute('data-filter', tool);
    button.textContent = tool;
    toolsContainer.appendChild(button);
  });

  // Re-attach event listeners for the new filter options
  document.querySelectorAll('.filter-option').forEach(option => {
    option.addEventListener('click', () => {
      const filterType = document.querySelector('.tab-button.active').getAttribute('data-tab');
      const filterValue = option.getAttribute('data-filter');

      if (filterType === 'tools') {
        if (filterValue === 'all') {
          document.querySelectorAll('.tab-content#tools .filter-option').forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
        } else {
          if (option.classList.contains('active')) {
            option.classList.remove('active');
          } else {
            option.classList.add('active');
          }
          document.querySelector('.tab-content#tools .filter-option[data-filter="all"]').classList.remove('active');
        }
      } else {
        document.querySelectorAll('.tab-content#type .filter-option').forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
      }

      filterProjects();
    });
  });
}

// Function to open the modal with project details
function openModal(project) {
  document.getElementById('modal-title').textContent = project.name; // Set the title
  document.getElementById('modal-primary-image').src = project.mainImage;
  document.getElementById('modal-headline').textContent = project.headline;
  document.getElementById('modal-app-link').href = project.appLink;
  document.getElementById('modal-app-link').textContent = "View App";
  document.getElementById('modal-description').textContent = project.description;
  document.getElementById('modal-secondary-image').src = project.secondaryImage;
  document.getElementById('modal-github-link').href = project.githubLink;
  document.getElementById('modal-notebook-link').href = project.notebookLink;
  document.getElementById('modal-app-link-bottom').href = project.appLink;

  const modal = document.getElementById('project-modal');
  modal.style.display = "block";
}

// Event listener to close the modal
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('project-modal').style.display = "none";
});

// Event listener to close the modal when clicking outside of it
window.addEventListener('click', (event) => {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Ensure no code is inadvertently setting the modal to be displayed on page load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('project-modal').style.display = "none";
});

// Update the generateProjectCards function to call adjustLayout after rendering projects
function generateProjectCards(filteredProjects) {
  const projectsSection = document.getElementById('projects');
  projectsSection.innerHTML = ''; // Clear existing projects
  filteredProjects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <img src="${project.mainImage}" alt="${project.name}">
      <div class="overlay">
        <div class="overlay-content">
          <h2>${project.name}</h2>
          <h3>${project.headline}</h3>
        </div>
      </div>
    `;
    projectCard.addEventListener('click', () => openModal(project));
    projectsSection.appendChild(projectCard);
  });
}

// Initial rendering of filter options and project cards
generateFilterOptions();
generateProjectCards(projects);

// Function to filter projects
function filterProjects() {
  const activeType = document.querySelector('.tab-content#type .filter-option.active');
  const activeTools = document.querySelectorAll('.tab-content#tools .filter-option.active');

  const filterType = activeType ? activeType.getAttribute('data-filter') : 'all';
  const filterTools = Array.from(activeTools).map(tool => tool.getAttribute('data-filter'));

  const filteredProjects = projects.filter(project => {
    const typeMatch = filterType === 'all' || project.type === filterType;
    const toolsMatch = filterTools.length === 0 || filterTools.includes('all') || filterTools.some(tool => project.tools.includes(tool));
    return typeMatch && toolsMatch;
  });

  generateProjectCards(filteredProjects);
}

// Event listeners for tab switching
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
    document.getElementById(button.getAttribute('data-tab')).style.display = 'flex';

    // Remove selection from the other tab
    if (button.getAttribute('data-tab') === 'type') {
      document.querySelectorAll('.tab-content#tools .filter-option').forEach(opt => opt.classList.remove('active'));
    } else {
      document.querySelectorAll('.tab-content#type .filter-option').forEach(opt => opt.classList.remove('active'));
    }

    filterProjects();
  });
});

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
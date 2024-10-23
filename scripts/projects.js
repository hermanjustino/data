// scripts/projects.js

const projects = [
  {
    name: "BASE Repo Initiator",
    headline: "Create an empty HTML project and initialise a local git repository",
    description: `Create an empty HTML project and initialise a local git repository

BASE gives user an empty html project with css, javascript, and assets folder. You can alter js and css right out of the box.`,
    mainImage: "https://github.com/hermanjustino/BASE/assets/46625107/cdefbb00-3226-46d8-b9e4-ae10ddb4613f",
    secondaryImage: "https://github.com/user-attachments/assets/b32ebaf7-1a74-47b8-812f-1973e2546855",
    githubLink: "https://github.com/hermanjustino/BASE/tree/main",
    type: "Python Script",
    tools: ["Python", "JavaScript", "Git"]
  },
  {
    name: "CFC-x-Soho",
    headline: "Information Page for CFC x Soho Toronto 2024",
    description: `Founded in 2019 by Jai Al-Attas & Markie Bryant, the mission of CFC is to unearth and empower the next generation of creative leaders from disenfranchised & impacted communities.`,
    mainImage: "https://github.com/user-attachments/assets/d740e304-7263-4a67-a77a-5f72aa4e1962",
    secondaryImage: "https://github.com/user-attachments/assets/93f7a0f1-7e5e-4fca-af36-7867cefa6c90",
    githubLink: "https://github.com/hermanjustino/CFC-x-Soho/tree/main",
    appLink: "https://hermanjustino.github.io/CFC-x-Soho/",
    type: "Web Application",
    tools: ["JavaScript", "Git", "CSS"]
  },
  {
    name: "Email Newsletter Service",
    headline: "This is a fully customizable Email Newsletter Service",
    description: `Built with modern email protocols

Customize frequency, set automatic emails

Full Subscribe, Unsubscribe functions for users`,
    mainImage: "https://github.com/user-attachments/assets/a9329bb7-8a68-487b-bec0-9bb57e78bb75",
    secondaryImage: "https://github.com/user-attachments/assets/b9f599db-649a-4907-a250-9b1a93b62e76",
    githubLink: "https://github.com/hermanjustino/email_newsletter",
    appLink: "https://applink.com/project3",
    type: "Web Application",
    tools: ["Python", "JavaScript", "stmp", "HTML"]
  },
  {
    name: "COVID-19 Data Analysis",
    headline: "This project analyzes COVID-19 data to identify trends and patterns in the spread of the virus",
    description: `This project analyzes COVID-19 data to identify trends and patterns in the spread of the virus, 
    the impact on different regions, and the effectiveness of various interventions.
    
    The dataset contains COVID-19 case numbers, deaths, recoveries, and other relevant metrics. The data is 
    sourced from Johns Hopkins University and other reliable sources.`,
    mainImage: "https://github.com/user-attachments/assets/b7fe36a0-c3c0-47cf-9d94-940278974eb3",
    secondaryImage: "https://github.com/user-attachments/assets/56813612-4504-4658-9da5-001eae62a8c0",
    githubLink: "https://github.com/hermanjustino/Msc.-DS-Assignment-Repo/tree/main/Covid_19_Data_Analysis",
    notebookLink: "https://notebooklink.com/project4",
    type: "Data Science",
    tools: ["R", "ggplot2"]
  },
  {
    name: "NYPD Crime Analysis",
    headline: "This project analyzes NYPD crime incident data to identify trends and patterns.",
    description: `The dataset contains historical shooting incident data from the NYPD.
    Key Findings

Most incidents occur in specific boroughs.
There is a significant difference in the number of incidents based on victim sex.`,
    mainImage: "https://github.com/user-attachments/assets/a2aaf42f-0339-4fed-9119-4ad74a78a28a",
    secondaryImage: "https://github.com/user-attachments/assets/ffa1ac08-019c-46fc-896e-80ac7bbd74da",
    githubLink: "https://github.com/hermanjustino/Msc.-DS-Assignment-Repo/tree/main/NYPD_crime_statistics_assignment",
    notebookLink: "https://notebooklink.com/project6",
    type: "Data Science",
    tools: ["Python", "ggplot2", "leaflet"]
  },
  /*
  {
    name: "NYPD Crime Analysis",
    headline: "This project analyzes NYPD crime incident data to identify trends and patterns.",
    description: `The dataset contains historical shooting incident data from the NYPD.
    Key Findings

Most incidents occur in specific boroughs.
There is a significant difference in the number of incidents based on victim sex.`,
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
    */
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
  document.getElementById('modal-description').textContent = project.description;
  document.getElementById('modal-secondary-image').src = project.secondaryImage;

  // Conditionally include the app link
  const appLinkElement = document.getElementById('modal-app-link');
  if (project.appLink) {
    appLinkElement.href = project.appLink;
    appLinkElement.textContent = "View App";
    appLinkElement.classList.add('modal-link'); // Add the modal-link class
    appLinkElement.style.display = "inline-block"; // Ensure the link is visible
  } else {
    appLinkElement.style.display = "none"; // Hide the link if not present
  }

  // Conditionally include the GitHub link
  const githubLinkElement = document.getElementById('modal-github-link');
  if (project.githubLink) {
    githubLinkElement.href = project.githubLink;
    githubLinkElement.classList.add('modal-link'); // Add the modal-link class
    githubLinkElement.style.display = "inline-block"; // Ensure the link is visible
  } else {
    githubLinkElement.style.display = "none"; // Hide the link if not present
  }

  // Conditionally include the notebook link
  const notebookLinkElement = document.getElementById('modal-notebook-link');
  if (project.notebookLink) {
    notebookLinkElement.href = project.notebookLink;
    notebookLinkElement.classList.add('modal-link'); // Add the modal-link class
    notebookLinkElement.style.display = "inline-block"; // Ensure the link is visible
  } else {
    notebookLinkElement.style.display = "none"; // Hide the link if not present
  }

  // Conditionally include the bottom app link
  const appLinkBottomElement = document.getElementById('modal-app-link-bottom');
  if (project.appLink) {
    appLinkBottomElement.href = project.appLink;
    appLinkBottomElement.classList.add('modal-link'); // Add the modal-link class
    appLinkBottomElement.style.display = "inline-block"; // Ensure the link is visible
  } else {
    appLinkBottomElement.style.display = "none"; // Hide the link if not present
  }

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
      <img src="${project.mainImage}" alt="${project.name}" loading="lazy">
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

// Add this to your scripts/projects.js file

function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdown-menu');
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
}
// Featured projects data
const featuredProjects = [
  {
    title: "Ambient Scribe",
    description: "AI-powered health tech for streamlined clinical documentation",
    image: "./assets/scribe.png",
    link: "https://ambient-scribe-150876109027.us-central1.run.app/"
  },/* 
  {
    title: "Our Journey to Civic Engagement",
    description: "A comprehensive platform designed to enhance civic engagement for Environmental Defence Canada.",
    image: "./assets/edc.png",
    link: "https://hermanjustino.github.io/edc/"
  } */
];

// Generate featured project cards
function generateFeaturedProjects() {
  const container = document.getElementById('featured-projects');
  
  featuredProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'featured-project-card';
    
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="featured-project-image">
      <div class="featured-project-content">
        <h3 class="featured-project-title">${project.title}</h3>
        <p class="featured-project-description">${project.description}</p>
        <a href="${project.link}" target="_blank" class="featured-project-button">See Site</a>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Initialize featured projects when DOM is loaded
document.addEventListener('DOMContentLoaded', generateFeaturedProjects);

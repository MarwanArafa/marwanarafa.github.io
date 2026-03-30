// main.js
import { about, projects } from './data.js';

// 1. Render the About Section
const aboutSection = document.getElementById('about-section');
if (aboutSection) {
    aboutSection.innerHTML = `<p>${about}</p>`;
}

// 2. Render the Projects Dynamically
const projectsContainer = document.getElementById('projects-container');

if (projectsContainer) {
    // Clear out any remaining placeholder content
    projectsContainer.innerHTML = ''; 

    projects.forEach(project => {
        // Create the card container
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Map the tech stack array into individual span tags
        const techTags = project.techStack
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');

        // Construct the card's HTML
        card.innerHTML = `
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">
                ${techTags}
            </div>
        `;
        
        projectsContainer.appendChild(card);
    });
}

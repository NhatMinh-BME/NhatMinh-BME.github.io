// js/main.js
import { projects } from './projects-data.js';

document.addEventListener('DOMContentLoaded', renderProjects);

function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;

    projectGrid.innerHTML = '';

    if (!projects || projects.length === 0) {
        projectGrid.innerHTML = '<p class="loading">No projects to display yet.</p>';
        return;
    }

    projects.forEach(project => {
        const card = document.createElement('article');
        card.className = 'project-card';

        const links = [];
        if (project.githubUrl) {
            links.push(`<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`);
        }
        if (project.liveUrl) {
            links.push(`<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>`);
        }
        if (project.architectureDiagram) {
            links.push(`<a href="${project.architectureDiagram}" target="_blank" rel="noopener noreferrer">Architecture ↗</a>`);
        }

        const linksHtml = links.length ? `<div class="project-links">${links.join('')}</div>` : '';

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p class="tech-stack">${project.techStack}</p>
            <p class="description">${project.description}</p>
            ${linksHtml}
        `;

        projectGrid.appendChild(card);
    });
}
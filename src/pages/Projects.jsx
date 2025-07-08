import '/src/styles/Projects.css'
import { useState } from 'react'

const ProjectCard = ({ title, projectImageUrl, tools, description, projectUrl }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = (e) => {
        // Don't flip if clicking on the link button
        if (e.target.closest('.project-link-btn')) {
            return;
        }
        setIsFlipped(!isFlipped);
    };

    const handleLinkClick = (e) => {
        e.stopPropagation();
        window.open(projectUrl, '_blank');
    };

    return (
        <div className="single-project-container" onClick={handleCardClick}>
            <div className={`project-card ${isFlipped ? 'flipped' : ''}`}>
                {/* Front Side */}
                <div className="project-card-front">
                    <div className="project-title">{title}</div>
                    <div className="project-image-container">
                        <img className="project-image" src={projectImageUrl} alt={title} />
                    </div>
                    <div className="tools-container">
                        {tools.map((tool, index) => (
                            <span key={index} className="tool-tag">{tool}</span>
                        ))}
                    </div>
                    {projectUrl && (
                        <div className="project-link-container">
                            <button className="project-link-btn" onClick={handleLinkClick}>
                                🚀 View Live Project
                            </button>
                        </div>
                    )}
                    <div className="flip-indicator">↻</div>
                </div>
                
                {/* Back Side */}
                <div className="project-card-back">
                    <div className="project-title">{title}</div>
                    <div className="project-description">
                        <h3>Project Details</h3>
                        <p>{description}</p>
                    </div>
                    {projectUrl && (
                        <div className="project-link-container">
                            <button className="project-link-btn" onClick={handleLinkClick}>
                                🚀 View Live Project
                            </button>
                        </div>
                    )}
                    <div className="flip-indicator">↻</div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projectsData = [
        {
            title: 'Python Code Editor',
            projectImageUrl: './code-editor-image.png',
            tools: ['React', 'Monaco', 'Pyodide'],
            description: 'A fully functional Python code editor built with React and Monaco Editor. Features real-time syntax highlighting, auto-completion, and the ability to execute Python code directly in the browser using Pyodide. This project demonstrates advanced frontend development skills and integration with WebAssembly technologies.',
            projectUrl: 'https://codeplatoon.github.io/code-platoon-code-editor/' // Add your actual URL here
        },
        {
            title: 'Job Application Tracker',
            projectImageUrl: './job-pilot-snip.png',
            tools: ['React', 'Django', 'PostgreSQL'],
            description: 'A comprehensive job application tracking system designed to help job seekers organize their applications, track interview progress, and manage contacts. Built with a React frontend and Django REST API backend, utilizing PostgreSQL for robust data management. Features include application status tracking, interview scheduling, and analytics dashboard.'
            // No projectUrl - this project is not hosted
        },
        {
            title: 'Music Discovery App',
            projectImageUrl: './music-discovery-app.png',
            tools: ['React', 'Django', 'PostgreSQL'],
            description: 'An innovative music discovery platform that helps users find new artists and songs based on their preferences. The application features user authentication, playlist creation, music recommendations, and social sharing capabilities. Built with modern web technologies including React for the frontend and Django for the backend API.'
            // No projectUrl - this project is not hosted
        }
    ];

    return (
        <div className="project-page">
            {projectsData.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    projectImageUrl={project.projectImageUrl}
                    tools={project.tools}
                    description={project.description}
                    projectUrl={project.projectUrl}
                />
            ))}
        </div>
    );
};

export default Projects;
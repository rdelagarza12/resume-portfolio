import '/src/styles/Projects.css'
import { useState } from 'react'

const ProjectCard = ({ title, projectImageUrl, tools, description, projectUrl, githubUrl, youtubeUrl }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = (e) => {
        // Don't flip if clicking on the link buttons
        if (e.target.closest('.project-link-btn')) {
            return;
        }
        setIsFlipped(!isFlipped);
    };

    const handleLiveProjectClick = (e) => {
        e.stopPropagation();
        window.open(projectUrl, '_blank');
    };

    const handleGithubClick = (e) => {
        e.stopPropagation();
        window.open(githubUrl, '_blank');
    };

    const handleYoutubeClick = (e) => {
        e.stopPropagation();
        window.open(youtubeUrl, '_blank');
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
                    <div className="project-links-container">
                        {projectUrl && (
                            <button className="project-link-btn live-project-btn" onClick={handleLiveProjectClick}>
                                🚀 View Live Project
                            </button>
                        )}
                        {youtubeUrl && (
                            <button className="project-link-btn live-project-btn" onClick={handleYoutubeClick}>
                                ▶️ View Video Demo
                            </button>
                        )}
                        {githubUrl && (
                            <button className="project-link-btn github-btn" onClick={handleGithubClick}>
                                📁 View GitHub Repo
                            </button>
                        )}
                    </div>
                    <div className="flip-indicator">↻</div>
                </div>
                
                {/* Back Side */}
                <div className="project-card-back">
                    <div className="project-title">{title}</div>
                    <div className="project-description">
                        <h3>Project Details</h3>
                        <p>{description}</p>
                    </div>
                    <div className="project-links-container">
                        {projectUrl && (
                            <button className="project-link-btn live-project-btn" onClick={handleLiveProjectClick}>
                                🚀 View Live Project
                            </button>
                        )}
                        {youtubeUrl && (
                            <button className="project-link-btn live-project-btn" onClick={handleYoutubeClick}>
                                ▶️ View Video Demo
                            </button>
                        )}
                        {githubUrl && (
                            <button className="project-link-btn github-btn" onClick={handleGithubClick}>
                                📁 View GitHub Repo
                            </button>
                        )}
                    </div>
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
            projectUrl: 'https://codeplatoon.github.io/code-platoon-code-editor/',
            githubUrl: `https://github.com/CodePlatoon/code-platoon-code-editor`
        },
        {
            title: 'Job Application Tracker',
            projectImageUrl: './job-pilot-snip.png',
            tools: ['React', 'Django', 'PostgreSQL'],
            description: 'A comprehensive job application tracking system designed to help job seekers organize their applications, track interview progress, and manage contacts. Built with a React frontend and Django REST API backend, utilizing PostgreSQL for robust data management. Features include application status tracking, interview scheduling, and analytics dashboard.',
            githubUrl: 'https://github.com/rdelagarza12/jobtracker'
        },
        {
            title: 'Music Discovery App',
            projectImageUrl: './music-discovery-app.png',
            tools: ['React', 'Django', 'PostgreSQL'],
            description: 'An innovative music discovery platform that helps users find new artists and songs based on their preferences. The application features user authentication, playlist creation, music recommendations, and social sharing capabilities. Built with modern web technologies including React for the frontend and Django for the backend API.',
            githubUrl: 'https://github.com/rdelagarza12/music-discovery-app' 
        },
        {
            title: 'Rogue-Like Video Game',
            projectImageUrl: `./godot-group-project.png`,
            tools: ['Godot', 'GDScript'],
            description: `A rogue-like video game developed using the Godot Game Engine and GDScript, a Python-like programming language native to the platform. This collaborative project involved a team of 5 developers working within a 2-week sprint timeline. The first week focused entirely on learning the Godot engine, while the second week was dedicated to development and implementation. The project required careful planning, regular code reviews, and coordinated task distribution among team members to ensure successful completion within the tight deadline.`,
            youtubeUrl: 'https://www.youtube.com/watch?v=P9hkIx4DC9Q&t=188s',
            githubUrl: 'https://github.com/rdelagarza12/RPG-Game-VoidWalker' 
        },
        {
            title: 'Flappy-Bird Clone',
            projectImageUrl: `./flappy-bird.png`,
            tools: ['Python', 'Pygame', 'Object Oriented Programming'],
            description: `A Flappy Bird clone developed in Python using the Pygame library, implementing object-oriented programming principles to create modular, reusable code architecture. The project demonstrates proficiency in game development fundamentals, including sprite management, collision detection, and game loop implementation`,
            githubUrl: 'https://github.com/rdelagarza12/flappybird' 
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
                    githubUrl={project.githubUrl}
                    youtubeUrl={project.youtubeUrl}
                />
            ))}
        </div>
    );
};

export default Projects;
// import '/src/styles/Projects.css'

const ProjectContainer = ({title, projectImageUrl, tools}) => {
    return (
        <div className="single-project-container">
            <h2 className="project-title">{title}</h2>
            <img className="project-image" src={projectImageUrl} />
            <div className="tools-container">
                {tools.map((tool, index) => (
                    <div key={index}>
                        <h4>{tool}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer;
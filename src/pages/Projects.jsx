import '/src/styles/Projects.css'
import ProjectContainer from "../components/ProjectContainer";
import CodeEditor from "../components/CodeEditorComponent";

const Projects = () => {
    return (
        <div className="project-page">
            <ProjectContainer 
            title={'Python Code Editor'}
            projectImageUrl={'./public/code-editor-image.png'}
            tools={[
                'React',
                'Monaco',
                'Pyodide',

            ]}
            ></ProjectContainer>
            <ProjectContainer 
            title={'Job Application Tracker'}
            projectImageUrl={''}
            tools={[
                'React',
                'Django',
                'PostgreSQL'
            ]}
            ></ProjectContainer>
            <ProjectContainer 
            title={'Music Discovery App'}
            projectImageUrl={''}
            tools={[
                'React',
                'Django',
                'PostgreSQL'
            ]}
            ></ProjectContainer>
        </div>
    )
}

// style={{marginRight: spacing + 'em'}}

export default Projects;
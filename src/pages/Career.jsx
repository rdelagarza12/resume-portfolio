import '/src/styles/Career.css'
import CareerEvent from '../components/CareerEvent';

const careerEventData = [
    {
        date : '2025',
        job : `Intro To Coding Instructor : Code Platoon`,
        jobDescription : `I was teaching`
    },
    {
        date : '2024 : June - August',
        job : `Business Analyst : Accenture`,
        jobDescription : `I was teaching`
    },
    {
        date : '2024',
        job : `Foundations of Programming Instructor`,
        jobDescription : `Instructed an introductionary course focused on basic Python and Javascript principles, HTML and CSS, API, CRUD applications, Object Oriented Programming, and Data type and Data Structures`
    },
]

const Career = () => {

    return (
        <>
        <div className="timeline-container">
            <div className="timeline">
                <div className="timeline-edge">
                    <div className="date">PRESENT</div>
                    <div className="job">Lead Pre-course Instructor : Code Platoon</div>
                    <div className="job-description">Responsible for all Pre-course instruction, curriculum, and development</div>
                </div>
                {careerEventData.map((careerEvent, index) => (
                    <CareerEvent
                    key={index}
                    date={careerEvent.date}
                    job={careerEvent.job}
                    jobDescription={careerEvent.jobDescription}
                    ></CareerEvent>
                ))}
            </div>
        </div>
        </>
    )
}

export default Career;
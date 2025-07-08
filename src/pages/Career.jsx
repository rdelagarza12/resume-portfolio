import '/src/styles/Career.css'
import CareerEvent from '../components/CareerEvent';

const careerEventData = [
    {
        date : '2025',
        job : `Intro To Coding Instructor : Code Platoon`,
        jobDescription : ` Delivered comprehensive Python programming instruction to complete beginners, guiding aspiring applicants from zero coding experience through fundamental programming concepts, data structures, and practical applications. This intensive course prepared students for Code Platoon's rigorous application process and live technical assessments. Recognizing that each student learns differently, I provided extensive one-on-one mentorship sessions and individualized support, adapting my teaching approach to meet diverse learning styles and ensuring every student had the tools needed to succeed in their coding journey.`
    },
    {
        date : '2024 : June - August',
        job : `Business Analyst : Accenture`,
        jobDescription : `Led a comprehensive process improvement initiative across the entire team. My primary responsibility involved conducting thorough analyses of each team member's role and workflows, then standardizing and updating local work instructions to create consistent, efficient processes. Through extensive cross-functional collaboration and documentation, I successfully streamlined the reporting process, reducing redundancies and improving operational efficiency while ensuring compliance with healthcare data standards and regulatory requirements.`
    },
    {
        date : '2024',
        job : `Foundations of Programming Instructor`,
        jobDescription : `Taught a pre-course curriculum to accepted Code Platoon applicants, focusing heavily on object-oriented programming principles alongside HTML, CSS, JavaScript, Python, and data structures. This course prepared students for the main program's assessments, resulting in a 25% increase in success rates and significantly reducing the previously high failure rate in our cohorts.`
    },
    {
        date : `2021 - 2024`,
        job : `Supervisor, Staff-Sergeant : United States Army`,
        jobDescription : `Led a 30-person engineering team in demolition operations, data collection, and team leader training while managing over $400,000 in equipment. I cross-trained NATO personnel in American military and civil/structural engineering tasks, strengthening international partnerships and ensuring mission readiness across allied forces.`
    }
]

const Career = () => {

    return (
        <>
        <div className="timeline-container">
            <div className="timeline">
                <div className="timeline-edge">
                    <div className="date">PRESENT</div>
                    <div className="job">Lead Pre-course Instructor : Code Platoon</div>
                    <div className="job-description">I spearhead curriculum delivery for all incoming applicants, developing their foundational programming skills and preparing them for success in the full program. This role positions me as the primary touchpoint that shapes candidates' first impression of Code Platoon while directly impacting student readiness and program completion rates. Through personalized instruction and mentorship, I help transform aspiring developers into well-prepared candidates, contributing to both individual student success and the organization's continued growth.</div>
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
import '/src/styles/Career.css'


const CareerEvent = ({date, job, jobDescription}) => {

    return (
        <div className='event slide-in'>
            <div className="date">{date}</div>
            <div className="job">{job}</div>
            <div className="job-description">{jobDescription}</div>
        </div>
    )
}

export default CareerEvent;
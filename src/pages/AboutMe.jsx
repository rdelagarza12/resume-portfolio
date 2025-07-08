import '/src/styles/AboutMe.css'

const AboutMe = () => {


    return (
        <div className="about-me-card">
            <div className="intro-card about-me-section">
                <img className="headshot-img" src="/resume-portfolio/headshot.jpg" alt="headshot-image"></img>
                <div className="who-am-i">
                    <h1>Who am I?</h1>
                    <h3>Hi!, I'm Rogelio</h3>
                    <p>I am a Junior Full-Stack Developer with a strong leadership background honed during 8 years of military service.</p>
                </div>
            </div>
            <div className="about-me-section">
                <h2>Tech Career</h2>
                <p>
                I began my journey into tech through <strong>Code Platoon</strong>, a non-profit bootcamp that trains veterans, active-duty service members, and their spouses in full-stack software engineering. During the program, I gained hands-on experience with Python, JavaScript, HTML, CSS, PostgreSQL, and frameworks like React and Django. I also learned to deploy applications using EC2, Nginx, and Gunicorn.
                </p>
                <p>
                After graduating from Code Platoon, I returned as a <strong>Teaching Assistant</strong>, where my dedication and performance quickly earned me a promotion to <strong>part-time instructor</strong>. In this role, I taught the foundational Foundations of Programming course, building strong relationships with students and honing my instructional approach.
                </p>
                <p>
                My success in the classroom led to expanded responsibilities within a year and a half, including teaching the Intro to Coding in Python Live course—a pivotal program that became instrumental in our admissions process and significantly boosted enrollment numbers. Recognizing my impact on both student success and company growth, leadership promoted me to <strong>Lead Pre-Course Instructor</strong>. In this role, I now shape the entire pre-course experience, teaching all incoming applicants and transforming them into well-prepared Code Platoon candidates, directly contributing to higher completion rates and the organization's continued success.
                </p>

            </div>
            <div className='about-me-section'>
                <h2>Military Career</h2>
                <p>
                I served eight years in the United States Army as a <strong>Combat Engineer</strong>, attaining the rank of <strong>Staff Sergeant</strong>. Throughout my service, I led teams ranging from 3–4 personnel to full squads of up to 30, adapting my leadership style to meet the mission requirements and team dynamics.
                </p>

                <p>
                My focus areas included <strong>mentorship</strong>, <strong>professional development</strong>, <strong>technical training</strong>, <strong>logistics coordination</strong>, <strong>data management</strong>, and <strong>project management</strong>. These responsibilities allowed me to cultivate skills in planning, team-building, and operational execution—skills I now bring to my work in tech.
                </p>

            </div>
        </div>
    )
}

export default AboutMe;
import '/src/styles/AboutMe.css'

const AboutMe = () => {


    return (
        <div className="about-me-card">
            <div className="intro-card about-me-section">
                <img className="headshot-img" src="./src/assets/headshot.jpg"></img>
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
                After graduating, I returned as a <strong>Teaching Assistant</strong>, where my performance led to a role as a <strong>part-time instructor</strong>. In this role, I taught introductory courses such as Intro to Python and Programming Fundamentals.
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
// src/pages/Skills.jsx
import "../styles/Skills.css";
import Skill from "../components/SkillContainer";

// React Icons
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiPython, SiDjango, SiNginx, SiGunicorn,
  SiPostgresql, SiMysql, SiMicrosoft,
  SiGit, SiLinux, SiBootstrap, SiJupyter,
  SiTableau, SiDotnet
} from 'react-icons/si';
import { DiCssdeck } from 'react-icons/di';
import { FaServer, FaAws, FaCogs, FaDatabase } from 'react-icons/fa';

/* ─── Skill data with React components ──────────────────────────── */
const frontEnd = [
  { label: "HTML", icon: <SiHtml5 color="#E34F26" /> },
  { label: "CSS", icon: <SiCss3 color="#1572B6" /> },
  { label: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { label: "React", icon: <SiReact color="#61DAFB" /> },
  { label: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> }
];

const backEnd = [
  { label: "Python", icon: <SiPython color="#3776AB" /> },
  { label: "Django", icon: <SiDjango color="#092E20" /> },
  { label: "C#", icon: <SiDotnet color="#512BD4" /> },
  { label: "RestAPI", icon: <FaServer color="#4CAF50" /> },
  { label: "Nginx", icon: <SiNginx color="#009639" /> },
  { label: "Gunicorn", icon: <SiGunicorn color="#499848" /> }
];

const databases = [
  { label: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { label: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { label: "MS SQL Server", icon: <FaDatabase color="#CC2927" /> }
];

const additional = [
  { label: "Git", icon: <SiGit color="#F05032" /> },
  { label: "AWS EC2", icon: <FaAws color="#FF9900" /> },
  { label: "Linux", icon: <SiLinux color="#FCC624" /> },
  { label: "Jupyter", icon: <SiJupyter color="#F37626" /> },
  { label: "Tableau", icon: <SiTableau color="#E97627" /> }
];

/* ─── Reusable Section component ────────────────────────────────── */
const Section = ({ title, variant, align, skills }) => (
  <section className={`skill-section ${variant} ${align}`}>
    <h2>{title}</h2>

    <div className="honeycomb">
      {skills.map((skill) => (
        <Skill key={skill.label} label={skill.label} variant={variant} icon={skill.icon} />
      ))}
    </div>
  </section>
);

/* ─── Page ───────────────────────────────────────────────────────── */
export default function Skills() {
  return (
    <div className="skills-page">
      <Section title="Front-End"   variant="front"  align="left"  skills={frontEnd}   />
      <Section title="Back-End"    variant="back"   align="right" skills={backEnd}    />
      <Section title="Databases"   variant="db"     align="left"  skills={databases}  />
      <Section title="Additional"  variant="other"  align="right" skills={additional} />
    </div>
  );
}
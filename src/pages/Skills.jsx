// src/pages/Skills.jsx
import "../styles/Skills.css";
import Skill from "../components/SkillContainer";

/* ─── Skill data ─────────────────────────────────────────────────── */
const frontEnd   = ["HTML", "CSS", "JavaScript", "React"];
const backEnd    = ["Python", "Django", "RestAPI", "C Sharp"];
const databases  = ["PostgreSQL", "MySQL"];
const additional = ["Git", "AWS", "Linux"];

/* ─── Reusable Section component ────────────────────────────────── */
const Section = ({ title, variant, align, skills }) => (
  <section className={`skill-section ${variant} ${align}`}>
    <h2>{title}</h2>

    <div className="honeycomb">
      {skills.map((s) => (
        <Skill key={s} label={s} variant={variant} />
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

// src/components/SkillContainer.jsx

export default function Skill({ label, variant, icon }) {
  return (
    <div className={`hex ${variant}`}>
      <div className="skill-content">
        <div className="skill-icon">
          {icon}
        </div>
        <span className="label">{label}</span>
      </div>
    </div>
  );
}
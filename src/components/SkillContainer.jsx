// src/components/SkillContainer.jsx
import "../styles/Skills.css";

export default function SkillContainer({ label, variant }) {
  return (
    <div className={`hex ${variant}`}>
      {/* Swap in your <img /> or SVG icon here */}
      <span className="label">{label}</span>
    </div>
  );
}

// src/pages/Resume.jsx
export default function Resume() {
  return (
    <div style={{ height: "100vh", padding: "2rem", background: "#0d1117" }}>
      <iframe
        src="src/assets/rogelio-delagarza-resume.pdf"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="My Resume"
      />
    </div>
  );
}

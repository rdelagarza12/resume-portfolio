// src/pages/Resume.jsx
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import "/src/styles/Resume.css";

export default function Resume() {
  const resumePath = "/Resume-Portfolio/rogelio-delagarza-resume.pdf";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Rogelio-De-La-Garza-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(resumePath, '_blank');
  };

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-title">My Resume</h1>
        <div className="resume-actions">
          <button 
            onClick={handleDownload}
            className="resume-button"
            aria-label="Download resume as PDF"
          >
            <FaDownload />
            Download
          </button>
          <button 
            onClick={handleOpenInNewTab}
            className="resume-button"
            aria-label="Open resume in new tab"
          >
            <FaExternalLinkAlt />
            Open in New Tab
          </button>
        </div>
      </div>
      
      <iframe
        src={resumePath}
        className="resume-iframe"
        title="Rogelio De La Garza Resume"
        loading="lazy"
      />
    </div>
  );
}
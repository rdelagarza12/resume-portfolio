// src/components/NavigationBar.jsx
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "/src/styles/NavigationBar.css";

const pages = [
  { title: "About Me", location: "/" },
  { title: "Career", location: "/Career" },
  { title: "Skills", location: "/Skills" },
  { title: "Projects", location: "/Projects" },
];

export default function NavigationBar() {
  return (
    <nav className="nav-bar">
      {/* Internal app routes */}
      {pages.map(({ title, location }) => (
        <NavLink
          key={title}
          to={location}
          end
          className={({ isActive }) =>
            "nav-link" + (isActive ? " active" : "")
          }
        >
          {title}
        </NavLink>
      ))}
        <NavLink to="/Resume" className={({ isActive }) =>
            "nav-link" + (isActive ? " active" : "")
          }>Resume</NavLink>
      {/* External links */}
      <a
        href="https://www.linkedin.com/in/rogeliodelagarza3901"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        <FaLinkedin style={{ marginRight: "0.5rem" }} />
        LinkedIn
      </a>
      <a
        href="https://github.com/rdelagarza12"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        <FaGithub style={{ marginRight: "0.5rem" }} />
        GitHub
      </a>
    </nav>
  );
}

import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Career from "./pages/Career.jsx";
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Resume from "./pages/Resume.jsx";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                index: true,
                element: <AboutMe/>
            },
            {
                path: 'Career',
                element: <Career/>
            },
            {
                path: 'Skills',
                element: <Skills/>
            },
            {
                path: 'Projects',
                element: <Projects/>
            },
            {
                path: "Resume",
                element: <Resume/>
            }
        ]
    }
], {
    basename: '/resume-portfolio'
});

export default router;

import { useNavigate } from 'react-router-dom';
import './NavButton.css'

export function HomeButton(){
    const navigate = useNavigate();
    function goHome() {
        navigate('/');
    }
    return(
        <button className="Home" onClick={goHome}>
            Home
        </button>
    );
}

export function AboutButton(){
    const navigate = useNavigate();
    function goAbout() {
        navigate('/about');
    }
    return(
        <button className="Home" onClick={goAbout}>
            About Me
        </button>
    );
}

export function ProjectsButton(){
    const navigate = useNavigate();
    function goProjects() {
        navigate('/projects');
    }
    return(
        <button className="Home" onClick={goProjects}>
            Projects
        </button>
    );
}

export function EduButton(){
    const navigate = useNavigate();
    function goEdu() {
        navigate('/education');
    }
    return(
        <button className="Home" onClick={goEdu}>
            Education
        </button>
    );
}
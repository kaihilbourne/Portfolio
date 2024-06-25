import './Header.css';
import {HomeButton, AboutButton, ProjectsButton, EduButton} from './Navigation/NavButton';

export default function Header(){
    return(
        <div className='container'>
            <div className='item'><HomeButton/></div>
            <div className='item'><ProjectsButton/></div>
            <div className='item'><EduButton/></div>
            <div className='item'><AboutButton/></div>
        
        </div>
    );
}

//define function to move to home page
import { useNavigate } from 'react-router-dom';
import './HomeButton.css'

export default function HomeButton(){
    const navigate = useNavigate();
    function goHome() {
        navigate('/');
    }
    return(
        <button className="Home" onClick={goHome}>
            <img 
                src="https://tse1.explicit.bing.net/th?id=OIP.qC5l1PXrDTvDXKOo9F_9OQHaF7&pid=Api" 
                height={"10%"} 
                width={"10%"}
                alt="Home button"
            />
        </button>
    );
}
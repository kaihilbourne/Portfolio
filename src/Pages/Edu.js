import '../App.css'
import ucsb from '../images/university-of-california-santa-barbara.png'
import deeplearning from '../images/dlaipng.png'

export default function Edu(){
    return(
        <div className='App'>
            
            <div className='left-side'>
                <div className='bodytext'>
                    <img 
                        className='items'
                        src={ucsb}
                        height={"25%"} 
                        width={"25%"}
                        alt="UCSB logo"
                    />
                    <div className='items'>
                        <p>
                            <span className='underline'> University of California, Santa Barbara</span> 2019-2023, B.S. in Computer Science
                        </p>
                        <p>
                            GPA: 3.71
                        </p>
                        <p>
                            Here, I gained a deep understanding of CS fundamentals, and applied that to many different specialized fields.
                        </p>
                        <p>
                            While studying at UCSB, I also worked as a lifeguard, and participated in regular meetings for a few different hobbies.
                        </p>
                    </div>
                </div>
            </div>
            <div className='left-side'>
                <div className='bodytext'>
                    <img 
                        className='items'
                        src={deeplearning}
                        height={"30%"} 
                        width={"30%"}
                        alt="Deeplearning.ai logo"
                    />
                    <div className='items'>
                        <p>
                            <span className='underline'> Deeplearning.AI</span> 2024, Deep Learning Specialization
                        </p>
                        <p>
                            Seeing the rise of AI and how useful it has become, I decided to brush up my own AI skills.
                        </p>
                        <p>
                            Topics covered include deep learning, transfer learning, managing machine learning projects, and more.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
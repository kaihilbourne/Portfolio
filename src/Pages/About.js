
import '../App.css'
import skiprock from '../images/skiprock.jpg'
import george from '../images/sneorge.jpg'

export default function About(){
    return(
        <div className='App'>
            <div className='left-side'>
                <div className='bodytext'>
                    <img 
                        className='items'
                        src={skiprock}
                        height={"25%"} 
                        width={"25%"}
                        alt="Me skipping rocks"
                    />
                    <div className='items'>
                        <p>
                            I grew up in Portland, Oregon, and I love the outdoors. Particularly, skipping rocks.
                        </p>
                        <p>
                            Swimming and jumping in rivers is one of my favorite things. 
                            I once did a flip off of a 40 foot jump, but I am far too scared to ever try that again.
                        </p>
                        <p>
                            I also love hiking and birdwatching. I think Pinnacles National Park rocks, 
                            not only because a California Condor flew 10 feet over my head.
                        </p>
                        <p>
                            I'm also kind of a nerd. I play Dungeons and Dragons and Magic the Gathering, and I love geeking out about game design and rules.
                        </p>
                        <p>
                            
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className='left-side'>
                <div className='bodytext'>
                    <img 
                        className='items'
                        src={george}
                        height={"25%"} 
                        width={"25%"}
                        alt="George the Snake"
                    />
                    <div className='items'>
                        <p>
                            I have an adorable pet Ball Python named George. He sometimes gets a bath!
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
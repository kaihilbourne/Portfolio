
import '../App.css'
import skiprock from '../images/skiprock.jpg'
import george from '../images/sneorge.jpg'
import swimming from '../images/swimming.JPG'

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
                            I grew up in Portland, Oregon, and I love the outdoors. I particularly enjoy skipping rocks.
                        </p>
                        <p>
                            Swimming and jumping in rivers is one of my favorite things. 
                            I once did a flip off of a 40 foot jump, but I am far too scared to ever try that again.
                        </p>
                        <p>
                            I also love hiking and birdwatching. Pinnacles National Park is the perfect place to do both of those things, 
                            and it is where a California Condor flew just 10 feet above my head.
                        </p>
                        <p>
                            I'm also kind of a nerd. I play the modern game of Magic the Gathering, 
                            and the ancient game of Go, and I love geeking out about game design and rules interactions.
                        </p>
                        <p>
                            I studied Mandarin for four years in high school, and I can still carry a decent conversation.
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className='left-side'>
                <div className='bodytext'>
                    <img 
                        className='items'
                        src={swimming}
                        height={"25%"} 
                        width={"25%"}
                        alt="Me swimming off a waterfall"
                    />
                    <div className='items'>
                        <p>
                            I was a competitive swimmer in high school. My best events were the 100 and 200 free, as well as 100 fly. I set multiple team records.
                            As a senior in high school, I set up a mentorship program to help connect the team's younger swimmers with high school aged swimmers.
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
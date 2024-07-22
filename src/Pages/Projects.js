import '../App.css'
import vr from '../images/utensilevr.jpg'
import buddyup from '../images/buddyup.JPG'

export default function Projects(){
    return(
        <div className='App'>
            <div className='left-side'>
                <div className='bodytext'>
                    <img 
                        className='items'
                        src={vr}
                        height={"25%"} 
                        width={"25%"}
                        alt="Utensile VR App"
                    />
                    <div className='items'>
                        <p>
                            <span className='underline'> Utensile VR</span> 2023-2024, Utensile
                        </p>
                        <p>
                            Utensile VR is an app for product designers, available on Meta Quest headsets. 
                            Users can import .obj files (from CAD programs) to their headsets, and view and interact with their models.
                        </p>
                        <p>
                            This app is designed to be simple and intuitive. Grip buttons let you pick up or stretch objects, 
                            and trigger buttons let you teleport for easy transportation.
                        </p>
                        <p>
                            My favorite accomplishment in developing this app is a mesh optimization algorithm that fixed a nasty bug.
                        </p>
                        <p>
                            Utensile VR is available as a beta release in the <a className='underline' href="https://www.oculus.com/experiences/9603097363095403/release-channels/1684108105344912/?token=rxt2JX5s">App Lab</a> for Quest owners.
                        </p>
                    </div>
                </div>
            </div>
            <div className='left-side'>
                <div className='bodytext'>
                    <img 
                        className='items'
                        src={buddyup}
                        height={"25%"} 
                        width={"25%"}
                        alt="Buddy Up homepage"
                    />
                    <div className='items'>
                        <p>
                            <span className='underline'> Buddy Up</span> 2023, UC Santa Barbara
                        </p>
                        <p>
                            Buddy Up is a social media site built to combat UCSB's housing crisis. I built it with a team of students at UCSB.
                        </p>
                        <p>
                            Students can post their housing needs and build a profile for themselves. 
                            We also included helpful information about UCSB's on campus, and off campus housing, as well as tips about how to secure a spot.
                        </p>
                        <p>
                            We built the app using ReactJS and hosted it on Firebase. 
                            We used a Firestore database to store user profiles and posts.
                        </p>
                        <p>
                            Originally, we had a check that only allowed UCSB email addresses to access the site and post,
                            but luckily for you, Buddy Up did not take off. Because of this, we removed the check, 
                            and now anyone can log on to Buddy Up and experience our web app 
                            right <a className="underline" href="https://t08-buddy-up.web.app/login">here</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
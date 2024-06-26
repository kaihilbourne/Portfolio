import '../App.css'
import vr from '../images/utensilevr.jpg'

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
                        alt="UCSB logo"
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
        </div>
    );
}

import '../App.css';
import './Pages.css'
import vrproject_gif from '../vrproject.gif'
import melookincool from '../melookincool.JPG'
import megraduating from '../megraduating.JPG'
import codingmeme from '../codingmeme.PNG'


export default function Home(){
    return(
      <div className="App">
        
        <div className='left-side'>
          <div className='bodytext'>
          <img 
                  className='items'
                  src={melookincool}
                  height={"45%"} 
                  width={"45%"}
                  alt="Me looking cool in Split, Croatia"
              />
            <div className='header'>
              <p >
                Hi! I'm Kai.
              </p>
              
            </div>
            
          </div>
        </div>
        <div className='left-side'>
          <div className='bodytext'>
            <div className='items'>
              <p>
                I'm a computer science graduate, and I love building things and learning new technologies.
              </p>
              <p>
                I'm looking for a great company where I can work on interesting problems, and start my career.
              </p>
            </div>
            <img 
                  className='items'
                  src={megraduating}
                  height={"25%"} 
                  width={"25%"}
                  alt="Me wearing my cap and gown"
              />
            </div>
        </div>
        <div className='left-side'>
          <div className='bodytext'>
            <img src={vrproject_gif} alt='VR project demonstration' className='items' height={"20%"} width={"20%"}/>
            <div className='items'>
              <p >
                As a VR developer intern, I built an app for product designers to view and show off their designs.
              </p>
              <p>
                I was the only software developer at Utensile, so I learned a lot about building apps from a non-technical spec.
              </p>
            </div>
            
          </div>
        </div>
        <div className='left-side'>
          <div className='bodytext'>

          <div className='items'>
              <p >
                I've worked with a lot of different technologies.
              </p>
              <p>
                I built the VR app using <span className='underline'>Unity</span> and <span className='underline'>C#</span> scripting. I made this website with <span className='underline'>ReactJS</span>. I've worked with <span className='underline'>C++</span> in countless data structures and algorithms courses. I regularly use <span className='underline'>Python</span> for machine learning, as well as other random scripting use-cases.
                I've worked with <span className='underline'>Arduino</span> microprocessors. I organize things with <span className='underline'>spreadsheets</span>, and I've got a good foundation in <span className='underline'>SQL</span> from a databases class.
              </p>
            </div>
            <img 
                  className='items'
                  src={codingmeme}
                  height={"25%"} 
                  width={"25%"}
                  alt="Me wearing my cap and gown"
              />
            </div>
        </div>
        <div className='left-side'>
          <div className='bodytext'>
            <img 
                  className='items'
                  src={megraduating}
                  height={"25%"} 
                  width={"25%"}
                  alt="Me wearing my cap and gown"
            />
            <div className='items'>
              <p>
                I've taken courses in many CS fields, and I haven't found anything I don't like. Here's some of my favorites:
              </p>
              <p>
                Deep Learning, Cryptography, Computer Vision, Data Structures and Algorithms, Database Management Systems
              </p>
            </div>
            </div>
        </div>
      </div>
    );
}
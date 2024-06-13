import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import './App.css';
import Home from './Pages/Home.js';
import Hypnosis from './Pages/Hypnosis.js';
import About from './Pages/About.js';
import Projects from "./Pages/Projects.js";
import Edu from "./Pages/Edu.js";
import Header from "./Header.js";
import Footer from "./Footer.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hypnosis" element={<Hypnosis/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/education" element={<Edu/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

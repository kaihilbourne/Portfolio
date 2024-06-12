import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Hypnosis from './Hypnosis.js';
import Header from "./Header.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hypnosis" element={<Hypnosis/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

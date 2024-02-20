import './App.css';
import Home from "./Pages/Home"
import Navbar from "./Layout/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';

function App() {
  return (
    <>  
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>}></Route>
        <Route path="/skills" element={<><Navbar /><Skills /></>}></Route>
        <Route path='/projects'  element={<><Navbar /><Projects /></>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

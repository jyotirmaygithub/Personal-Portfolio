import './App.css';
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from  "./Layout/Navbar"
import Footer  from './Layout/Footer';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

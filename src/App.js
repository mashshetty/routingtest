import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error";
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      
      <Router>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<Error />}/>
        </Routes>
        
      </Router>
  
      
    
     
    </div>
  );
}

export default App;

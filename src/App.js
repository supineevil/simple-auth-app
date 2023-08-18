import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Landing from "./components/landing";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App flex">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

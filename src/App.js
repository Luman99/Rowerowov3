import './App.css';
import Navbar from "./Navbar";
import AddSpell from "./AddSpell";
import ViewSpell from "./ViewSpell";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
function App() {
  return (
    <div>
        aaaaaa
      <Router>
        <Navbar />
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {db} from './firebase'
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Favorites from "./Pages/Favorites/Favorites";

function App() {
  // console.log(db);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route  path="/Login" element={<Login />} />
        <Route  path="/Favorites" element={<Favorites />} />
        <Route  path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

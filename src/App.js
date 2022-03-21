import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Others/Appointment/Appointment/Appointment";
import Login from "./Pages/Others/Login/Login/Login";
import Register from "./Pages/Others/Login/Register/Register";
import NotFound from "./Pages/Others/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/home' element={<Home />} />

          <Route path='/appointment' element={<Appointment />} />

          <Route path='/login' element={<Login />} />

          <Route path='/register' element={<Register />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

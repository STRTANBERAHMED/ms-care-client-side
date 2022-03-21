import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Others/Appointment/Appointment/Appointment";
import NotFound from "./Pages/Others/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/home' element={<Home />} />

          <Route path='/appointment' element={<Appointment />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

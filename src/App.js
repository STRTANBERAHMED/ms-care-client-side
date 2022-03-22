import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Others/Appointment/Appointment/Appointment";
import Login from "./Pages/Others/Login/Login/Login";
import PrivateRoute from "./Pages/Others/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Others/Login/Register/Register";
import NotFound from "./Pages/Others/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

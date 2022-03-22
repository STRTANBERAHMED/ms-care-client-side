import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

            {/* <Route path='/' element={<Home />} />

            <Route path='/home' element={<Home />} />

            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />

            <Route path='*' element={<NotFound />} /> */}
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

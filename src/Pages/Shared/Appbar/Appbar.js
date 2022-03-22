import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Appbar.css';

const Appbar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="bg" bg="none" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home"><h1 className="fs-2 fw-bold"><span className="logo">MS</span>CARE</h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className="link fs-5 fw-bold" to="/home">Home</NavLink>
                        <NavLink className="link fs-5 fw-bold" to="/appointment">Appointment</NavLink>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button>
                            :
                            <NavLink className="link fs-5 fw-bold" to="/login">Login</NavLink>}
                        <Navbar.Text>
                            <a href="#login">  {user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Appbar;
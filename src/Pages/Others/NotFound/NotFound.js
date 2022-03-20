import React from 'react';
import { NavLink } from 'react-router-dom';
import notfound from '../../../images/404.jpg';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className='my-5'>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <NavLink to="/"><Button variant="primary">Go Back</Button></NavLink>
        </div>
    );
};

export default NotFound;
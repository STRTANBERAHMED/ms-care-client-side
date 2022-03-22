import React, { useState } from 'react';
import Appbar from '../../Pages/Shared/Appbar/Appbar';
import Calender from '../../Pages/Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';
import './Dashboard.css';


const Dashboard = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [date, setDate] = React.useState(new Date())

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    return (
        <div>
            <Appbar></Appbar>
            <div className="admin-container">
                <div className="dashboard">
                    <div className="admin-box">
                        <div className="row admin-container">
                            <div className="col-md-3">
                                <div className="admin-area p-1">
                                    <h2 className='mt-5'>Dashboard</h2>
                                    <div className="all-menu mt-5">
                                        <li
                                            onClick={() => handleDrawerToggle("addService")}
                                            className="admin-menu p-2">Appointments</li>
                                        <li
                                            onClick={() => handleDrawerToggle("makeAdmin")}
                                            className="admin-menu p-2">Make Admin</li>
                                        <li
                                            onClick={() => handleDrawerToggle("services")}
                                            className="admin-menu p-2">Manage Service</li>
                                        <li
                                            onClick={() => handleDrawerToggle("ManageOrder")} className="admin-menu p-2">Manage Orders</li>
                                        <li
                                            onClick={() => handleDrawerToggle("status")} className="admin-menu p-2">Orders Status</li>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <Calender
                                    date={date}
                                    setDate={setDate}
                                ></Calender>
                            </div>
                            <div className="col-md-5 text-center">
                                <Appointments></Appointments>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="container">
                    <div className=" row justify-content-center">
                        <div className="col-md-5">
                            <div>
                                <h3 className="fs-3 fw-bold  "><span className="logo">MS</span>CARE</h3>
                                <p >The best hospital in town with world class doctors and modern machineries.</p>
                            </div>
                            <div className="social-link">

                            </div>
                            <div>
                                <small >copyright &copy;MSCARE</small>
                            </div>
                        </div>
                        {/* our services */}
                        <div className=" services text-left col-md-2">

                            <ul>
                                <h5>Company</h5>
                                <li>
                                    <a href="">About us</a>

                                </li>
                                <li>
                                    <a href="">Branches</a>
                                </li>
                                <li>
                                    <a href="">Seasonal Offers</a>
                                </li>
                                <li>
                                    <a href="">Premium Customers</a>
                                </li>
                            </ul>


                        </div>

                        {/* our services */}
                        <div className=" services text-left col-md-2">

                            <ul>
                                <h5>Services</h5>
                                <li>
                                    <a href="">24/7 Open</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                                <li>
                                    <a href="">Privacy policy</a>
                                </li>
                            </ul>
                        </div>

                        {/* our services */}

                        <div className=" services text-left col-md-3">

                            <ul>
                                <h5>Your Account</h5>
                                <li>
                                    <a href="">Your Appointments</a>

                                </li>
                                <li>
                                    <a href="">Your Ratings</a>
                                </li>
                                <li>
                                    <a href="">Payment</a>
                                </li>
                                <li>
                                    <a href="">Privacy policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
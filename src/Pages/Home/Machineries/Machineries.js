import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from '../../../images/img7.jpg';
import img2 from '../../../images/img8.jpg';
import img3 from '../../../images/img9.jpg';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Machineries.css';

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Machineries = () => {
    return (
        <div className='carousel'>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 6500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className='row p-4 align-items-center'>
                        <div className='carousel-info col-md-6'>
                            <h1 className='fw-bold fst-italic'>MRI Machine</h1>
                            <h6>world best checkup</h6>
                            <div className='price'>
                                <p>under reasonable prices</p>
                            </div>
                            <NavLink to="/appointment"><Button variant="light">Book Appointment</Button></NavLink>
                        </div>
                        <div className="col-md-6">
                            <img className='carousel-img rounded mx-auto d-block' src={img1} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='row p-4 align-items-center'>
                        <div className='carousel-info col-md-6'>
                            <h1 className='fw-bold fst-italic'>Operation Theatre</h1>
                            <h6>world best Treatment</h6>
                            <div className='price'>
                                <p>under reasonable prices</p>
                            </div>
                            <NavLink to="/appointment"><Button variant="light">Book Appointment</Button></NavLink>
                        </div>
                        <div className="col-md-6">
                            <img className='carousel-img' src={img2} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='row p-4 align-items-center'>
                        <div className='carousel-info col-md-6'>
                            <h1 className='fw-bold fst-italic'>Dentist Room</h1>
                            <h6>world best Dental checkup</h6>
                            <div className='price'>
                                <p>under reasonable prices</p>
                            </div>
                            <NavLink to="/appointment"><Button variant="light">Book Appointment</Button></NavLink>
                        </div>
                        <div className="col-md-6">
                            <img className='carousel-img' src={img3} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Machineries;
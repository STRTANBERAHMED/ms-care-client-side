import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from '../../../images/img3.jpg';
import './Machineries.css';

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Machineries = () => {
    return (
        <div className='carousel container'>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 6500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className='row p-4 align-items-center'>
                        <div className='carousel-info col-md-6'>
                            <h1 className='fw-bold fst-italic'>Harley Davidson T Shirt</h1>
                            <h6>under reasonable prices</h6>
                            <div className='price'>
                                <p>FROM</p>
                                <h1>$73</h1>
                            </div>
                            <button className='buying-btn'>Start buying</button>
                        </div>
                        <div className="col-md-6">
                            <img className='carousel-img rounded mx-auto d-block' src={img1} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='row p-4 align-items-center'>
                        <div className='carousel-info col-md-6'>
                            <h1 className='fw-bold fst-italic'>Water Proof Winter Jacket</h1>
                            <h6>under reasonable prices</h6>
                            <div className='price'>
                                <p>FROM</p>
                                <h1>$150</h1>
                            </div>
                            <button className='buying-btn'>Start buying</button>
                        </div>
                        <div className="col-md-6">
                            <img className='carousel-img' src={img1} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='row p-4 align-items-center'>
                        <div className='carousel-info col-md-6'>
                            <h1 className='fw-bold fst-italic'>Dorji Bari Jins Jacket</h1>
                            <h6>under reasonable prices</h6>
                            <div className='price'>
                                <p>FROM</p>
                                <h1>$100</h1>
                            </div>
                            <button className='buying-btn'>Start buying</button>
                        </div>
                        <div className="col-md-6">
                            <img className='carousel-img' src={img1} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Machineries;
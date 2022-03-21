import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMedical, faStethoscope, faMicroscope, faUser, faHeart, faHand } from '@fortawesome/free-solid-svg-icons';
import './Services.css';


const Services = () => {

    // font awesome
    const ambulance =
        <FontAwesomeIcon icon={faTruckMedical} />
    const stethoscope = <FontAwesomeIcon icon={faStethoscope} />
    const microscope = <FontAwesomeIcon icon={faMicroscope} />
    const children = <FontAwesomeIcon icon={faUser} />
    const heart = <FontAwesomeIcon icon={faHeart} />
    const hand = <FontAwesomeIcon icon={faHand} />

    return (
        <div className='container services'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col count">
                    <div class="card service">
                        <h1 className='item mx-auto d-block'>{ambulance}</h1>
                        <div class="card-body">
                            <h5 class="card-title">Fast Ambulance</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col count">
                    <div class="card service">
                        <h1 className='item mx-auto d-block'>{stethoscope}</h1>
                        <div class="card-body">
                            <h5 class="card-title">Dental Specialist</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col count">
                    <div class="card service">
                        <h1 className='item mx-auto d-block'>{microscope}</h1>
                        <div class="card-body">
                            <h5 class="card-title">Modern Laboratory</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col count">
                    <div class="card service">
                        <h1 className='item mx-auto d-block'>{children}</h1>
                        <div class="card-body">
                            <h5 class="card-title">Children Center</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col count">
                    <div class="card service">
                        <h1 className='item mx-auto d-block'>{heart}</h1>
                        <div class="card-body">
                            <h5 class="card-title">Heart Surgery</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col count">
                    <div class="card service">
                        <h1 className='item mx-auto d-block'>{hand}</h1>
                        <div class="card-body">
                            <h5 class="card-title">Care Advice</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
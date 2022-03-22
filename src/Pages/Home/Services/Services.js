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
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col count">
                    <div className="card service">
                        <h1 className='item mx-auto d-block'>{ambulance}</h1>
                        <div className="card-body">
                            <h5 className="card-title">Fast Ambulance</h5>
                            <p className="card-text">We Specialist In All Driver Medicals. Easy Access Locations Near You. Book Online Today.</p>
                        </div>
                    </div>
                </div>
                <div className="col count">
                    <div className="card service">
                        <h1 className='item mx-auto d-block'>{stethoscope}</h1>
                        <div className="card-body">
                            <h5 className="card-title">Dental Specialist</h5>
                            <p className="card-text">Dr. Shihabur Rahman is a Specialist Dentist With Highest Professional</p>
                        </div>
                    </div>
                </div>
                <div className="col count">
                    <div className="card service">
                        <h1 className='item mx-auto d-block'>{microscope}</h1>
                        <div className="card-body">
                            <h5 className="card-title">Modern Laboratory</h5>
                            <p className="card-text">We undertake our quest of improving the quality of human life with enthusiasm</p>
                        </div>
                    </div>
                </div>
                <div className="col count">
                    <div className="card service">
                        <h1 className='item mx-auto d-block'>{children}</h1>
                        <div className="card-body">
                            <h5 className="card-title">Children Center</h5>
                            <p className="card-text">The Children's Center stands for family, for healing and for hope. We practice integrated,</p>
                        </div>
                    </div>
                </div>
                <div className="col count">
                    <div className="card service">
                        <h1 className='item mx-auto d-block'>{heart}</h1>
                        <div className="card-body">
                            <h5 className="card-title">Heart Surgery</h5>
                            <p className="card-text">Heart surgery is done to correct problems with the heart. Many heart surgeries</p>
                        </div>
                    </div>
                </div>
                <div className="col count">
                    <div className="card service">
                        <h1 className='item mx-auto d-block'>{hand}</h1>
                        <div className="card-body">
                            <h5 className="card-title">Care Advice</h5>
                            <p className="card-text">The Care Advice Line offers a personalised information and advice service for</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
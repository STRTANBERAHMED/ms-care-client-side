import img1 from '../../../images/img4.png';
import img2 from '../../../images/img5.png';
import img3 from '../../../images/img6.png';
import React from 'react';

const Doctors = () => {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                <div className="col">
                    <div className="card h-100">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Cardiologist</h5>
                            <h1>Dr. Andre Robatson</h1>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Neurologist</h5>
                            <h1>Dr. Shane Watson</h1>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dentist</h5>
                            <h1>Dr. Abdullah Arif</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
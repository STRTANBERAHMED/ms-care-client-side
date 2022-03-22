import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <div>
            <div className="m-5">
                <div className="text-center">
                    <h4>Available Appointments on {date.toDateString()}</h4>
                    {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
                    {
                        bookings.map(booking => <Booking
                            key={booking.id}
                            booking={booking}
                            date={date}
                            setBookingSuccess={setBookingSuccess}
                        >
                        </Booking>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;
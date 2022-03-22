import React from 'react';
import { Button } from 'react-bootstrap';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{time}</p>
                        <p className="card-text">{space} SPACES AVAILABLE</p>
                        <Button onClick={handleBookingOpen} variant="primary">BOOK APPOINTMENT</Button>
                    </div>
                </div>
            </div>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;
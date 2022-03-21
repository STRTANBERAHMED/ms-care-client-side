import React from 'react';
import Appbar from '../../../Shared/Appbar/Appbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {

    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Appbar></Appbar>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;
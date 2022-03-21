import { Container, Grid } from '@mui/material';
import Calendar from '../../../Shared/Calender/Calender';
import chair from '../../../../images/img2.png';
import React from 'react';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;
import React from 'react';
import Appbar from '../../Shared/Appbar/Appbar';
import Footer from '../../Shared/Footer/Footer';
import Achievements from '../Achievements/Achievements';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Machineries from '../Machineries/Machineries';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Banner></Banner>
            <Doctors></Doctors>
            <Machineries></Machineries>
            <Services></Services>
            <Achievements></Achievements>
            <Footer></Footer>
        </div>
    );
};

export default Home;
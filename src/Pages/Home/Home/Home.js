import React from 'react';
import Appbar from '../../Shared/Appbar/Appbar';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Machineries from '../Machineries/Machineries';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Banner></Banner>
            <Machineries></Machineries>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
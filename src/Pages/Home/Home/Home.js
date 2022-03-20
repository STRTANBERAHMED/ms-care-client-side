import React from 'react';
import Appbar from '../../Shared/Appbar/Appbar';
import Footer from '../../Shared/Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
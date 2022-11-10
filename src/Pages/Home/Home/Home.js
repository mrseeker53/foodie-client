import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Slider from '../Slider/Slider';
import MenuItems from './MenuItems';

const Home = () => {
    // Dynamic title using hooks
    useTitle('Home');

    return (
        <div>
            <Slider></Slider>
            <MenuItems></MenuItems>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;
import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Slider from '../Slider/Slider';
import MenuItems from './MenuItems';

const Home = () => {
    // Dynamic title using hooks
    useTitle('Home');

    return (
        <div>
            <Slider></Slider>
            <MenuItems></MenuItems>
        </div>
    );
};

export default Home;
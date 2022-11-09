import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Services from '../Menu/Menu';
import Slider from '../Slider/Slider';

const Home = () => {
    // Dynamic title using hooks
    useTitle('Home');

    return (
        <div>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;
import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Menu from '../Menu/Menu';
import Slider from '../Slider/Slider';

const Home = () => {
    // Dynamic title using hooks
    useTitle('Home');

    return (
        <div>
            <Slider></Slider>
            <Menu></Menu>
        </div>
    );
};

export default Home;
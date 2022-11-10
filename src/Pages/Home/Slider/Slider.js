import React, { useEffect, useState } from 'react';
import SliderItem from './SliderItem';

const Slider = () => {
    const [slider, setSlider] = useState([]);

    // Load data from server
    useEffect(() => {
        fetch('https://foodie-server-one.vercel.app/slider')
            .then(res => res.json())
            .then(data => setSlider(data));
    }, []);

    return (
        <div className="carousel w-full py-10">
            {
                slider.map(slide => <SliderItem
                    key={slide._id}
                    slide={slide}
                ></SliderItem>)
            }
        </div>
    );
};

export default Slider;
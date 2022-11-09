import React from 'react';
import useTitle from '../../../hooks/useTitle';

const About = () => {
    // Dynamic title using hooks
    useTitle('About');

    return (
        <div>
            <h2>About</h2>
        </div>
    );
};

export default About;
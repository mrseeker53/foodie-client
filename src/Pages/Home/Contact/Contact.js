import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Contact = () => {
    // Dynamic title using hooks
    useTitle('Contact');

    return (
        <div>
            <h2>Contact</h2>
        </div>
    );
};

export default Contact;
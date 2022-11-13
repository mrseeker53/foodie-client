import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    // Dynamic title using hooks
    useTitle('My Review');

    return (
        <div>
            <h2>My review</h2>
        </div>
    );
};

export default MyReview;
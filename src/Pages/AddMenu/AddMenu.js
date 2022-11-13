import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddMenu = () => {
    // Dynamic title using hooks
    useTitle('Add Menu');

    return (
        <div>
            <h2>Add menu</h2>
        </div>
    );
};

export default AddMenu;
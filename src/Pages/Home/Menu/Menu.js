import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Menu = () => {
    // Dynamic title using hooks
    useTitle('Menu');

    return (
        <div>
            <h2>Menu</h2>
        </div>
    );
};

export default Menu;
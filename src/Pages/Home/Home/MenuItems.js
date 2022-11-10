import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuCard from '../../Menu/MenuCard';

const MenuItems = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('https://foodie-server-one.vercel.app/')
            .then(res => res.json())
            .then(data => setMenuItems(data))
    }, []);

    return (
        <div className='my-20'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    menuItems.map(menu => <MenuCard
                        key={menu._id}
                        menu={menu}
                    ></MenuCard>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to="/menu">
                    <button className='btn btn-primary'>See More</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuItems;
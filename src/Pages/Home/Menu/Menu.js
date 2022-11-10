import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import MenuItem from './MenuItem';

const Menu = () => {
    // Dynamic title using hooks
    useTitle('Menu');

    const [loader, setLoader] = useState(true);
    const [menus, setMenus] = useState([]);

    // Load menu data from server
    useEffect(() => {
        fetch('https://foodie-server-one.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setMenus(data);
                if (data.length > 0)
                    setLoader(false);
            });
    }, []);

    return (
        <div className='my-20'>

            {
                (loader) ?
                    <div className='text-center'>
                        <button className="btn loading bg-primary text-white">loading</button>
                    </div>
                    :
                    <>
                        <div className='text-center mb-10'>
                            <h2 className="text-5xl font-semibold text-orange-600">Menu Items</h2>
                        </div>
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                menus.map(menu => <MenuItem
                                    key={menu._id}
                                    menu={menu}
                                ></MenuItem>)
                            }
                        </div>
                    </>
            }

        </div>
    );
};

export default Menu;
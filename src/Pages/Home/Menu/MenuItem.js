import React from 'react';
import { Link } from 'react-router-dom';

// Destructure menu as object
const MenuItem = ({ menu }) => {

    // Destructuring menu
    const { _id, img, title, price, rating, description } = menu;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl font-semibold'>Price: ${price}</p>
                <p className='text-xl'>Rating: {rating}</p>
                <p className='text-lg'>{description}</p>
                <div className="card-actions justify-end mt-8">
                    <Link to={`/menu/${_id}`}>
                        <button className="btn btn-outline btn-primary text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const MenuDetails = () => {
    const { img, title, price, rating, description } = useLoaderData();

    return (
        <div className='my-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2">
                {/* Photo viewer */}
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img src={img} alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl font-semibold'>Price: ${price}</p>
                    <p className='text-xl'>Rating: {rating}</p>
                    <p className='text-lg'>{description}</p>
                </div>
            </div>
            <div>Review</div>
        </div>
    );
};

export default MenuDetails;
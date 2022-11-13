import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MenuDetails = () => {
    const { img, title, price, rating, description } = useLoaderData();

    const { user } = useContext(AuthContext);

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
            <div>
                {
                    user?.email ?
                        <div>
                            <div className="form-control mt-10">
                                <label className="label">
                                    <span className="label-text text-lg">Review</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-44 w-1/2 my-4" placeholder="Leave your feedback"></textarea>
                            </div>
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                        :
                        <p className='mt-10 text-2xl'>Please login to give a review <Link to="/login">
                            <button className='btn btn-primary px-8'>Log In</button>
                        </Link>
                        </p>

                }
            </div>
        </div>
    );
};

export default MenuDetails;
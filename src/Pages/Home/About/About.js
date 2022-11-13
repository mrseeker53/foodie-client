import React from 'react';
import useTitle from '../../../hooks/useTitle';
import img from '../../../assets/images/others/about.png';

const About = () => {
    // Dynamic title using hooks
    useTitle('About');

    return (
        <div>
            <h1 className="text-5xl text-center font-bold mt-20">About</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body mt-10">
                    <p className='text-lg'>As a chef, I feel grateful for the opportunity to marry my passion for food traditions from around the globe with the magic that happens among family, friends, and perfect strangers around the table.
                        <br />
                        I specialize in creating delicious meals for parties, celebrations, and special gatherings of all kinds. From intimate dinners for two to mid-sized celebrations, I work with you to create a unique experience that meets your personalized needs, including accommodating food preferences, allergies, and dietary restrictions. <br />
                        <br />
                        All food is prepared on site with ingredients for direct reimbursement. Whether you are planning a special meal in your home or vacation accommodations, I would love to work with you to make something special happen.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import useTitle from '../../hooks/useTitle';
import img from '../../assets/images/login/login.png';
import { Link } from 'react-router-dom';

const Login = () => {
    // Dynamic title using hooks
    useTitle('Log In');

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/signup" className="label-text-alt link link-hover text-primary-focus">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Log In" />
                        </div>
                    </form>
                    {/* Sign Up link */}
                    <p className='text-center'>Create an account? <Link className='text-primary link-hover font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
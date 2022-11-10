import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import img from '../../assets/images/login/login.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    // Dynamic title using hooks
    useTitle('Log In');

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    // Declare event handler
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // Get JWT token
                fetch('https://foodie-server-one.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true });
                        form.reset();
                    });

            })
            .catch(error => console.log(error));
    }

    // Declare provider handler
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                    <hr />
                    <div className="form-control my-6 mx-8">
                        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary'> <FaGoogle className='mr-2'></FaGoogle> Log In with Google</button>
                    </div>
                    {/* Sign Up link */}
                    <p className='text-center'>Create an account? <Link className='text-primary link-hover font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
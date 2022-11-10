import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems =
        <>
            <li className='font-semibold'>
                <Link to='/'>Home</Link>
            </li>
            <li className='font-semibold'>
                <Link to='/about'>About</Link>
            </li>
            <li className='font-semibold'>
                <Link to='/menu'>Menu</Link>
            </li>
            <li className='font-semibold'>
                <Link to='/contact'>Contact</Link>
            </li>
            <li className='font-semibold'>
                <Link to='/blog'>Blog</Link>
            </li>
        </>



    return (
        <div className="navbar bg-base-100 pt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <span className='text-primary'>{user?.displayName}</span>
                            <Link className='ml-2' to='/login'>
                                <button onClick={handleLogOut} className='btn btn-outline btn-primary px-5'>Log Out</button>
                            </Link>
                        </>
                        :
                        <Link to='/login'>
                            <button className='btn btn-outline btn-primary px-5'>Log In</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from '../../../assets/images/logo.png';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
            <div>
                <img src={logo} alt="" />
                <p>Copyright © 2022 <br /> All rights reserved</p>
            </div>
            <div>
                <span className="footer-title">Connect</span>
                <a href="/" className="link link-hover flex">
                    <FaFacebook className='mr-2 mt-0.5' /> Facebook
                </a>
                <a href="/" className="link link-hover flex">
                    <FaInstagram className='mr-2 mt-0.5' /> Instagram
                </a>
                <a href="/" className="link link-hover flex">
                    <FaYoutube className='mr-2 mt-0.5' /> Youtube
                </a>
                <a href="/" className="link link-hover flex">
                    <FaWhatsapp className='mr-2 mt-0.5' /> Whatsapp
                </a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/about" className="link link-hover">About</a>
                <a href="/services" className="link link-hover">Services</a>
                <a href="/contact" className="link link-hover">Contact</a>
                <a href="/blog" className="link link-hover">Blog</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/contact" className="link link-hover">Terms of use</a>
                <a href="/contact" className="link link-hover">Privacy policy</a>
                <a href="/contact" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
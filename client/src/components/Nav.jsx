import React, { useState } from 'react';
import Logo from '../assets/images/logo2.jpg'
import { Link, useLocation } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaBookMedical } from "react-icons/fa";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const pathname = location.pathname;

    const getFriendlyName = (path) => {
        switch (path) {
            case '/forms':
                return 'Forms';
            case '/home':
                return 'Home';
            // Add more cases as needed
            case '/contact':
                return 'Contact';
            default:
                return 'Home'; // Default case
        }
    };

    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between p-8'>
                <img className='w-[200px]' src={Logo} alt="Logo" />
                <div className='space-y-4 flex flex-col justify-center'>
                    <h2 className='text-2xl text-ckdGreen'>(216) 896-0639</h2>
                    <Link to={'/forms'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker rounded-2xl p-3 text-white'>Download Forms</button></Link>
                </div>
            </div>
            <div className='bg-slate-100 px-8 py-2'>
                {/* Hamburger Icon for Small Screens */}
                <div className="md:hidden flex items-center justify-center space-x-4 md:space-x-0">
                    <button onClick={() => setIsOpen(!isOpen)} >
                        <IoMenu />
                    </button>
                    <p className='text-2xl text-ckdGreen'>{getFriendlyName(pathname)}</p>
                </div>
                {/* Navigation Links */}
                <div className={`${isOpen ? 'block' : 'hidden'} flex md:flex-row md:justify-between md:space-x-4 flex-col space-y-4 md:space-y-0`}>
                    <Link to={'/home'} className='text-ckdGreen text-xl'>
                        <div className='flex items-center space-x-2'>
                            <AiFillHome/>
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link className='text-ckdGreen text-xl'>
                        <div className='flex items-center space-x-2'>
                            <FaUserDoctor/>
                            <p>About The Practice</p>
                        </div>
                    </Link>
                    <Link className='text-ckdGreen text-xl'>
                        <div className='flex items-center space-x-2'>
                            <GiArchiveResearch/>
                            <p>Research</p>
                        </div>
                    </Link>
                    <Link className='text-ckdGreen text-xl'>
                        <div className='flex items-center space-x-2'>
                            <FaBookMedical/>
                            <p>Topics</p>
                        </div>
                    </Link>
                    <Link to={'/forms'} className='text-ckdGreen text-xl'>
                        <div className='flex items-center space-x-2'>
                            <FaClipboardList/>
                            <p>Forms</p>
                        </div>
                    </Link>
                    <Link to={'/contact'} className='text-ckdGreen text-xl'>
                        <div className='flex items-center space-x-2'>
                            <FaPhone/>
                            <p>Contact</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
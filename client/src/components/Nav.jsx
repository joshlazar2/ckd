import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/logo2.jpg'
import { Link, useLocation } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaBookMedical } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";
import { FaCalculator } from "react-icons/fa6";
import { FaDna } from "react-icons/fa6";


const Nav = () => {

    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        // Function to check if the window is a mobile device
        const isMobile = window.innerWidth <= 768;
        setIsOpen(!isMobile);

        // Event listener for window resize
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            setIsOpen(!isMobile);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getFriendlyName = (path) => {
        switch (path) {
            case '/forms':
                return { name: 'Forms', icon: <FaClipboardList /> };
            case '/':
                return { name: 'Home', icon: <AiFillHome /> };
            // Add more cases as needed
            case '/contact':
                return { name: 'Contact', icon: <FaPhone /> };
            case '/about':
                return { name: 'About', icon: <FaUserDoctor /> };
            case '/kidneyDisease':
                return { name: 'Kidney Disease', icon: <GiKidneys /> };
            case '/riskCalculators':
                return { name: 'Risk Calculators', icon: <FaCalculator /> };
            case '/geneLookup':
                return { name: 'Gene Lookup', icon: <FaDna /> };
            default:
                return { name: 'Home', icon: <AiFillHome /> }; // Default case
        }
    };

    const closeMenu = () => {
        setIsOpen(false)
    }

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
                    <div className="flex items-center space-x-2">
                        <p className='text-2xl text-ckdGreen'>{getFriendlyName(pathname).icon}</p>
                        <p className='text-2xl text-ckdGreen'>{getFriendlyName(pathname).name}</p>
                    </div>
                </div>
                {/* Navigation Links */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:flex-row md:justify-between md:space-x-4 flex-col space-y-4 md:space-y-0`}>
                    <Link to={'/'} className='text-ckdGreen text-xl' onClick={closeMenu}>
                        <div className='flex items-center space-x-2'>
                            <AiFillHome />
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link to={'/about'} className='text-ckdGreen text-xl' onClick={closeMenu}>
                        <div className='flex items-center space-x-2'>
                            <FaUserDoctor />
                            <p>About The Practice</p>
                        </div>
                    </Link>
                    <Link to={'/geneLookup'} className='text-ckdGreen text-xl' onClick={closeMenu}>
                        <div className='flex items-center space-x-2'>
                            <FaDna />
                            <p>Gene Lookup</p>
                        </div>
                    </Link>
                    <Link to={'/kidneyDisease'} className='text-ckdGreen text-xl' onClick={closeMenu}>
                        <div className='flex items-center space-x-2'>
                            <GiKidneys />
                            <p>Kidney Disease</p>
                        </div>
                    </Link>
                    <Link to={'/riskCalculators'} className='text-ckdGreen text-xl' onClick={closeMenu}>
                        <div className='flex items-center space-x-2'>
                            <FaCalculator />
                            <p>Risk Calculators</p>
                        </div>
                    </Link>
                    <Link to={'/forms'} className='text-ckdGreen text-xl' onClick={closeMenu}>
                        <div className='flex items-center space-x-2'>
                            <FaClipboardList />
                            <p>Forms</p>
                        </div>
                    </Link>
                    <Link to={'/contact'} className='text-ckdGreen text-xl' onClick={closeMenu}>
                        <div className='flex items-center space-x-2'>
                            <FaPhone />
                            <p>Contact</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
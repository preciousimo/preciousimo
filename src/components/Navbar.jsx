import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";

function Navbar({ open, setOpen }) {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="bg-dark h-14 py-2 lg:h-10 lg:py-0 text-info">
            <div className="flex flex-row p-2 font-semibold justify-between items-center">
                <Link to="/">
                    <div className="logo">Precious <span className="text-highlight">Imoniakemu</span></div>
                </Link>
                <nav className="hidden md:block z-50">
                    <ul className="flex flex-row w-1/3 justify-between">
                        <li className={`mx-2 ${currentPath === '/' ? 'text-highlight' : ''} mx-2`}><Link to="/">Home</Link></li>
                        <li className={`mx-2 ${currentPath === '/about' ? 'text-highlight' : ''} mx-2`}><Link to="/about">About</Link></li>
                        <li className={`mx-2 ${currentPath === '/projects' ? 'text-highlight' : ''} mx-2`}><Link to="/projects">Projects</Link></li>
                        <li className={`mx-2 ${currentPath === '/contact' ? 'text-highlight' : ''} mx-2`}><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <svg onClick={() => setOpen(!open)} className="block h-6 w-6 md:hidden cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className={`${open ? '' : 'hidden'} md:hidden bg-dark`}>
                <div className="pt-2 pb-3 space-y-1 mb-3 z-10">
                    <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${currentPath === '/' ? 'text-highlight' : 'text-info hover:bg-gray-700 hover:text-white'}`} aria-current="page">Home</Link>
                    <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${currentPath === '/about' ? 'text-highlight' : 'text-info hover:bg-gray-700 hover:text-white'}`}>About</Link>
                    <Link to="/projects" className={`block px-3 py-2 rounded-md text-base font-medium ${currentPath === '/projects' ? 'text-highlight' : 'text-info hover:bg-gray-700 hover:text-white'}`}>Projects</Link>
                    <Link to="/contact" className={`block px-3 py-2 rounded-md text-base font-medium ${currentPath === '/contact' ? 'text-highlight' : 'text-info hover:bg-gray-700 hover:text-white'}`}>Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

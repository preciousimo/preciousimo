import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ open, setOpen }) {
    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath);

    const [mobileActive, setMobileActive] = useState(null);

    const handleMobileClick = (index) => {
        if (mobileActive === index) {
            setMobileActive(null);
        } else {
            setMobileActive(index);
        }
    };

    const active = "bg-gray-900 text-highlight font-bold block px-3 py-2 rounded-md text-base";
    const inactive = "text-info hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";

    return (
        <div className="bg-dark h-14 py-2 lg:h-10 lg:py-0 text-info">
            <div className="flex flex-row p-2 font-semibold justify-between items-center">
                <Link to="/">
                    <div className="logo">Precious <span className="text-highlight">Imoniakemu</span></div>
                </Link>
                <nav className="hidden md:block z-50">
                    <ul className="flex flex-row w-1/3 justify-between">
                        <li className={`${currentPath === '/' ? 'text-highlight' : ''} mx-2`}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={`${currentPath === '/about' ? 'text-highlight' : ''} mx-2`}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={`${currentPath === '/projects' ? 'text-highlight' : ''} mx-2`}>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className={`${currentPath === '/contact' ? 'text-highlight' : ''} mx-2`}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <svg
                    onClick={() => setOpen(!open)}
                    className="block h-6 w-6 md:hidden cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className={`${open ? '' : 'hidden'} md:hidden bg-dark`}>
                <div className="pt-2 pb-3 space-y-1 mb-30 z-10">
                    <Link
                        to="/"
                        className={`${currentPath === '/' ? active : inactive}`}
                        aria-current="page"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`${currentPath === '/about' ? active : inactive}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/projects"
                        className={`${currentPath === '/projects' ? active : inactive}`}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className={`${currentPath === '/contact' ? active : inactive}`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

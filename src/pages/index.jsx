import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; // Import Framer Motion
import { useMediaQuery } from 'react-responsive';

import myImage from "../assets/precious.jpeg";
import Navbar from '../components/Navbar';

function HomePage() {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const staggerVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = 'auto'
        };
    }, []);

    return (
        <>
            <div className="overflow-auto h-screen bg-primary font-mono">
                <Navbar open={open} setOpen={setOpen} />
                <div className="flex flex-col-reverse md:flex-row md:items-center">
                    <div className={`px-12 py-24 ${open ? 'mt-52' : ''} text-info flex md:w-screen z-1 lg:w-3/5 flex-col z-0 lg:px-24 md:p-48
                     ${isMobile ? 'w-full' : 'max-w-screen-lg'}`}>
                        <motion.h4
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-base font-semibold  md:text-2xl"
                        >
                            Hi there,
                        </motion.h4>
                        <motion.h1
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-xl mb-2 font-bold md:text-5xl md:my-4"
                        >
                            I'm <span className="text-highlight">Precious Imoniakemu</span>
                        </motion.h1>
                        <motion.h2
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-lg mb-8 font-semibold text-muted md:text-3xl md:mb-16"
                        >
                            A Software Developer
                        </motion.h2>
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.8 }}
                            className="flex flex-col md:flex-row justify-between w-screen md:justify-start"
                        >
                            <Link to="/contact" className="flex flex-col justify-center bg-highlight mb-3 p-2 font-bold rounded text-center text-light w-1/2 md:mr-2 md:w-1/5">Get In Touch</Link>
                            <a href="/precious_imoniakemu.pdf" target="_blank" className="border-highlight mb-3 border-2 p-2 rounded w-1/2 text-highlight font-bold hover:bg-highlight hover:text-light text-center lg:ml-2 md:w-1/5">Download Resume</a>
                        </motion.div>
                    </div>

                    {/* Only render the image on larger screens */}
                    {isMobile ? null : (
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.0 }}
                            className={`2xl:pl-20 md:hidden lg:block`}
                            style={{
                                position: 'absolute',
                                top: '150px',
                                right: '150px',
                                borderRadius: '50%'
                            }}
                        >
                            <img
                                src={myImage}
                                alt="Description of the image"
                                style={{
                                    borderRadius: "50%",
                                    height: "450px",
                                    width: "450px",
                                }}
                            />
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
}

export function Head() {
    return (
        <title>
            Precious Imoniakemu
        </title>
    );
}

export default HomePage;
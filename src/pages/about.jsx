import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

function AboutPage() {
    const staggerVariants = {
        initial: { opacity: 0, y: -20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const techStack = [
        { src: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white', alt: 'Bootstrap' },
        { src: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white', alt: 'Tailwind CSS' },
        { src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E', alt: 'JavaScript' },
        { src: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white', alt: 'TypeScript' },
        { src: 'https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB', alt: 'React' },
        { src: 'https://img.shields.io/badge/nextjs-%23000.svg?style=for-the-badge&logo=next.js&logoColor=white', alt: 'NextJS' },
        { src: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=F7CA3F', alt: 'Python' },
        { src: 'https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=green', alt: 'Django' },
        { src: 'https://img.shields.io/badge/mysql-%23507E9C.svg?style=for-the-badge&logo=mysql&logoColor=white', alt: 'MySQL' },
        { src: 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white', alt: 'PostgreSQL' },
        { src: 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white', alt: 'AWS' },
        { src: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white', alt: 'Postman' },
        { src: 'https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white', alt: 'Visual Studio Code' },
    ];
    

    return (
        <div className="h-screen w-screen bg-primary font-mono">
            <Navbar />

            <div className="flex bg-primary">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerVariants}
                    transition={{ delay: 0.5, staggerChildren: 0.2 }}
                    className="p-10 text-info md:p-28"
                >
                    <motion.h1 variants={staggerVariants} className="text-2xl font-bold md:text-4xl">
                        About
                    </motion.h1>
                    <motion.p variants={staggerVariants} className="my-8">
                        Hello, My name is Precious Imoniakemu. I am a Software Engineer from Lagos, Nigeria.
                    </motion.p>
                    <motion.p variants={staggerVariants} className="my-8">
                        I love working on a variety of technologies including Web Development, Mobile App Development and
                        Deep Learning. My goal is to build high performance applications that solve real-world problems
                        and provide users with an awesome experience.
                    </motion.p>
                    <motion.div variants={staggerVariants} className="my-8">
                        <h3 className='text-xl font-semibold'>My Tech Stack</h3>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-5/6"
                        >
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.2 }} // Staggered delay
                                    className="h-auto w-auto text-center float-left"
                                >
                                    <img className="p-1" src={tech.src} alt={tech.alt} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="w-1/3 hidden lg:block"
                >
                    {/* Your Doughnut chart or other content */}
                </motion.div>
            </div>
        </div>
    );
}

export function Head() {
    return (
        <title>
            Precious Imoniakemu
        </title>
    );
}

export default AboutPage;

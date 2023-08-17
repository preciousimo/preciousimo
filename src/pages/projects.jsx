import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/card';
import Navbar from '../components/Navbar';
import projectsData from '../components/projectsData';

function Projects({ location }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="h-full w-full bg-primary font-mono">
        <Navbar open={open} setOpen={setOpen} location={location} />
        <div className={`flex ${open ? 'mt-48' : ''}`}>
          <div className={`${open ? 'my-32' : 'mt-20'} text-info mx-10`}>
            <h1 className="text-4xl font-bold">Projects</h1>
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <Card
                  title={project.title}
                  body={project.body}
                  github={project.github}
                  external={project.external}
                  tech={project.tech}
                  img={project.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export function Head() {
  return (
    <title>Aayush Kurup</title>
  );
}

export default Projects;

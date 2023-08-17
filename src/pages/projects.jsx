import React, { useState } from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import Card from '../components/card';
import Navbar from '../components/Navbar';

function Projects({ location }) {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        title
                        github
                        external
                        tech
                        image
                    }
                    rawMarkdownBody
                }
            }
        }
    `);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="h-full w-full bg-primary font-mono">
                <Navbar open={open} setOpen={setOpen} location={location}/>
                <div className={`flex ${open ? 'mt-48' : ''}`}>
                    <div className={`${open ? 'my-32' : 'mt-20'} text-info mx-10`}>
                        <h1 className="text-4xl font-bold">Projects</h1>
                        {
                            data.allMarkdownRemark.nodes.map((project, index) => (
                                <Card 
                                    key={project.id}
                                    title={project.frontmatter.title} 
                                    body={project.rawMarkdownBody}
                                    github={project.frontmatter.github}
                                    external={project.frontmatter.external}
                                    tech={project.frontmatter.tech}
                                    img={project.frontmatter.image}
                                    delay={index * 0.3}
                                />
                            ))
                        }
                    </div>
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

export default Projects;

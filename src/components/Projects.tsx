/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';
import styles from './Projects.module.css'; 

const projects = [
  {
    id: 1,
    title: 'Blog Post 1',
    image: '/todoApp.png',  // Ensure the image path is correct
    description: 'This is the description for blog post 1.',
    tags:["React" ,"Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: 'Blog Post 2',
    image: '/calculator.png',
    description: 'This is the description for blog post 2.',
    tags:["Node", "Typescript"],
  },
  {
    id: 3,
    title: 'Blog Post 3',
    image: '/currencyconverter.png',
    description: 'This is the description for blog post 3.',
    tags:["HTML", "CSS", "Typescript"],
  },
  {
    id: 4,
    title: 'Blog Post 4',
    image: '/bankacApp.png',
    description: 'This is the description for blog post 4.',
    tags:["Node", "Typescript"],
  },
  {
    id: 5,
    title: 'Blog Post 5',
    image: '/wordcounter.png',
    description: 'This is the description for blog post 5.',
    tags:["Node", "Typescript"],
  },
  {
    id: 6,
    title: 'Blog Post 6',
    image: '/appquiz.png',
    description: 'This is the description for blog post 6.',
    tags:["Node", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id= 'projects' className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            {/* Image */}
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className={styles.projectImage}
              />
            </div>

            {/* Description */}
            <div className={styles.projectDetails}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a className={styles.projectButton}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects

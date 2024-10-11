/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Blog Post 1',
    image: '/todoApp.png',
    description: 'This is a todo app for daily use.',
    tags: ['React', 'Node', 'CSS', 'Typescript'],
  },
  {
    id: 2,
    title: 'Blog Post 2',
    image: '/calculator.png',
    description: 'This is daily use calculator.',
    tags: ['Node', 'Typescript'],
  },
  {
    id: 3,
    title: 'Blog Post 3',
    image: '/currencyconverter.png',
    description: 'This is simple currency converter app.',
    tags: ['HTML', 'CSS', 'Typescript'],
  },
  {
    id: 4,
    title: 'Blog Post 4',
    image: '/bankacApp.png',
    description: 'This is simple banking app created using TS.',
    tags: ['Node', 'Typescript'],
  },
  {
    id: 5,
    title: 'Blog Post 5',
    image: '/wordcounter.png',
    description: 'This is the wordcounter App use to count words in a sentance.',
    tags: ['Node', 'Typescript'],
  },
  {
    id: 6,
    title: 'Blog Post 6',
    image: '/appquiz.png',
    description: 'This is the app using for exam preparation in quiz formate.',
    tags: ['Node', 'Typescript'],
  },
];

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectDetails}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <br />
              <a className={styles.projectButton}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

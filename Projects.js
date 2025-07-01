import React from 'react';
import './Projects.css';
import Project1 from '../assets/image/img1.svg';
import Project2 from '../assets/image/img2.svg';
import Project3 from '../assets/image/img3.svg'
import Project4 from '../assets/image/img4.svg'
import Project5 from '../assets/image/img5.svg';
const projects = [
  {
    id: 1,
    title: 'Consultation',
    image: Project1,
    description: 'Project Name ,Location',
  },
  {
    id: 2,
    title: 'Design',
    image: Project2,
    description: 'Project Name , Location',
  },
  {
    id: 3,
    title: 'Marketing & Design',
    image: Project3,
    description: 'Project Name ,Location',
  },
  {
    id: 4,
    title: 'Consultation & Marketing',
    image: Project4,
    description: 'Project Name Location',
  },
  {
    id: 5,
    title: 'Consultation',
    image: Project5,
    description: 'Project Name ,Location',
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Our Projects</h2>
      <p className="projects-subtitle">
        We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
      </p>
      <div className="project-cards">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

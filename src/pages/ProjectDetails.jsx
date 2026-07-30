import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="project-details">
        <h2>Project Not Found</h2>
      </div>
    );
  }

  return (
    <section className="project-details">
      <div className="project-container">

        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <h1 className="project-title">{project.title}</h1>

        <p className="project-description">
          {project.description}
        </p>

        <h3 className="section-title">Technology Stack</h3>

        <div className="tech-stack">
          {project.tech.map((tech) => (
            <span className="tech-badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <h3 className="section-title">Challenges Faced</h3>

        <div className="info-box">
          <ul>
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>

        <h3 className="section-title">Future Improvements</h3>

        <div className="info-box">
          <ul>
            {project.future.map((plan) => (
              <li key={plan}>{plan}</li>
            ))}
          </ul>
        </div>

        <div className="project-buttons">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            🌐 Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            💻 GitHub
          </a>
        </div>

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>

      </div>
    </section>
  );
}

export default ProjectDetails;
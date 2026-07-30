import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />

      <h3>{project.title}</h3>

      <div className="project-tech">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="project-tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <Link to={`/project/${project.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProjectCard;
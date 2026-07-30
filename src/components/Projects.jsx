import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
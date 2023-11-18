import GitHubIcon from "@mui/icons-material/GitHub";
import "./Portfolio.css";
import { projects, techImages } from "../utils/projectData";

export const Portfolio = () => {
  return (
    <div className="container">
      <h1 className="header">Projects</h1>
      {projects.map((project, i) => (
        <div key={project.name}>
          <div key={project.name} className="project-container">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  id={project.name.toLowerCase()}
                  className="project-image clickable"
                />
              </a>
            ) : (
              <div>
                <img src={project.image} className="project-image no-click" />
              </div>
            )}

            <div>
              <div className="github-link">
                <div className="title">{project.name}</div>
                <div
                  title="Github Repo"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  <GitHubIcon />
                </div>
              </div>
              <div className="description">{project.description}</div>
            </div>
          </div>
          <div className="tech-images">
            {project.technologies.map((tech) => (
              <a
                key={tech}
                href={techImages[tech].url}
                target="_blank"
                rel="noopener noreferrer"
                title={tech
                  .split("-")
                  .map((w) => `${w[0].toUpperCase()}${w.slice(1)}`)
                  .join(" ")}
              >
                <img
                  key={tech}
                  className="tech-image"
                  src={techImages[tech].logo}
                />
              </a>
            ))}
          </div>
          {i < projects.length - 1 && <div className="divider" />}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

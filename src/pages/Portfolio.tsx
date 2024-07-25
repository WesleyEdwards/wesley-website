import GitHubIcon from "@mui/icons-material/GitHub";
import "./Portfolio.css";
import { projects, techImages } from "../utils/projectData";
import { Construction } from "@mui/icons-material";

export const Portfolio = () => {
  return (
    <div className="container">
      <h1 className="header">Projects</h1>
      <div className="grid-container">
        {projects.map((project) => (
          <div key={project.name} className="project-container">
            <div className="title">{project.name}</div>
            <div className="line-items">
              {project.link && (
                <div className="project-line-item">
                  <img
                    src={project.image}
                    id={project.name.toLowerCase()}
                    className="project-image"
                  />
                  <div className="project-line-item-text">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.link}
                    </a>
                  </div>
                </div>
              )}

              <div className="project-line-item">
                <GitHubIcon />
                <div className="project-line-item-text">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.githubLink}
                  </a>
                </div>
              </div>
              <div className="project-line-item">
                <Construction />
                <div className="project-line-item-text">
                  {project.technologies.map((t, i) => (
                    <a
                      className="tech-link"
                      key={t}
                      href={techImages[t].url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ marginInlineEnd: "4px" }}>
                        {`${t.toLocaleUpperCase()[0]}${t.slice(1)}`}
                        {i < project.technologies.length - 1 ? "," : ""}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="description">{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

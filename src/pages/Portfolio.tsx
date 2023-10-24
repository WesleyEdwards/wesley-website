import GitHubIcon from "@mui/icons-material/GitHub";
import "./Portfolio.css";
import { projects, techImages } from "../utils/projectData";


export const Portfolio = () => {
  return (
    <div className="container">
      <h1 className="header">Projects</h1>
      {projects.map((project, i) => (
        <div key={project.name}>
          <div className="project-container">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} className="project-image clickable" />
              </a>
            ) : (
              <img src={project.image} className="project-image no-click" />
            )}

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "2rem",
                }}
              >
                <div className="title">{project.name}</div>
                <div onClick={() => window.open(project.githubLink, "_blank")}>
                  <GitHubIcon />
                </div>
              </div>
              <div className="description">{project.description}</div>
            </div>
          </div>
          <div className="tech-images">
            {project.technologies.map((tech) => (
              <a
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
          {i < projects.length - 1 && (
            <div
              style={{
                borderBottom: "1px solid black",
                width: "100%",
                margin: "4rem 0",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

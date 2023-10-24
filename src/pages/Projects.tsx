import GitHubIcon from "@mui/icons-material/GitHub";
import "./Projects.css";

type Tech =
  | "react"
  | "firebase"
  | "typeScript"
  | "mui"
  | "jetpack"
  | "mongo"
  | "express";

type ProjectInfo = {
  name: string;
  description: string;
  image: string;
  link: string;
  githubLink: string;
  technologies: Tech[];
};

const projects: ProjectInfo[] = [
  {
    name: "Mate Champion",
    description: "A fun game to play with friends",
    image:
      "https://user-images.githubusercontent.com/97990557/210005678-afa98993-b045-4134-9c4e-34cb390b3813.png",
    link: "https://mate-champion.web.app/",
    githubLink: "https://github.com/WesleyEdwards/mate-champion",
    technologies: ["react", "typeScript", "firebase"],
  },
  {
    name: "Reptile Tracker",
    description: "Tracking reptiles has never been easier",
    image: "../public/reptile-logo.png",
    link: "https://edwards-reptiles.web.app",
    githubLink: "https://github.com/WesleyEdwards/reptile-tracker",
    technologies: ["react", "typeScript", "mongo", "express", "mui"],
  },
];

const techImages: Record<Tech, string> = {
  react: "../public/react-logo.png",
  firebase: "../public/firebase-logo.png",
  typeScript: "../public/ts-logo.png",
  mui: "../public/mui-logo.png",
  jetpack: "../public/jetpack-logo.png",
  mongo: "../public/mongo-logo.png",
  express: "../public/express-logo.png",
};

export const Projects = () => {
  return (
    <div className="container">
      <h1 className="header">Projects</h1>
      {projects.map((project) => (
        <div key={project.name}>
          <div className="project-container">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} className="project-image" />
            </a>
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
              <img key={tech} className="tech-image" src={techImages[tech]} />
            ))}
          </div>
          <div
            style={{
              borderBottom: "1px solid black",
              width: "100%",
              margin: "4rem 0",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;

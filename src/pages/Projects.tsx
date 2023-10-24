import GitHubIcon from "@mui/icons-material/GitHub";
import "./Projects.css";

type Tech =
  | "react"
  | "firebase"
  | "typeScript"
  | "mui"
  | "jetpack-compose"
  | "mongo"
  | "express"
  | "python"
  | "kotlin"
  | "flask";

type ProjectInfo = {
  name: string;
  description: string;
  image: string;
  link?: string;
  githubLink: string;
  technologies: Tech[];
};

const techImages: Record<
  Tech,
  {
    logo: string;
    url: string;
  }
> = {
  react: {
    logo: "../public/react-logo.png",
    url: "https://react.dev",
  },
  firebase: {
    logo: "../public/firebase-logo.png",
    url: "https://firebase.google.com/",
  },
  typeScript: {
    logo: "../public/ts-logo.png",
    url: "https://www.typescriptlang.org/",
  },
  mui: {
    logo: "../public/mui-logo.png",
    url: "https://mui.com/",
  },
  "jetpack-compose": {
    logo: "../public/jetpack-logo.png",
    url: "https://developer.android.com/jetpack",
  },
  mongo: {
    logo: "../public/mongo-logo.png",
    url: "https://www.mongodb.com/",
  },
  express: {
    logo: "../public/express-logo.png",
    url: "https://expressjs.com/",
  },
  python: {
    logo: "../public/python-logo.png",
    url: "https://www.python.org/",
  },
  kotlin: {
    logo: "../public/kotlin-logo.png",
    url: "https://kotlinlang.org/",
  },
  flask: {
    logo: "../public/flask-logo.png",
    url: "https://flask.palletsprojects.com/en/2.0.x/",
  },
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
  {
    name: "Lost and Found",
    description: "Lost and Found for the community",
    image: "../public/lost-logo.png",
    githubLink: "https://github.com/WesleyEdwards/LostAndFound",
    technologies: ["jetpack-compose", "kotlin", "firebase"],
  },
  {
    name: "Dan's Frappuccino Hell",
    description: "Manage store funds, keep track of employees, or buy a coffee",
    image: "../public/dan-logo.png",
    githubLink: "https://github.com/WesleyEdwards/Dan-s-Frappe-Hell",
    technologies: ["flask", "python", "react", "typeScript", "mui"],
  },
  {
    name: "Tohdoh",
    description: "Scheduling tool for college students",
    image: "../public/grandma-logo.png",
    githubLink: "https://github.com/WesleyEdwards/tohdoh",
    technologies: ["flask", "python", "react", "typeScript"],
  },
];

export const Projects = () => {
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

export default Projects;

import GitHubIcon from "@mui/icons-material/GitHub";
import "./Projects.css";
export const Projects = () => {
  type Tech = "react" | "firebase" | "typeScript";
  const projects = [
    {
      name: "Mate Champion",
      description: "A fun game to play with friends",
      image:
        "https://user-images.githubusercontent.com/97990557/210005678-afa98993-b045-4134-9c4e-34cb390b3813.png",
      link: "https://mate-champion.web.app/",
      githubLink: "https://github.com/WesleyEdwards/mate-champion",
      technologies: ["react", "firebase", "typeScript"] satisfies Tech[],
    },
  ];

  const techImages: Record<Tech, string> = {
    react:
      "https://banner2.cleanpng.com/20180518/ptw/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575942028.3034008315266584216067.jpg",
    firebase:
      "https://firebase.google.com/images/brand-guidelines/logo-vertical.png",
    typeScript:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  };

  return (
    <div className="container projects-page">
      <div>Projects</div>
      {projects.map((project) => (
        <div key={project.name}>
          <div className="project-container">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} />
            </a>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <div className="title">{project.name}</div>
                <div
                  onClick={() => {
                    window.open(project.githubLink, "_blank");
                  }}
                >
                  <GitHubIcon />
                </div>
              </div>
              <div className="description">{project.description}</div>
            </div>
          </div>
          <div>Technologies: </div>
          <div className="tech-images">
            {project.technologies.map((tech) => (
              <img src={techImages[tech]} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

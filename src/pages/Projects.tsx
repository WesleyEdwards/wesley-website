import "./Projects.css";
export const Projects = () => {
  const projects = [
    {
      name: "Mate Champion",
      description: "A fun game to play with friends",
      image:
        "https://user-images.githubusercontent.com/97990557/210005678-afa98993-b045-4134-9c4e-34cb390b3813.png",
      link: "https://mate-champion.web.app/",
      githubLink: "https://github.com/WesleyEdwards/mate-champion",
    },
  ];
  return (
    <div className="container projects-page">
      <div>Projects</div>
      {projects.map((project) => (
        <div key={project.name} className="project-container">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} />
          </a>
          <div>
            <div className="title">{project.name}</div>
            <div>{project.description}</div>
            <div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

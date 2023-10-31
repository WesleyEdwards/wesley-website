
export type Tech =
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

  export type ProjectInfo = {
  name: string;
  description: string;
  image: string;
  link?: string;
  githubLink: string;
  technologies: Tech[];
};

export const techImages: Record<
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

export const projects: ProjectInfo[] = [
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
  {
    name: "Drawing App",
    description: "Create your own masterpiece",
    image: "../public/drawing-logo.png",
    githubLink: "https://github.com/WesleyEdwards/Drawing-App",
    technologies: ["jetpack-compose", "kotlin"],
  },
  {
    name: "Galaga",
    description: "Replica of Galaga",
    image: "../public/galaga-logo.png",
    githubLink: "https://github.com/WesleyEdwards/galaga",
    technologies: ["typeScript"],
    link: "https://wesleyedwards.github.io/galaga/"
  },

];
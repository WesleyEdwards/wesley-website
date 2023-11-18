import reactLogo from "../assets/react-logo.png";
import firebaseLogo from "../assets/firebase-logo.png";
import tsLogo from "../assets/ts-logo.png";
import muiLogo from "../assets/mui-logo.png";
import jetpackLogo from "../assets/jetpack-logo.png";
import mongoLogo from "../assets/mongo-logo.png";
import expressLogo from "../assets/express-logo.png";
import pythonLogo from "../assets/python-logo.png";
import kotlinLogo from "../assets/kotlin-logo.png";
import flaskLogo from "../assets/flask-logo.png";
import reptileLogo from "../assets/reptile-logo.png";
import lostLogo from "../assets/lost-logo.png";
import danLogo from "../assets/dan-logo.png";
import drawingLogo from "../assets/drawing-logo.png";
import grandmaLogo from "../assets/grandma-logo.png";
import galagaLogo from "../assets/galaga-logo.png";
import pyTutorLogo from "../assets/py-tutor-icon.png";

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
    logo: reactLogo,
    url: "https://react.dev",
  },
  firebase: {
    logo: firebaseLogo,
    url: "https://firebase.google.com/",
  },
  typeScript: {
    logo: tsLogo,
    url: "https://www.typescriptlang.org/",
  },
  mui: {
    logo: muiLogo,
    url: "https://mui.com/",
  },
  "jetpack-compose": {
    logo: jetpackLogo,
    url: "https://developer.android.com/jetpack",
  },
  mongo: {
    logo: mongoLogo,
    url: "https://www.mongodb.com/",
  },
  express: {
    logo: expressLogo,
    url: "https://expressjs.com/",
  },
  python: {
    logo: pythonLogo,
    url: "https://www.python.org/",
  },
  kotlin: {
    logo: kotlinLogo,
    url: "https://kotlinlang.org/",
  },
  flask: {
    logo: flaskLogo,
    url: "https://flask.palletsprojects.com/en/2.0.x/",
  },
};

export const projects: ProjectInfo[] = [
  {
    name: "PyTutor",
    description: "Learning tool for CS students",
    image: pyTutorLogo,
    link: "https://py-tutor.web.app/",
    githubLink: "https://github.com/WesleyEdwards/pyTutor",
    technologies: ["react", "typeScript", "express", "firebase"],
  },
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
    image: reptileLogo,
    link: "https://edwards-reptiles.web.app",
    githubLink: "https://github.com/WesleyEdwards/reptile-tracker",
    technologies: ["react", "typeScript", "mongo", "express", "mui"],
  },
  {
    name: "Lost and Found",
    description: "Lost and Found for the community",
    image: lostLogo,
    githubLink: "https://github.com/WesleyEdwards/LostAndFound",
    technologies: ["jetpack-compose", "kotlin", "firebase"],
  },
  {
    name: "Dan's Frappuccino Hell",
    description: "Manage store funds, keep track of employees, or buy a coffee",
    image: danLogo,
    githubLink: "https://github.com/WesleyEdwards/Dan-s-Frappe-Hell",
    technologies: ["flask", "python", "react", "typeScript", "mui"],
  },
  {
    name: "Tohdoh",
    description: "Scheduling tool for college students",
    image: grandmaLogo,
    githubLink: "https://github.com/WesleyEdwards/tohdoh",
    technologies: ["flask", "python", "react", "typeScript"],
  },
  {
    name: "Drawing App",
    description: "Create your own masterpiece",
    image: drawingLogo,
    githubLink: "https://github.com/WesleyEdwards/Drawing-App",
    technologies: ["jetpack-compose", "kotlin"],
  },
  {
    name: "Galaga",
    description: "Replica of Galaga",
    image: galagaLogo,
    githubLink: "https://github.com/WesleyEdwards/galaga",
    technologies: ["typeScript"],
    link: "https://wesleyedwards.github.io/galaga/",
  },
];

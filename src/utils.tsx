import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

type Page = "home" | "projects" | "about";

export const pages: Record<Page, JSX.Element> = {
  home: <Home />,
  projects: <Projects />,
  about: <About />,
};

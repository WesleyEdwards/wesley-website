import About from "../pages/About";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

type Page = "home" | "portfolio" | "about";

export const pages: Record<Page, JSX.Element> = {
  home: <Home />,
  portfolio: <Portfolio />,
  about: <About />,
};

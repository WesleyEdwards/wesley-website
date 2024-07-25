import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const authRouter = createBrowserRouter([
  {
    path: "/*",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },

      { path: "*", element: <Navigate to="/home" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={authRouter} />;
}

export default App;

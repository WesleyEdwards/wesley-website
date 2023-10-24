import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { pages } from "./utils/pages";
import Layout from "./Layout";

const authRouter = createBrowserRouter([
  {
    path: "/*",
    element: <Layout />,
    children: [
      ...Object.entries(pages).map(([path, element]) => ({
        path,
        element,
      })),
      { path: "*", element: <Navigate to="/home" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={authRouter} />;
}

export default App;

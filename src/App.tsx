import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { pages } from "./utils";
import Layout from "./Layout";

const authRouter = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      ...Object.entries(pages).map(([path, element]) => ({
        path,
        element,
      })),
      { path: "*", element: <Navigate to="dashboard" replace /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={authRouter} />;
}

export default App;

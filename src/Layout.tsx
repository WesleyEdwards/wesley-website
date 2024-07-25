import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderNav from "./components/Navbar";

export const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <HeaderNav />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;

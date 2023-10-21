import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useMediaQuery } from "@mui/material";

export const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  const smallScreen = useMediaQuery("(max-width: 600px)");

  const tabs: { [key: string]: string } = {
    Home: "/home",
    Projects: "/projects",
    About: "/about",
  };

  const linkTabs = (horizontal: boolean) => {
    return Object.keys(tabs).map((tab) => (
      <Link
        key={tab}
        to={tabs[tab]}
        className={`link ${horizontal ? "horizontal" : "vertical"} ${
          location.pathname === tabs[tab] ? "active" : "inactive"
        }`}
      >
        <div style={{}}>{tab}</div>
      </Link>
    ));
  };

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar">
      <div className={"sidenav"} style={{ width: expandNavbar ? 200 : 0 }}>
        <div className="close-sidenav">
          <CloseIcon onClick={() => setExpandNavbar(false)} />
        </div>
        {linkTabs(false)}
      </div>
      <div className="toggleButton">
        {smallScreen && (
          <button
            onClick={() => {
              setExpandNavbar(true);
            }}
          >
            <ReorderIcon />
          </button>
        )}
      </div>
      {!smallScreen && <div className="links">{linkTabs(true)}</div>}
    </div>
  );
};
export default Navbar;

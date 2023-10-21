import { useMediaQuery } from "@mui/material";
import "./Home.css";
export const Home = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <div id="container">
      <div id="profile-pic" className="col-flex">
        <img src="../public/wesley-picture.jpg" />
        <div>
          <p className="quote">"God, Family, Unix"</p>
          <p className="author">- Wesley Edwards</p>
        </div>
      </div>
      <div className={`${smallScreen ? "col-flex" : "row-flex"} full-width`}>
        <img
          src="../public/in-mexico.jpg"
          className={`${smallScreen ? "full-width" : "half-width"}`}
        />
        <p className={smallScreen ? "" : "horizontal-text"}>
          Wesley and his wife Sarah live in Logan, Utah. They love back-packing,
          running, attending Utah State sports events, and being with family.
        </p>
      </div>
      <div>
        <img src="../public/at-hackathon.jpg" />
        <p>
          The computer science department at Utah State University sponsors many
          events and clubs, including the annual hackathon the ACM club, both of
          which Wesley has been involved in.
        </p>
      </div>

      <div>
        <div className={smallScreen ? "pictures-small" : "pictures"}>
          <div
            className="col-flex"
            style={
              smallScreen
                ? { width: "100%", gap: "10px" }
                : { width: "50%", gap: "2rem" }
            }
          >
            <img src="../public/marathon.jpg" />
            <img src="../public/hockey.jpg" />
          </div>
          <img
            src="../public/skiing.png"
            className={smallScreen ? "full-width" : "half-width"}
          />
        </div>
        <p>
          Wesley loves running with his dad and brothers, playing hockey with
          his cousins, and water-skiing with his uncle.
        </p>
      </div>

      <div className={`${smallScreen ? "col-reverse-flex" : "row-flex"} full-width`}>
        <p className={smallScreen ? "" : "horizontal-text"}>
          Yerba Mate is a traditional South American drink that has inspired
          several school and personal projects for Wesley, such as{" "}
          <a href="https://github.com/WesleyEdwards/GoMatero">Go Matero</a> and{" "}
          <a href="https://github.com/WesleyEdwards/mate-champion">
            Mate Champion
          </a>
          .
        </p>

        <img
          src="../public/mate.jpg"
          className={`${smallScreen ? "full-width" : "half-width"}`}
        />
      </div>
    </div>
  );
};

export default Home;

import { useMediaQuery } from "@mui/material";
import "./About.css";
export const About = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");

  const smallScreenStyle = (small: string, large: string) =>
    smallScreen ? small : large;

  return (
    <div className="container about-page">
      <div id="profile-pic" className="col-flex">
        <img src="../public/wesley-picture.jpg" className="full-width" />
        <div>
          <p className="quote">"God, Family, Unix"</p>
          <p className="author">- Wesley Edwards</p>
        </div>
      </div>
      <div className={`${smallScreenStyle("col-flex", "row-flex")} full-width`}>
        <img src="../public/in-mexico.jpg" className="half-width" />
        <p className={smallScreenStyle("", "horizontal-text")}>
          Wesley and his wife Sarah live in Logan, Utah. They love back-packing,
          running, attending Utah State sports events, and being with family.
        </p>
      </div>
      <div>
        <img src="../public/at-hackathon.jpg" className="full-width" />
        <p>
          The computer science department at Utah State University sponsors many
          events and clubs, including the annual hackathon the ACM club, both of
          which Wesley has been involved in.
        </p>
      </div>

      <div>
        <div className="pictures">
          <img src="../public/skiing.png" className="half-width" />
          <div className={"col-flex pictures-col"}>
            <img src="../public/marathon.jpg" className="full-width" />
            <img src="../public/hockey.jpg" className="full-width" />
          </div>
        </div>
        <p>
          Wesley loves running with his dad and brothers, playing hockey with
          his cousins, and water-skiing with his uncle.
        </p>
      </div>

      <div
        className={`${smallScreenStyle(
          "col-reverse-flex",
          "row-flex"
        )} full-width`}
      >
        <p className={smallScreenStyle("", "horizontal-text")}>
          Yerba Mate is a traditional South American drink that has inspired
          several school and personal projects for Wesley, such as{" "}
          <a href="https://github.com/WesleyEdwards/GoMatero">Go Matero</a> and{" "}
          <a href="https://github.com/WesleyEdwards/mate-champion">
            Mate Champion
          </a>
          .
        </p>

        <img src="../public/mate.jpg" className="half-width" />
      </div>
    </div>
  );
};

export default About;

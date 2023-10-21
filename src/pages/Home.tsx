import "./Home.css";
export const Home = () => {
  return (
    <div id="container">
      <div
        style={{
          width: "32rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="../public/wesley-picture.jpg" />
        <div>
          <p className="quote">"God, Family, Unix"</p>
          <p className="author">- Wesley Edwards</p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img
          src="../public/in-mexico.jpg"
          style={{
            width: "50%",
          }}
        />
        <p
          style={{
            margin: "4rem",
          }}
        >
          Wesley and his wife Sarah live in Logan, Utah. They love hiking,
          running, attending Utah State sports events, and being with family.
        </p>
      </div>
      <img src="../public/at-hackathon.jpg" />
    </div>
  );
};

export default Home;

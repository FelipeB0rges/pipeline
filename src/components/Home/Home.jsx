import React from "react";
import "./Home.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import Counter from "../Counter";

const Home = () => {
  return (
    <>
      <div
        className="versao"
        style={{
          color: "white",
        }}
      >
        V: 1.0.0
      </div>
      <div className="home">
        <div
          className="git"
          onClick={() => {
            window.location.href = "https://github.com/FelipeB0rges";
          }}
        >
          <GitHubIcon fontSize="40px"></GitHubIcon>
          <div className="nome">FelipeB0rges</div>
        </div>
      </div>
      <Counter />
    </>
  );
};

export default Home;

import React from "react";
import "./Home.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import Counter from "../Counter";
import ButtonComponent from "../ButtonComponent";
import SelectComponent from "../SelectComponent";
import CheckBoxComponent from "../CheckboxComponent";
import ListComponent from "../ListComponent";
import InputComponent from "../InputComponent";

const Home = () => {
  return (
    <>
      <div
        className="versao"
        style={{
          color: "white",
        }}
      >
        V: 2.0.0
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
      <div className="test">
        <Counter />
        <ButtonComponent />
        <SelectComponent />
        <CheckBoxComponent />
        <ListComponent />
        <InputComponent />
      </div>
    </>
  );
};

export default Home;

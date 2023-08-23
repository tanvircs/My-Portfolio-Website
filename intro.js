import React from "react";
import "./intro.css";
import bg from "../../assets/Tanvir-Photo.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Tanvir </span> <br /> Software
          Engineer
          <p className="introPara">
            I am Software Engineer with experince in Web <br /> Application{" "}
            Development, Mobile APP Development, <br /> Machine Learning and AWS
            DevOps.
          </p>
          <Link>
            <button className="btn">
              <img src={btnImg} alt="Hire" className="btnImg" />
              Hire Me
            </button>
          </Link>
        </span>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

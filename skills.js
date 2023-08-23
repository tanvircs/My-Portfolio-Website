import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import BackendDesign from "../../assets/backend-design.svg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I'm a capable and enthusiastic Software Engineer with expertise in
        building websites, mobile apps, and using AWS Cloud services. I'm also
        well-versed in Linux, scripting, and deploying applications through
        CI/CD and DevOps practices.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img className="skillBarImg" src={UIDesign} alt="UIDesign" />
          <div className="skillBarText">
            <h2>AWS Cloud Services</h2>
            <p>
              Proficient in implementing scalable and reliable solutions using
              AWS Cloud services, ensuring optimal performance and cost
              efficiency. Skilled in setting up and managing cloud
              infrastructure, including EC2 instances, S3 storage, Lambda
              functions, and more.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img
            className="skillBarImg"
            src={BackendDesign}
            alt="BackendDesign"
          />
          <div className="skillBarText">
            <h2>Backend Development</h2>
            <p>
              Experienced in crafting robust backend systems using Python,
              Node.js, and Java, enabling seamless data processing and efficient
              server communication. Capable of designing RESTful APIs and
              integrating complex functionalities to enhance application
              performance and user experience.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img className="skillBarImg" src={WebDesign} alt="WebDesign" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              Adept at creating visually appealing websites using React, HTML,
              CSS, and WordPress resulting in engaging and user-friendly online
              experiences. Skilled in translating design concepts into
              responsive and interactive web interfaces that captivate audiences
              across various devices.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" src={AppDesign} alt="AppDesign" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              Proficient in developing cross-platform mobile apps with React
              Native, ensuring consistent functionality and aesthetics across
              Android and iOS platforms. Experienced in designing intuitive user
              interfaces that enhance app usability and deliver a seamless
              experience to users on both major mobile platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

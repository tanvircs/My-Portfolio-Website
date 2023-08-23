import React from "react";
import "./works.css";
import Proj1 from "../../assets/proj_1.jpeg";
import Proj2 from "../../assets/proj_2.png";
import Proj3 from "../../assets/proj_3.png";
import Proj4 from "../../assets/proj_4.png";
import Proj5 from "../../assets/proj_5.png";
import Proj6 from "../../assets/proj_6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <spna className="workDesc">
        I enjoy focusing on even the tiniest elements and ensuring my work is
        flawlessly precise. I'm thrilled to apply my skills and experience to
        assist businesses in reaching their objectives and establishing a robust
        online presence.
      </spna>
      <div className="worksImgs">
        <img src={Proj1} alt="" className="worksImg" />
        <img src={Proj2} alt="" className="worksImg" />
        <img src={Proj3} alt="" className="worksImg" />
        <img src={Proj4} alt="" className="worksImg" />
        <img src={Proj5} alt="" className="worksImg" />
        <img src={Proj6} alt="" className="worksImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;

import React from "react";
import "./About.css";
import about from "../../../src/img/wallpaperflare-cropped.jpg";
// import award from "../../../src/img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={about} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          A few things about me? Well, love JavaScript and React and the
          interest emerged from Namaste JavaScript like many going through my
          portfolio currently. Love anything and everything related to web
          development. Any kind of feedback whether critisism or appreciation is
          highly valuable to me. Please feel free to reach out to me.
        </p>
        <p className="a-desc">
          As a kid I grew up in West Bengal in a small town. Never thought of
          becoming a developer , always wanted to become a air hostess. But as I
          grew up, only my age increased my height never did. And my dreams fell
          apart. I don't like to give up easily, hence pursued a some other
          interests. I loved drawing, colours and intricate details are
          something that I am drawn towards. As i was in college, front end
          development was a field that really caught my eye. The colours, the
          details , the design of an website attracted me. Yeah, that's how i
          fell in love with frontend. But never got to pursue it untill my
          current corporation.
        </p>
        {/* <div className="a-award">
          <img src={award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div> 
        </div>*/}
      </div>
    </div>
  );
};

export default About;

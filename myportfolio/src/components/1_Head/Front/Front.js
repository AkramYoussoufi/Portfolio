import React from "react";
import "./Front.css";
import SubBotton from "./SubButtons/SubBotton";
import SubBotton2 from "./SubButtons/SubBotton2";
import SocialButton from "./SocialButtons/SocialButton";
import facebookImage from "./SocialButtons/facebook.png";
import InstaImage from "./SocialButtons/insta.png";
import LinkdinImage from "./SocialButtons/linkdin.png";

export default function Front() {
  return (
    <div className="Front">
      <div className="myPdp">
        <div className="greencircle"></div>
      </div>
      <div className="myName">Akram Youssoufi</div>
      <div className="subTitle">A Web Developer , BackEnd & FrontEnd</div>
      <div className="subButtons">
        <SubBotton name="Resume"></SubBotton>
        <SubBotton2 name="Hire Me"></SubBotton2>
      </div>
      <div className="socialButtons">
        <SocialButton image={facebookImage}></SocialButton>
        <SocialButton image={InstaImage}></SocialButton>
        <SocialButton image={LinkdinImage}></SocialButton>
      </div>
    </div>
  );
}

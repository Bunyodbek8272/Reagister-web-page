import React from "react";
import logo from "../image/logo__main.svg";
import firstimg from "../image/location.svg";
import secondimg from "../image/crown.svg";
import thridimg from "../image/frame.svg";
import fourthimag from "../image/heart.svg";
import fivethimag from "../image/user-tag.svg";
import search from "../image/search-normal.svg";
const Steps = () => {
  return (
    <>
      <div className="steps__numbers">
        <div className="progress">
          <div className="progress_success"></div>
        </div>
        <div className="step__number  ">
          <img src={firstimg} alt="logo1" />
        </div>
        <div className="step__number">
          <img src={secondimg} alt="logo2" />
        </div>
        <div className="step__number">
          <img src={thridimg} alt="logo3" />
        </div>
        <div className="step__number">
          <img src={fourthimag} alt="logo4" />
        </div>

        <div className="step__number">
          <img src={fivethimag} alt="logo5" />
        </div>
      </div>
    </>
  );
};

export default Steps;

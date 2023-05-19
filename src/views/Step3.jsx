import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Steps from "../components/Steps";

// import img

import galary from "../image/galary.png";
import link from "../image/link.png";
import twitter from "../image/twitter.png";
const Step3 = () => {
  return (
    <>
      <main>
        <Logo />
        <Steps />
        <div className="form__step">
          <div className="section__title">Fill Your Profile</div>
          <div className="section__text">
            This basic information will be shown to your matches every week.
            Tell us what you would like to show!
          </div>
          <div className="file__uploder">
            <div className="file__uploder-item">
              <label className="file__lable">
                <input type="file" className="file__input" />
                <div className="file__item">
                  <div className="file__item-image">
                    <img src={galary} alt="img" />
                  </div>
                  <div className="file__item-text">Upload Your Photo</div>
                </div>
              </label>
            </div>
            <div className="file__uploder-item">
              <div className="form__item">
                <div className="form__item-title">Other Profile</div>

                <div className="profile__inputs">
                  <div className="form__input profile__input">
                    <input
                      type="text"
                      className="input"
                      placeholder="LinkedIn URL"
                    />
                    <img src={link} alt="search_icon" className="input__img" />
                  </div>

                  <div className="form__input profile__input">
                    <input
                      type="text"
                      className="input"
                      placeholder="Twitter URL"
                    />
                    <img
                      src={twitter}
                      alt="search_icon"
                      className="input__img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="step__buttons">
          <Link to="/step2" className=" btn__outline  button prev_step">
            Back
          </Link>
          <Link to="/step4" className=" btn button next_step">
            Next
          </Link>
        </div>
      </main>
    </>
  );
};

export default Step3;

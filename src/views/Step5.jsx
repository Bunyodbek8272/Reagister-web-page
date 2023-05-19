import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Steps from "../components/Steps";
// import images
import user from "../image/user.png";

const Step5 = () => {
  return (
    <>
      <main>
        <Logo />
        <Steps />
        <div className="form__step">
          <div className="section__title">Tell Us About Your Self</div>
          <div className="section__text">
            Select from the list and add your own interests.
          </div>

          <div className="fullname__user">
            <div className="form__input search__input">
              <input type="text" className="input" placeholder="First Name" />
              <img src={user} alt="search_icon" className="input__img" />
            </div>
            <div className="form__input search__input">
              <input type="text" className="input" placeholder="Last Name" />
              <img src={user} alt="search_icon" className="input__img" />
            </div>
          </div>
          <div className="text__area">
            <textarea
              className="textbox"
              placeholder="About Your Self"
            ></textarea>
            {/* <div className="border"></div> */}
          </div>
        </div>
        <div className="step__buttons">
          <Link to="/step4" className=" btn__outline  button prev_step">
            Back
          </Link>
          <Link to="/finish" className=" btn button next_step">
            Finish
          </Link>
        </div>
      </main>
    </>
  );
};

export default Step5;

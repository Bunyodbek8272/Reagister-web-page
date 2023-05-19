import React from "react";
import logoF from "../image/logof.png";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import "../styles/finish.scss";

const Finish = () => {
  return (
    <>
      <main>
        <Logo />
        <div className="finish">
          <div className="finish__logo">
            <img src={logoF} alt="logof" />
          </div>
          <div className="finish__title">Finish Your Registration</div>
          <div className="finish__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="sub__title">Why Connect My Google Account?</div>
          <div className="finish__text">
            Your contact and calendar data helps us schedule meetings and ensure
            that your matches are relevant (not matching you with people you
            already know, for instance).
          </div>
          <div className="finish__text">
            We’re serious about your privacy and will never share your private
            data with other users or third parties without your consent.
          </div>
          <Link href="/#" className="btn btn__finish">
            Finish
          </Link>
        </div>
      </main>
    </>
  );
};
export default Finish;

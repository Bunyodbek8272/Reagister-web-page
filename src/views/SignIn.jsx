import React from "react";
// import bg from "../image/bg__main.jpg";
import logo from "../image/logo__main.svg";
// import arrow from "../image/arrow-right.svg";
import "../styles/header.scss";
import "../styles/global.scss";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <>
      <header className="header">
        <div className="header__item  image__item"></div>
        <div className="header__item info__item">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <h3 className="section__title">Create Account</h3>
          <p className="section__text">Please register your account!</p>
          <Link to="/step1" className="btn header__btn">
            Create Account
          </Link>

          {/* <a href="./Form.jsx" className="btn header__btn">
            Create Account
            <img className="svg" src={arrow} alt="Arrrow" />
          </a> */}
          <div className="link">
            Already have an <Link to="/"> Account</Link> ?
          </div>
        </div>
      </header>
    </>
  );
};

export default SignIn;

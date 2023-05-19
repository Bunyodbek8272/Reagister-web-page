import React from "react";
import Logo from "../components/Logo";
import Steps from "../components/Steps";

// import styles
import "../styles/global.scss";
import "../styles/radio.scss";

import radio1 from "../image/radio1.png";
import radio2 from "../image/radio2.png";
import radio3 from "../image/radio3.png";
import radio4 from "../image/radio4.png";
import radio5 from "../image/radio5.png";
import radio6 from "../image/radio6.png";
import search from "../image/search-normal.svg";
import { Link } from "react-router-dom";

const Step1 = () => {
  return (
    <>
      <main>
        <Logo />
        <Steps />
        <form action="#" className="steps__form">
          <div className="steps">
            <div className="form__step active">
              <div className="section__title">Which Hub Are You In?</div>
              <div className="section__text">
                We are active in major cities and we schedule meetings based on
                time zones. Let us know your home base.
              </div>
              <div className="form__input search__input">
                <input
                  type="text"
                  className="input"
                  placeholder="Search something..."
                />
                <img src={search} alt="search_icon" className="input__img" />
              </div>
              <div className="form__item">
                <div className="form__item-title">Popular Hub</div>
                <div className="radion__buttons">
                  <label className="radio__item">
                    <input type="radio" className="radio__input" name="radio" />
                    <div className="fake"></div>
                    <div className="img">
                      <img src={radio1} alt="img" />
                    </div>
                    <div className="text">Austin</div>
                    <div className="border"></div>
                  </label>

                  <label className="radio__item">
                    <input type="radio" className="radio__input" name="radio" />
                    <div className="fake"></div>
                    <div className="img">
                      <img src={radio2} alt="img" />
                    </div>
                    <div className="text">Dallas</div>
                    <div className="border"></div>
                  </label>

                  <label className="radio__item">
                    <input type="radio" className="radio__input" name="radio" />
                    <div className="fake"></div>
                    <div className="img">
                      <img src={radio3} alt="img" />
                    </div>
                    <div className="text">San Antonio</div>
                    <div className="border"></div>
                  </label>

                  <label className="radio__item">
                    <input type="radio" className="radio__input" name="radio" />
                    <div className="fake"></div>
                    <div className="img">
                      <img src={radio4} alt="img" />
                    </div>
                    <div className="text">Houston</div>
                    <div className="border"></div>
                  </label>

                  <label className="radio__item">
                    <input type="radio" className="radio__input" name="radio" />
                    <div className="fake"></div>
                    <div className="img">
                      <img src={radio5} alt="img" />
                    </div>
                    <div className="text">New York </div>
                    <div className="border"></div>
                  </label>

                  <label className="radio__item">
                    <input type="radio" className="radio__input" name="radio" />
                    <div className="fake"></div>
                    <div className="img">
                      <img src={radio6} alt="img" />
                    </div>
                    <div className="text">Los Angeles</div>
                    <div className="border"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="step__buttons">
          {/* <Link to="/" className=" btn__outline  button prev_step">
            Back
          </Link> */}
          <Link to="/step2" className=" btn button next_step">
            Next
          </Link>
        </div>
      </main>
    </>
  );
};

export default Step1;

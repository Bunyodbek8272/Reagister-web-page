import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Steps from "../components/Steps";
// import image
import search from "../image/search-normal.svg";

const Step4 = () => {
  return (
    <>
      <main>
        <Logo />
        <Steps />
        <div className="form__step">
          <div className="section__title">What Are You Interested In?</div>
          <div className="section__text">
            Select from the list and add your own interests.
          </div>

          <div className="form__input search__input">
            <input
              type="text"
              className="input"
              placeholder="Add Your Interest..."
            />
            <img src={search} alt="search_icon" className="input__img" />
          </div>
          <div className="form__item">
            <div className="form__item-title">Business</div>
            <div className="interests">
              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Enterpreneurship</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Marketing</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Sales</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Consulting</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">E-commerce</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Retail</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Real Estate</div>
                <div className="interest__border"></div>
              </label>
            </div>
          </div>

          <div className="form__item">
            <div className="form__item-title">Investing & Finance</div>
            <div className="interests">
              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Angle Investing</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Crypto</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Quant Finance</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Venture Capital</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Investment Banking</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Economics</div>
                <div className="interest__border"></div>
              </label>
            </div>
          </div>

          <div className="form__item">
            <div className="form__item-title">Lifestyle</div>
            <div className="interests">
              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Travel</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Fitness</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Food</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Gaming</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Writing</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Dinner Parties</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Poker</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Chess</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Cooking</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Wellness</div>
                <div className="interest__border"></div>
              </label>

              <label className="interest__item">
                <input type="checkbox" className="interest__checkbox" />
                <div className="interest__text">Dinner Parties</div>
                <div className="interest__border"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="step__buttons">
          <Link to="/step3" className=" btn__outline  button prev_step">
            Back
          </Link>
          <Link to="/step5" className=" btn button next_step">
            Next
          </Link>
        </div>
      </main>
    </>
  );
};

export default Step4;

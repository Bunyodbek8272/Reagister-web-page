import React from "react";
import Logo from "../components/Logo";
import Steps from "../components/Steps";
// import images
import checkimge1 from "../image/checkbox1.png";
import checkimge2 from "../image/checkbox2.png";
import checkimge3 from "../image/checkbox3.png";
import checkimge4 from "../image/checkbox4.png";
import checkimge5 from "../image/checkbox5.png";
import checkimge6 from "../image/checkbox6.png";
import checkimge7 from "../image/checkbox7.png";
import checkimge8 from "../image/checkbox8.png";
import checkimge9 from "../image/checkbox9.png";
import checkimge10 from "../image/checkbox10.png";
import checkimge11 from "../image/checkbox11.png";
import checkimge12 from "../image/checkbox12.png";
import { Link } from "react-router-dom";

const Step2 = () => {
  return (
    <>
      <main>
        <Logo />
        <Steps />
        <div className="form__step">
          <div className="section__title">What Are Your Objectives?</div>
          <div className="section__text">
            Select up to 3 objectives. These will be kept private from other
            users but help us find relevant matches.
          </div>
          <div className="form__item">
            <div className="form__item-title">Select Objectives</div>
          </div>

          <div className="checkboxes">
            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />
              <div className="img">
                <img src={checkimge1} alt="img" />
              </div>
              <div className="text">Brainstorm with peers</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />
              <div className="img">
                <img src={checkimge2} alt="img" />
              </div>
              <div className="text">Grow your team</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />
              <div className="img">
                {" "}
                <img src={checkimge3} alt="img" />
              </div>
              <div className="text">Start a company</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />
              <div className="img">
                <img src={checkimge4} alt="img" />
              </div>
              <div className="text">Explore other companies</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />
              <div className="img">
                <img src={checkimge5} alt="img" />
              </div>
              <div className="text">Business development</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />{" "}
              <div className="img">
                <img src={checkimge6} alt="img" />
              </div>
              <div className="text">Invest</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />{" "}
              <div className="img">
                <img src={checkimge7} alt="img" />
              </div>
              <div className="text">Explore new projects</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />{" "}
              <div className="img">
                <img src={checkimge8} alt="img" />
              </div>
              <div className="text">Mentor others</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />{" "}
              <div className="img">
                <img src={checkimge9} alt="img" />
              </div>
              <div className="text">Organize events</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />{" "}
              <div className="img">
                <img src={checkimge10} alt="img" />
              </div>
              <div className="text">Raise funding</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />{" "}
              <div className="img">
                <img src={checkimge11} alt="img" />
              </div>
              <div className="text">Find a cofounder</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>

            <label className="checkbox__item">
              <input type="checkbox" className="checkbox__input" />{" "}
              <div className="img">
                <img src={checkimge12} alt="img" />
              </div>
              <div className="text">Find a cofounder</div>
              <div className="fake2"></div>
              <div className="border"></div>
            </label>
          </div>
        </div>
        <div className="step__buttons">
          <Link to="/step1" className=" btn__outline  button prev_step">
            Back
          </Link>
          <Link to="/step3" className=" btn button next_step">
            Next
          </Link>
        </div>
      </main>
    </>
  );
};

export default Step2;

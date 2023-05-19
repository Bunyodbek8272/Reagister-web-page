import React from "react";
//style scss
import "../styles/form.scss";
import "../styles/radio.scss";
import "../styles/chekbox.scss";
import "../styles/file.scss";
import "../styles/interests.scss";
import "../styles/aboutuser.scss";
import "../styles/finish.scss";

// //images
// import logo from "../image/logo__main.svg";
// import firstimg from "../image/location.svg";
// import secondimg from "../image/crown.svg";
// import thridimg from "../image/frame.svg";
// import fourthimag from "../image/heart.svg";
// import fivethimag from "../image/user-tag.svg";
// import search from "../image/search-normal.svg";
// import radio1 from "../image/radio1.png";
// import radio2 from "../image/radio2.png";
// import radio3 from "../image/radio3.png";
// import radio4 from "../image/radio4.png";
// import radio5 from "../image/radio5.png";
// import radio6 from "../image/radio6.png";
// import checkimge1 from "../image/checkbox1.png";
// import checkimge2 from "../image/checkbox2.png";
// import checkimge3 from "../image/checkbox3.png";
// import checkimge4 from "../image/checkbox4.png";
// import checkimge5 from "../image/checkbox5.png";
// import checkimge6 from "../image/checkbox6.png";
// import checkimge7 from "../image/checkbox7.png";
// import checkimge8 from "../image/checkbox8.png";
// import checkimge9 from "../image/checkbox9.png";
// import checkimge10 from "../image/checkbox10.png";
// import checkimge11 from "../image/checkbox11.png";
// import checkimge12 from "../image/checkbox12.png";
// import galary from "../image/galary.png";
// import link from "../image/link.png";
// import twitter from "../image/twitter.png";
// import user from "../image/user.png";
// import logoF from "../image/logof.png";

// import check from "../image/check.svg";

// function stepForm() {
//   const steps = document.querySelectorAll(".form__step");
//   const prevBtn = document.querySelector(".prev__step");
//   const nextBtn = document.querySelector(".next__step");
//   const form = document.querySelector(".steps__form");
//   const stepNumber = document.querySelector(".step__number");
//   const progress = document.querySelectorAll(".progress__success");

//   form.addEventListener('submit', (e) => e.preventDefault());
//   let formStep = 0;
//   prevBtn.addEventListener('click', () => {
//     formStep--;
//     updateFormSteps();
//   });
//   nextBtn.addEventListener('click', () => {
//     formStep++
//     updateFormSteps();

//   })

//     function updateFormSteps(){
//       steps.forEach((step) => {
//         step.classList.contains('active') && step.classList.remove('active')
//       })
//       steps[formStep].classList.add('active')
// }

const Form = () => {
  return (
    <div className="main__form">
      {/* <main>
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <form action="#" className="steps__form">
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
                        <img
                          src={link}
                          alt="search_icon"
                          className="input__img"
                        />
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

            <div className="form__step">
              <div className="section__title">Tell Us About Your Self</div>
              <div className="section__text">
                Select from the list and add your own interests.
              </div>

              <div className="fullname__user">
                <div className="form__input search__input">
                  <input
                    type="text"
                    className="input"
                    placeholder="First Name"
                  />
                  <img src={user} alt="search_icon" className="input__img" />
                </div>
                <div className="form__input search__input">
                  <input
                    type="text"
                    className="input"
                    placeholder="Last Name"
                  />
                  <img src={user} alt="search_icon" className="input__img" />
                </div>
              </div>
              <div className="text__area">
                <textarea
                  className="textbox"
                  placeholder="About Your Self"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="step__buttons">
            <button className=" btn__outline  button prev_step">Back</button>
            <button className=" btn button next_step">Next</button>
          </div>
        </form>
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
          <a href="#" className="btn btn__finish">
            Finish
          </a>
        </div>
      </main> */}
    </div>
  );
};
export default Form;

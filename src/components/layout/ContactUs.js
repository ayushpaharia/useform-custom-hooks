import React from "react";

import useForm from "../helper/useForm";
import validate from "../helper/validateLogin";

import Brightness1Icon from "@material-ui/icons/Brightness1";

import "../css/ContactUs.css";

function ContactUs() {
  const submit = () => {
    console.log("Submitted Succesfully");
  };
  const { handleChange, handleSubmit, formValues, errors } = useForm(
    submit,
    validate
  );

  const { firstname, lastname, email, password, message } = formValues;

  return (
    <div className="contact">
      <div className="contact__outerContainer">
        <div className="contact__innerContainer">
          <h1>Contact Us</h1>
          <form className="contact__form">
            <div className="input__field">
              <label
                className={
                  errors.firstname?.length ? `form__error__label` : null
                }
                htmlFor="firstname"
              >
                First name
              </label>
              <input
                className={
                  errors.firstname?.length &&
                  `form__error__field placeholder__error`
                }
                type="text"
                name="firstname"
                placeholder="Santa"
                value={firstname}
                onChange={handleChange}
              />
            </div>

            <div className="input__field">
              <label
                className={errors.lastname?.length && `form__error__label`}
                htmlFor="lastname"
              >
                Last name
              </label>
              <input
                className={
                  errors.lastname?.length &&
                  `form__error__field placeholder__error`
                }
                type="text"
                name="lastname"
                placeholder="Claus"
                value={lastname}
                onChange={handleChange}
              />
            </div>

            <div className="input__field">
              <label
                className={errors.email?.length && `form__error__label`}
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className={
                  errors.email?.length &&
                  `form__error__field placeholder__error`
                }
                type="text"
                name="email"
                placeholder="blizzard@gmail.com"
                value={email}
                onChange={handleChange}
              />
            </div>

            <div className="input__field">
              <label
                className={errors.password?.length && `form__error__label`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={errors.password?.length && `form__error__field`}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div className="input__area">
              <label htmlFor="message">Message (optional)</label>
              <textarea
                name="message"
                value={message}
                placeholder="Enter a message"
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
        <div className="form__button">
          <button onClick={handleSubmit} className="submit__button">
            Send Message
          </button>
        </div>
      </div>
      {errors.firstname?.length ||
      errors.lastname?.length ||
      errors.email?.length ||
      errors.password?.length ? (
        <div className="form__errors__outer">
          <div className="form__errors__inner">
            {Object.values(errors).map((errorField) => {
              if (errorField?.length) {
                return errorField.map((error) => (
                  <p>
                    <Brightness1Icon style={{ fontSize: "7px" }} />
                    <span>{error}</span>
                  </p>
                ));
              }
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ContactUs;

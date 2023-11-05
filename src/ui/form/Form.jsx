/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

import Button from "../button/Button";

import "./Form.scss";

function Form({ className, onSubmit, children, heading, buttonContent }) {
  const { pathname } = useLocation();

  return (
    <form onSubmit={onSubmit} className={`form ${className}`}>
      <h1 className="form__heading">{heading}</h1>
      <div className="form__input-box">{children}</div>

      <div style={{ textAlign: "center" }}>
        <Button className="form__btn">{buttonContent}</Button>
        {pathname === "/login" && (
          <span>
            New to Welly? <Link to="/signup">Sign up now.</Link>
          </span>
        )}
        {pathname === "/signup" && (
          <span>
            Already have an account? <Link to="/login"> Sign in now.</Link>
          </span>
        )}
      </div>
    </form>
  );
}

export default Form;

/* eslint-disable react/prop-types */
import "./Input.scss";

function Input({ type, placeholder, className }) {
  return (
    <input
      className={`input ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;

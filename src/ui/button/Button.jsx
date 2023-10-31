import "./Button.scss";

// eslint-disable-next-line react/prop-types
function Button({ className, onClick, type, children }) {
  return (
    <button
      onClick={onClick}
      className={`button ${className} ${
        type === "outline" ? "button--outline" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;

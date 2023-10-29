import "./Heading.scss";

// eslint-disable-next-line react/prop-types
function Heading({ title, subtitle }) {
  return (
    <div className="heading">
      <h2 className="heading__title">{title}</h2>
      <p className="heading__subtitle">{subtitle}</p>
    </div>
  );
}

export default Heading;

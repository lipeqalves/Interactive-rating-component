/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ onClick, name }) => {
  return (
    <button className="btn-submit" onClick={onClick}>
      {name}
    </button>
  );
};

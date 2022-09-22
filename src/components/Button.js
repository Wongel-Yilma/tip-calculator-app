import React from "react";
import "../css/style.css";

const Button = ({ value, selected, setSelected, type }) => {
  const isSelected = selected === value;
  const handleClick = (e) => {
    e.preventDefault();
    setSelected(value);
  };
  if (value === "Custom") {
    return (
      <button onClick={handleClick} className="button  button--custom">
        {value}
        {typeof value === "string" ? null : "%"}
      </button>
    );
  }
  return (
    <button
      onClick={handleClick}
      className={`button  ${isSelected ? "button--selected" : ""}`}
    >
      {value}
      {typeof value === "string" ? null : "%"}
    </button>
  );
};

export default Button;

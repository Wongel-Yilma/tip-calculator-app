import React from "react";
import "../css/style.css";

const Button = ({
  value,
  selected,
  setSelected,
  type,
  customPercentage,
  setCustomPercentage,
}) => {
  const isSelected = selected === value;
  const handleClick = (e) => {
    e.preventDefault();
    setSelected(value);
  };

  const handleChange = (e) => {
    setCustomPercentage(e.target.value);
  };
  if (value === "Custom") {
    if (value === selected) {
      return (
        <input
          style={{ height: "5.2rem", width: "100%" }}
          value={customPercentage}
          onChange={handleChange}
        />
      );
    } else {
      return (
        <button onClick={handleClick} className="button  button--custom">
          {value}
          {typeof value === "string" ? null : "%"}
        </button>
      );
    }
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

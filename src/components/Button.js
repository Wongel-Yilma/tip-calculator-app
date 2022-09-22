import React from "react";
import "../css/style.css";

const Button = ({ value, isSelected }) => {
  return (
    <button
      className={`button ${typeof value === "string" ? "button--custom" : ""}`}
    >
      {value}
      {typeof value === "string" ? null : "%"}
    </button>
  );
};

export default Button;

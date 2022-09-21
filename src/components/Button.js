import React from "react";
import "../css/style.css";

const Button = ({ value, isSelected }) => {
  return (
    <button className="button">
      {value}
      {typeof value === "string" ? null : "%"}
    </button>
  );
};

export default Button;

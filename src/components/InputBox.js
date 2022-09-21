import React from "react";
import "../css/style.css";

const InputBox = ({
  formatOption = null,
  value,
  dispatch,
  label,
  actionType,
  type = "",
}) => {
  const inputValue =
    formatOption && value
      ? new Intl.NumberFormat(formatOption).format(value)
      : value;
  return (
    <div className="input__box">
      <label htmlFor="label">{label}</label>
      <input
        type={type}
        name="label"
        value={inputValue}
        onChange={(e) => dispatch({ actionType, newData: e.target.value })}
      />
    </div>
  );
};

export default InputBox;

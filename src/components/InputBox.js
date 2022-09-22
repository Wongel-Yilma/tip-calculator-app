import React from "react";
import "../css/style.css";

const InputBox = ({ value, dispatch, label, actionType, type = "", Icon }) => {
  const inputValue = value;
  const handleChange = (e) => {
    dispatch({ type: actionType, newData: e.target.value });
  };
  return (
    <div className="input__box">
      <label htmlFor="label">{label}</label>
      <div className="input__icons">{Icon}</div>
      <input
        type={type}
        name="label"
        value={inputValue}
        onChange={handleChange}
        placeholder={`${actionType === "PEOPLE" ? "0" : "0.00"}`}
      />
    </div>
  );
};

export default InputBox;

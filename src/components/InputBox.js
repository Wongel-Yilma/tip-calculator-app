import React from "react";
import "../css/style.css";

const InputBox = ({
  value,
  dispatch,
  formatter,
  label,
  actionType,
  type = "",
  Icon,
}) => {
  console.log(value);
  const inputValue = value;
  // value !== 0 && formatter != null ? formatter.format(value) : 0;
  const handleChange = (e) => {
    console.log("Handling change");
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
      />
    </div>
  );
};

export default InputBox;

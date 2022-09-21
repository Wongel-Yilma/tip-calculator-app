import React from "react";

const DisplayBox = ({ name, amount }) => {
  return (
    <div className="displayBox">
      <div className="title">
        <p className="title--name">{name}</p>
        <p className="title--description">/person</p>
      </div>
      <div className="amount">${amount}</div>
    </div>
  );
};

export default DisplayBox;

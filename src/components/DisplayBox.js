import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const DisplayBox = ({ name, amount }) => {
  return (
    <div className="displayBox">
      <div className="title">
        <p className="title--name">{name}</p>
        <p className="title--description">/person</p>
      </div>
      <div className="amount">${formatter.format(amount)}</div>
    </div>
  );
};

export default DisplayBox;

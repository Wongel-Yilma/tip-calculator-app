import React from "react";

import Calculator from "./Calculator";
import Display from "./Display";
import CalculatorContextProvider from "./contexts/CalculatorContextProvider";

const MainCalculator = () => {
  return (
    <div className="container">
      <CalculatorContextProvider>
        <Calculator />
        <Display />
      </CalculatorContextProvider>
    </div>
  );
};

export default MainCalculator;

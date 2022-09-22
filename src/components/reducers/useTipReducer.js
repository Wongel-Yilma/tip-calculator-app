const initialState = {
  tipPercentage: 0,
  bill: 0,
  people: 0,
};

const useTipReducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "TIP_PERCENTAGE":
      return { ...state, tipPercentage: action.newData };
    case "BILL":
      return { ...state, bill: action.newData };
    case "PEOPLE":
      return { ...state, people: action.newData };
    case "RESET":
      return { ...state, initialState };
    default:
      return state;
  }
};

export default useTipReducer;

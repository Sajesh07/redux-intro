import { combineReducers, createStore } from "redux";

const initialstateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialstateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialstateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initialstateCustomer, action) {
  switch (action.type) {
    case "customer/createName":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 1000,
//     loanPurpose: "Buy a car",
//   },
// });
// console.log(store.getState());
// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

//action creators

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
store.dispatch(deposit(500));
console.log(store.getState());
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
store.dispatch(withdraw(100));

console.log(store.getState());
function requestLoan(amount, loanPurpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      loanPurpose,
    },
  };
}
store.dispatch(requestLoan(1000));

console.log(store.getState());
function payLoan() {
  return { type: "account/payLoan" };
}
store.dispatch(payLoan(1000));

console.log(store.getState());

store.dispatch({
  type: "customer/createName",
  payload: {
    fullName: "Martin",
    nationalID: "passport",
    createdAt: new Date().toISOString(),
  },
});
console.log(store.getState());


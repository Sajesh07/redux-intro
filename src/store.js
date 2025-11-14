// import { applyMiddleware, combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice.js";
import customerReducer from "./features/customers/customerSlice.js";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
// const store = createStore(rootReducer, applyMiddleware(thunk));
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

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialstateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialstateCustomer,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
  },
});

export const { createCustomer } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialstateCustomer, action) {
//   switch (action.type) {
//     case "customer/createName":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload.fullName };
//     default:
//       return state;
//   }
// }

// //   store.dispatch({
// //     type: "customer/createName",
// //     payload: {
// //       fullName: "Martin",
// //       nationalID: "passport",
// //       createdAt: new Date().toISOString(),
// //     },
// //   });
// //   console.log(store.getState());

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createName",
//     payload: {
//       fullName: fullName,
//       nationalID: nationalID,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }

// export function updateCustomer(fullName) {
//   return {
//     type: "customer/updateName",
//     fullName: "Sajesh",
//   };
// }

const initialstateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initialstateCustomer, action) {
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

//   store.dispatch({
//     type: "customer/createName",
//     payload: {
//       fullName: "Martin",
//       nationalID: "passport",
//       createdAt: new Date().toISOString(),
//     },
//   });
//   console.log(store.getState());

export function createName(fullName, nationalID) {
  return {
    type: "customer/createName",
    payload: {
      fullName: "Martin",
      nationalID: "passport",
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    fullName: "Sajesh",
  };
}

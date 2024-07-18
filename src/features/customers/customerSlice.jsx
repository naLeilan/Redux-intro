const initialStateCustomer = {
  fullName: "",
  ID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        ID: action.payload.ID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateCustomer":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, ID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      ID,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updatName(fullName) {
  return { type: "account/updatName", payload: fullName };
}

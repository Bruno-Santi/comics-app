import { GET_COMICS } from "./action";

const initialState = {
  comics: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMICS:
      return {
        ...state,
        comics: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
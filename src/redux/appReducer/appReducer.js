import { SET_LOADING } from "./actions";

const initialState = {
  isLoading: false,
  messages: [],
  errorMessages: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

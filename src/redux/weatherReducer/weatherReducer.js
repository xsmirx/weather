import { SET_WEATHER } from "./actions";

const initialState = null;

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

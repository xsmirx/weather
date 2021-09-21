import { SET_GEOLOCATION } from "./actions";

//initial state
const initialState = { latitude: null, longitude: null };

//reducer
export const geoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      };
    default:
      return state;
  }
};

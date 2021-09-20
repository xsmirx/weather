export const SET_GEOLOCATION = "appReducer/SET_GEOLOCATION";

const initialState = { geolocation: null };

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {
        ...state,
        geolocation: action.payload,
      };
    default:
      return state;
  }
};

export const setGeolocationAC = (payload) => ({
  type: SET_GEOLOCATION,
  payload,
});

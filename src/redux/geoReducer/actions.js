//action types
export const SET_GEOLOCATION = "geoReducer/SET_GEOLOCATION";

//action creators
export const setGeolocationAC = (latitude, longitude) => ({
  type: SET_GEOLOCATION,
  latitude,
  longitude,
});

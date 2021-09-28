//action types
export const SET_WEATHER = "weatherReducer/SET_WEATHER";
export const SET_PLACES = "weatherReducer/SET_PLACES";

//action creators
export const setWeatherAC = (payload) => ({ type: SET_WEATHER, payload });
export const setPlacesAC = (payload) => ({ type: SET_PLACES, payload });

//action types for weatherSaga
export const GET_WEATHER_ON_COORDS = "weatherSaga/GET_WEATHER_ON_COORDS";
export const GET_WEATHER_ON_PLACENAME = "weatherSaga/GET_WEATHER_ON_PLACENAME";

//action creators for weatherSaga
export const getWeatherOnCoordsAC = () => ({
  type: GET_WEATHER_ON_COORDS,
});
export const getWeatherOnPlaceNameAC = (placeName) => ({
  type: GET_WEATHER_ON_PLACENAME,
  placeName,
});

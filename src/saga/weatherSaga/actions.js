//action types for weatherSaga
export const GET_WEATHER_ON_COORDS = "weatherSaga/GET_WEATHER_ON_COORDS";

//action creators for weatherSaga
export const getWeatherOnCoordsAC = () => ({
  type: GET_WEATHER_ON_COORDS,
});

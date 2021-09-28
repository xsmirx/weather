//action types for weatherSaga
export const FIND_PLACES = "weatherSaga/FIND_PLACES";
export const GET_USER_WEATHER = "weatherSaga/GET_USER_WEATHER";
export const GET_WEATHER_BY_ID = "weatherSaga/GET_WEATHER_BY_ID";
export const GET_WEATHER_BY_ZIPCODE = "weatherSaga/GET_WEATHER_BY_ZIPCODE";
export const GET_WEATHER_BY_COORDS = "weatherSaga/GET_WEATHER_ON_COORDS";
export const GET_WEATHER_BY_PLACENAME = "weatherSaga/GET_WEATHER_ON_PLACENAME";

//action creators for weatherSaga
export const getPlacesAC = (placeName) => ({ type: FIND_PLACES, placeName });
export const getUserWeatherAC = () => ({ type: GET_USER_WEATHER });
export const getWeatherByIDAC = (cityId) => ({
  type: GET_WEATHER_BY_ID,
  cityId,
});
export const getWeatherByZIPCodeAC = (zipCode, countryCode) => ({
  type: GET_WEATHER_BY_ZIPCODE,
  zipCode,
  countryCode,
});
export const getWeatherByCoordsAC = (lat, lon) => ({
  type: GET_WEATHER_BY_COORDS,
  lat,
  lon,
});
export const getWeatherByPlaceNameAC = (placeName) => ({
  type: GET_WEATHER_BY_PLACENAME,
  placeName,
});

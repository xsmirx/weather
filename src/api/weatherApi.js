import * as axios from "axios";
import instance from "./instance";

const getPlaces = (placeName) => {
  return instance.get(`find?q=${placeName}`).then((response) => response.data);
};

const getWeatherByCityName = (cityName) => {
  return instance
    .get(`weather?q=${cityName}`)
    .then((response) => response.data);
};

const getWeaatherByCityID = (cityId) => {
  return instance.get(`weather?id=${cityId}`).then((response) => response.data);
};

const getWeatherByCoords = (lat, lon) => {
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};

const gerWeatherByZIPCode = (zipCode, countryCode) => {
  return axios
    .get(`weather?zip=${zipCode},${countryCode}`)
    .then((response) => response.data);
};

export const weatherApi = {
  getPlaces,
  getWeatherByCityName,
  getWeaatherByCityID,
  getWeatherByCoords,
  gerWeatherByZIPCode,
};

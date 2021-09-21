import * as axios from "axios";
import { apiKey } from "./config";

const getWeatherOnCoords = (lat, lon) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    )
    .then((response) => response.data)
};

export const weatherApi = { getWeatherOnCoords };

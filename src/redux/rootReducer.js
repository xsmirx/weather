import { combineReducers } from "redux";
import { appReducer } from "./appReducer/appReducer";
import { geoReducer } from "./geoReducer/geoReducer";
import { weatherReducer } from "./weatherReducer/weatherReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  geo: geoReducer,
  weather: weatherReducer,
});

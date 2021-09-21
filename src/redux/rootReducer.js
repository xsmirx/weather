import { combineReducers } from "redux";
import { appReducer } from "./appReducer/appReducer";
import { geoReducer } from "./geoReducer/geoReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  geo: geoReducer,
});

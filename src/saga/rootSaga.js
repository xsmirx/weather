import { spawn } from "redux-saga/effects";
import { geoSaga } from "./geoSaga/geoSaga";
import { weatherSaga } from "./weatherSaga/weatherSaga";

export function* rootSaga() {
  // const sagas = [geoSaga, weatherSaga];

  yield spawn(geoSaga);
  yield spawn(weatherSaga);
}

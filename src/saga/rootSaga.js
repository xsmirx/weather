import { fork } from "redux-saga/effects";
import { geoSaga } from "./geoSaga/geoSaga";
import { weatherSaga } from "./weatherSaga/weatherSaga";

export function* rootSaga() {
  yield fork(geoSaga);
  yield fork(weatherSaga);
}

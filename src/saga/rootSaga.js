import { fork } from "redux-saga/effects";
import { geoSaga } from "./geoSaga";

export function* rootSaga() {
  yield fork(geoSaga);
}

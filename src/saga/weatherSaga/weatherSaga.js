import { put, select, takeEvery } from "@redux-saga/core/effects";
import { weatherApi } from "../../api/weatherApi";
import { setLoadingAC } from "../../redux/appReducer/actions";
import { GET_WEATHER_ON_COORDS } from "./actions";

//watcher
export function* weatherSaga() {
  yield takeEvery(GET_WEATHER_ON_COORDS, getWeatherOnCoords);
}

//worker
function* getWeatherOnCoords() {
  yield put(setLoadingAC(true));
  let lat = yield select((state) => state.geo.latitude);
  let lon = yield select((state) => state.geo.longitude);
  const weather = yield weatherApi.getWeatherOnCoords(lat, lon);
  yield put(setLoadingAC(false));
  console.log(weather);
}

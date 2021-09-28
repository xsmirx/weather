import { put, select, takeLeading, call } from "@redux-saga/core/effects";

import { weatherApi } from "../../api/weatherApi";

import { GeolocationError } from "../../classes/GeolocationError";
import { setErrorAC, setLoadingAC } from "../../redux/appReducer/actions";
import { setWeatherAC } from "../../redux/weatherReducer/actions";
import { FIND_PLACES, GET_USER_WEATHER } from "./actions";

//watcher
export function* weatherSaga() {
  yield takeLeading(GET_USER_WEATHER, getUserCoords);
  yield takeLeading(FIND_PLACES, getPlaces);
}

//workers
function* getUserCoords() {
  try {
    yield put(setLoadingAC(true));
    const lat = yield select((state) => state.geo.latitude);
    const lon = yield select((state) => state.geo.longitude);
    if (!lat || !lon) {
      throw new GeolocationError("Requires permission to use geolocation");
    }
    const weather = yield call(weatherApi.getWeatherByCoords, lat, lon);
    yield put(setWeatherAC(weather));
  } catch (error) {
    yield put(setErrorAC(error));
  } finally {
    yield put(setLoadingAC(false));
  }
}

function* getPlaces({ placeName }) {
  try {
    yield put(setLoadingAC(true));
    const response = yield call(weatherApi.getPlaces, placeName);
    yield console.log(response);
  } catch (error) {
    yield put(setErrorAC(error));
  } finally {
    yield put(setLoadingAC(false));
  }
}

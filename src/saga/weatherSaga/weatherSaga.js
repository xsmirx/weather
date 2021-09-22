import { put, select, takeEvery } from "@redux-saga/core/effects";
import { weatherApi } from "../../api/weatherApi";
import { setErrorAC, setLoadingAC } from "../../redux/appReducer/actions";
import { GET_WEATHER_ON_COORDS } from "./actions";

//watcher
export function* weatherSaga() {
  yield takeEvery(GET_WEATHER_ON_COORDS, getWeatherOnCoords);
}

//worker
function* getWeatherOnCoords() {
  try {
    yield put(setLoadingAC(true));
    const lat = yield select((state) => state.geo.latitude);
    const lon = yield select((state) => state.geo.longitude);
    if (!lat || !lon) {
      throw new Error("Requires permission to use geolocation");
    }
    const weather = yield weatherApi.getWeatherOnCoords(lat, lon);
    console.log(weather);
  } catch (error) {
    yield put(setErrorAC(error));
  } finally {
    yield put(setLoadingAC(false));
  }
}

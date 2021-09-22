import { put, select, takeLeading } from "@redux-saga/core/effects";
import { weatherApi } from "../../api/weatherApi";
import { GeolocationError } from "../../classes/GeolocationError";
import { setErrorAC, setLoadingAC } from "../../redux/appReducer/actions";
import { setWeatherAC } from "../../redux/weatherReducer/actions";
import { GET_WEATHER_ON_COORDS } from "./actions";

//watcher
export function* weatherSaga() {
  yield takeLeading(GET_WEATHER_ON_COORDS, getWeatherOnCoords);
}

//worker
function* getWeatherOnCoords() {
  try {
    yield put(setLoadingAC(true));
    const lat = yield select((state) => state.geo.latitude);
    const lon = yield select((state) => state.geo.longitude);
    if (!lat || !lon) {
      throw new GeolocationError("Requires permission to use geolocation");
    }
    const weather = yield weatherApi.getWeatherOnCoords(lat, lon);
    yield put(setWeatherAC(weather));
  } catch (error) {
    yield put(setErrorAC(error));
  } finally {
    yield put(setLoadingAC(false));
  }
}

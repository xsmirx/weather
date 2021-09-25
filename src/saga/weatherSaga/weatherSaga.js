import { put, select, takeLeading, call } from "@redux-saga/core/effects";
import { apiKey } from "../../api/config";
import { weatherApi } from "../../api/weatherApi";
import { GeolocationError } from "../../classes/GeolocationError";
import { setErrorAC, setLoadingAC } from "../../redux/appReducer/actions";
import { setWeatherAC } from "../../redux/weatherReducer/actions";
import { GET_WEATHER_ON_COORDS, GET_WEATHER_ON_PLACENAME } from "./actions";

//watcher
export function* weatherSaga() {
  yield takeLeading(GET_WEATHER_ON_COORDS, getWeatherOnCoords);
  yield takeLeading(GET_WEATHER_ON_PLACENAME, getWeatherOnPlaceName);
}

//workers
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

function* getWeatherOnPlaceName({ placeName }) {
  try {
    yield put(setLoadingAC(true));
    const response = yield call(
      fetch,
      `https://api.openweathermap.org/data/2.5/find?q=${placeName}&appid=${apiKey}&units=metric`
    );
    yield console.log(response);
  } catch (error) {
    yield put(setErrorAC(error));
  } finally {
    yield put(setLoadingAC(false));
  }
}

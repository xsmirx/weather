import { fork } from "@redux-saga/core/effects";
import { setGeolocationAC } from "../../redux/geoReducer/actions";
import { getWeatherOnCoordsAC } from "./../weatherSaga/actions";
import { store } from "../../store";

//watcher
export function* geoSaga() {
  yield fork(getGeoCoords);
}

//workers
function* getGeoCoords() {
  yield navigator.geolocation.getCurrentPosition((position) => {
    store.dispatch(
      setGeolocationAC(position.coords.latitude, position.coords.longitude)
    );
    store.dispatch(getWeatherOnCoordsAC());
  });
}

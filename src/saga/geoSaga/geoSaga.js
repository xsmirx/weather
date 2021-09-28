import { fork } from "@redux-saga/core/effects";
import { setGeolocationAC } from "../../redux/geoReducer/actions";
import { store } from "../../store";
import { getUserWeatherAC } from "../weatherSaga/actions";

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
    store.dispatch(getUserWeatherAC());
  });
}

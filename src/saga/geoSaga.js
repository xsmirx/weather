import { setGeolocationAC } from "../redux/appReducer/appReducer";
import { store } from "../store";

export function* geoSaga() {
  yield navigator.geolocation.getCurrentPosition((position) => {
    store.dispatch(
      setGeolocationAC({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
      })
    );
  });
}

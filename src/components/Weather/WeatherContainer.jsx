import { connect } from "react-redux";
import { getWeatherOnCoordsAC } from "../../saga/weatherSaga/actions";
import Weather from "./Weather";

const mstp = (state) => ({
  name: state.weather?.name,
  country: state.weather?.sys?.country,
  temp: state.weather?.main?.temp,
  feelsLike: state.weather?.main?.feels_like,
  clouds: state.weather?.weather[0]?.description,
  wind: state.weather?.wind?.speed,
  iconLink: `http://openweathermap.org/img/wn/${state.weather?.weather[0]?.icon}@4x.png`,
});
const mdtp = (dispatch) => ({
  onRefresh: () => dispatch(getWeatherOnCoordsAC()),
});

export default connect(mstp, mdtp)(Weather);

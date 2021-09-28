import { connect } from "react-redux";
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

export default connect(mstp, null)(Weather);

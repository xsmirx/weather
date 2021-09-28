import { connect } from "react-redux";
import Weather from "./Weather";

const mstp = (state) => ({
  isLoading: state.weather.weatherCard.isLoading,
  weather: state.weather.weatherCard.weatherObject,
});

export default connect(mstp, null)(Weather);

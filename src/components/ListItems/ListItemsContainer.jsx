import { connect } from "react-redux";
import { setWeatherAC } from "../../redux/weatherReducer/actions";
import ListItems from "./ListItems";

const mstp = (state) => ({
  list: state.weather.listPlaces,
});
const mdtp = (dispatch) => ({
  setWeather: (weatherObj) => dispatch(setWeatherAC(weatherObj)),
});

export default connect(mstp, mdtp)(ListItems);

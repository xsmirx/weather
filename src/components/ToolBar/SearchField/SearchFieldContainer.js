import { connect } from "react-redux";
import { getWeatherOnPlaceNameAC } from "../../../saga/weatherSaga/actions";
import SearchField from "./SearchField";

const mdtp = (dispatch) => ({
  getWeather: (placeName) => dispatch(getWeatherOnPlaceNameAC(placeName)),
});

export default connect(null, mdtp)(SearchField);

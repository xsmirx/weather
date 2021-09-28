import { connect } from "react-redux";
import { getPlacesAC } from "../../../saga/weatherSaga/actions";
import SearchField from "./SearchField";

const mdtp = (dispatch) => ({
  getPlaces: (placeName) => dispatch(getPlacesAC(placeName)),
});

export default connect(null, mdtp)(SearchField);

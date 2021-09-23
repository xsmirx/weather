import { connect } from "react-redux";
import { delErrorAC, setVisibleError } from "../../redux/appReducer/actions";
import AlertError from "./AlertError";

const mstp = (state) => ({
  isVisible: state.app.error.isVisible,
  errorName: state.app.error.name,
  errorMessage: state.app.error.message,
});

const mdtp = (dispatch) => ({
  onClose: () => {
    dispatch(setVisibleError(false));
    setTimeout(() => dispatch(delErrorAC()), 300);
  },
});

export default connect(mstp, mdtp)(AlertError);

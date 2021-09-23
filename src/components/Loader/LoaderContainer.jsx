import { connect } from "react-redux";
import Loader from "./Loader";

const mstp = (state) => ({ isLoading: state.app.isLoading });

export default connect(mstp, null)(Loader);

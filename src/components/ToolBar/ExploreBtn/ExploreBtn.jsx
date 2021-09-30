import React from "react";
import { connect } from "react-redux";
import ExploreIcon from "@mui/icons-material/Explore";
import { IconButton } from "@mui/material";
import { getUserWeatherAC } from "../../../saga/weatherSaga/actions";

const ExploreBtn = ({ getUserWeather }) => {
  return (
    <IconButton
      aria-label="Weather on my location"
      title="Weather on my location"
      sx={{ marginLeft: "16px" }}
      onClick={() => getUserWeather()}
    >
      <ExploreIcon />
    </IconButton>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUserWeather: () => dispatch(getUserWeatherAC()),
});

export default connect(null, mapDispatchToProps)(ExploreBtn);

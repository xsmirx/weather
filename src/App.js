import { Container } from "@mui/material";
import AlertErrorContainer from "./components/AlertError/AlertErrorContainer";
import BgImage from "./images/bg3.jpg";
import LoaderContainer from "./components/Loader/LoaderContainer";
import WeatherContainer from "./components/Weather/WeatherContainer";
import BackgroundImage from "./components/BackgroungImage/BackgroundImage";

const App = () => {
  return (
    <>
      <BackgroundImage image={BgImage} />
      <LoaderContainer />
      <AlertErrorContainer />
      <Container maxWidth="xs" sx={{ paddingTop: "16px" }}>
        <WeatherContainer />
      </Container>
    </>
  );
};

export default App;

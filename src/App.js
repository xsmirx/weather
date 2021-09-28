import BgImage from "./images/bg3.jpg";
import { Container } from "@mui/material";
import AlertErrorContainer from "./components/AlertError/AlertErrorContainer";
import LoaderContainer from "./components/Loader/LoaderContainer";
import WeatherContainer from "./components/Weather/WeatherContainer";
import BackgroundImage from "./components/BackgroungImage/BackgroundImage";
import ToolBar from "./components/ToolBar/Toolbar";

const App = () => {
  return (
    <>
      <BackgroundImage image={BgImage} />
      <LoaderContainer />
      <AlertErrorContainer />
      <ToolBar />
      <Container maxWidth="xs">
        <WeatherContainer />
      </Container>
    </>
  );
};

export default App;

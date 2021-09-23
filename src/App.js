import { Container } from "@mui/material";
import AlertErrorContainer from "./components/alertError/AlertErrorContainer";
import LoaderContainer from "./components/Loader/LoaderContainer";
import WeatherContainer from "./components/Weather/WeatherContainer";

const App = () => {
  return (
    <>
      <LoaderContainer />
      <AlertErrorContainer />
      <Container maxWidth="xs" sx={{ paddingTop: "16px" }}>
        <WeatherContainer />
      </Container>
    </>
  );
};

export default App;

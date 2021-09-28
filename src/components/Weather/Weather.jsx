import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";

const StyledTemp = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: baseline;
  img {
    height: 80px;
  }
`;

const Weather = ({ isLoading, weather }) => {
  return (
    <Box maxWidth="444px" sx={{ margin: "16px 0 0 0" }}>
      {weather && (
        <Card
          variant="elevation"
          elevation={5}
          sx={{
            backdropFilter: "blur(4px)",
            background: "rgba(255, 255, 255, 0.25)",
          }}
        >
          <CardContent>
            <Typography variant="h4">
              {weather.name}, {weather.sys.country}
            </Typography>

            <StyledTemp>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="weather icon"
              />
              <Typography variant="h2">{`${
                Math.round(weather.main.temp * 10) / 10
              }°C`}</Typography>
            </StyledTemp>
            <Box>
              <Typography variant="body2">{`Feels like: ${Math.round(
                weather.main.feels_like
              )}°C`}</Typography>
              <Typography variant="body2">{`Clouds: ${weather.weather[0].description}`}</Typography>
              <Typography variant="body2">{`Wind: ${weather.wind.speed}m/s`}</Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Weather;

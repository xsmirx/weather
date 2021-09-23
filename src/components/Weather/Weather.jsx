import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";
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

const Weather = ({
  name,
  country,
  temp,
  feelsLike,
  clouds,
  wind,
  iconLink,
  onRefresh,
}) => {
  return (
    <Box maxWidth="444px">
      {name && temp && (
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
              {name}, {country}
            </Typography>

            <StyledTemp>
              <img src={iconLink} alt="weather icon" />
              <Typography variant="h2">{`${
                Math.round(temp * 10) / 10
              }°C`}</Typography>
            </StyledTemp>
            <Box>
              <Typography variant="body2">{`Feels like: ${feelsLike}°C`}</Typography>
              <Typography variant="body2">{`Clouds: ${clouds}`}</Typography>
              <Typography variant="body2">{`Wind: ${wind}m/s`}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <IconButton size="small" onClick={onRefresh}>
              <SyncIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default Weather;

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchFieldContainer from "./SearchField/SearchFieldContainer";

export default function ToolBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: "1", display: { xs: "none", sm: "block" } }}
        >
          Weather App
        </Typography>
        <SearchFieldContainer />
      </Toolbar>
    </AppBar>
  );
}

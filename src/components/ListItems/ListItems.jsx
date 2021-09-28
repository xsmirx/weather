import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import styled from "styled-components";

const StiledList = styled.div`
  position: fixed;
  z-index: 100;
  width: 35%;
  padding: 0 17px 0 0;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.75);
  @media (max-width: 600px) {
    width: 100%;
    padding-right: 32px;
  }
`;

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

const ListItems = ({ list, setWeather }) => {
  const items = list.map((item) => {
    return (
      <ListItemButton key={item.id} onClick={() => setWeather(item)}>
        <ListItemText primary={`${item.name}, ${item.sys.country}`} />
        <ListItemText sx={{ textAlign: "end" }}>
          <Typography variant="caption">{`Lat: ${item.coord.lat}, Lon: ${item.coord.lon}`}</Typography>
        </ListItemText>
      </ListItemButton>
    );
  });
  return (
    <>
      {!!list.length && (
        <StiledList>
          <List sx={style}>{items}</List>
        </StiledList>
      )}
    </>
  );
};

export default ListItems;

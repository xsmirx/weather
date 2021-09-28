import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material/styles";
import { useFormik } from "formik";
import ListItemsContainer from "../../ListItems/ListItemsContainer";

const StyledForm = styled("form")`
  width: 35%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchField = ({ getPlaces }) => {
  const formik = useFormik({
    initialValues: {
      placeName: "",
    },
    onSubmit: (values) => {
      getPlaces(values.placeName);
    },
  });
  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            id="placeName"
            name="placeName"
            onChange={formik.handleChange}
            value={formik.values.placeName}
            placeholder="Search of place…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <ListItemsContainer />
      </StyledForm>
    </>
  );
};

export default SearchField;

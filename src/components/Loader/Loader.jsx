import { LinearProgress } from "@mui/material";
import styled from "styled-components";

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;

const Loader = ({ isLoading }) => {
  return <StyledLoading>{isLoading && <LinearProgress />}</StyledLoading>;
};

export default Loader;

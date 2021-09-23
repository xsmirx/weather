import { Alert, AlertTitle, Slide, Snackbar } from "@mui/material";

const AlertError = ({ isVisible, errorName, errorMessage, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <Snackbar
        open={isVisible}
        TransitionComponent={Slide}
        TransitionProps={{ direction: "up" }}
        key={"up"}
      >
        <Alert variant="standard" severity="error" onClose={handleClose}>
          <AlertTitle>{errorName}</AlertTitle>
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertError;

import { Alert, AlertTitle, Snackbar } from "@mui/material";

const AlertError = ({ isVisible, errorName, errorMessage, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <Snackbar open={isVisible}>
        <Alert variant="filled" severity="error" onClose={handleClose}>
          <AlertTitle>{errorName}</AlertTitle>
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertError;

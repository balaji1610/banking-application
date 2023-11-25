import { Grid } from "@mui/material";
import Import_Material from "../utils/Import_Material";
type ModelProps = {
  open: boolean;
  title?: string;
  handleClose: () => void;
};
export default function Model_Comp({ open, handleClose, title }: ModelProps) {
  //all imports
  const {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } = Import_Material;
  return (
    <div>
      <Dialog
        open={open}
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h3>{title}</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h2
              style={{
                textAlign: "center",
              }}
            ></h2>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container xs={12}>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="error"></Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>{" "}
        </DialogActions>
      </Dialog>
    </div>
  );
}

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

type ModelProps = {
  open: boolean;
  title?: string;
  handleClose: () => void;
};
export default function Model_Comp({ open, handleClose, title }: ModelProps) {
  const mobile = useMediaQuery("(min-width:600px)");
  return (
    <div>
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
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
            <Grid item xs={mobile ? 3 : 2}></Grid>
            <Grid item xs={mobile ? 3 : 4}>
              <Button variant="contained" color="error"></Button>
            </Grid>
            <Grid item xs={mobile ? 3 : 4}>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={mobile ? 3 : 2}></Grid>
          </Grid>{" "}
        </DialogActions>
      </Dialog>
    </div>
  );
}

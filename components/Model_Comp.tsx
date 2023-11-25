import { Grid } from "@mui/material";
import Import_Material from "../utils/Import_Material";
import AddFromStyle from "../styles/AddFrom.module.css";
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

    TextField,
  } = Import_Material;
  return (
    <div>
      <Dialog
        open={open}
        maxWidth="xs"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <Grid container xs={12}>
            <div className={AddFromStyle.Addform_Parent}>
              <div>
                <TextField />
              </div>
              <div>
                {" "}
                <TextField />
              </div>
              <div>
                {" "}
                <TextField />
              </div>
              <div>
                {" "}
                <TextField />
              </div>
              <div>
                <Button variant="contained" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </div>
          </Grid>{" "}
        </DialogActions>
      </Dialog>
    </div>
  );
}

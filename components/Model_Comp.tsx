import { Grid } from "@mui/material";
import Import_Material from "../utils/Import_Material";

import { ModelProps } from "../interfaces/index";
import AddFrom from "../Container/Dashboard/AddForm";
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
            <AddFrom handleClose={handleClose} />
          </Grid>{" "}
        </DialogActions>
      </Dialog>
    </div>
  );
}

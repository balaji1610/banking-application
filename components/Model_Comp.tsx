import { Grid } from "@mui/material";
import Import_Material from "../utils/Import_Material";

import { ModelProps } from "../interfaces/index";
import AddFrom from "../Container/Dashboard/AddForm";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Model_Comp({ open, handleClose, setOpen }) {
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
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogActions>
          <Grid container xs={12}>
            <AddFrom setOpen={setOpen} handleClose={handleClose} />
          </Grid>{" "}
        </DialogActions>
      </Dialog>
    </div>
  );
}

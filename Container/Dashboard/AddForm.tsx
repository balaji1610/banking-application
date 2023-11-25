import AddFromStyle from "../../styles/AddFrom.module.css";
import Import_Material from "../../utils/Import_Material";
export default function AddForm({ handleClose }) {
  const { TextField, Button } = Import_Material;
  return (
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
  );
}

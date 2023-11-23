import Crud from "../components/Crud";
import Button from "@mui/material/Button";

export default function index() {
  return (
    <div>
      <Crud />
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}

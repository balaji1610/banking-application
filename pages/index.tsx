import Crud from "../components/Crud";
import Button from "@mui/material/Button";
import Head from "next/head";

export default function index() {
  return (
    <div>
      <Head>
        <title>Banking Application</title>
      </Head>
      <Crud />
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}

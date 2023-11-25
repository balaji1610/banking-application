import AddFromStyle from "../../styles/AddFrom.module.css";
import Import_Material from "../../utils/Import_Material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ApplicationProps } from "../../ContextAPI/Context";
import { useContext } from "react";
export default function AddForm({ handleClose }) {
  const { TableArray, setTableArray } = useContext(ApplicationProps);

  console.log(TableArray, "TableArray");
  const { TextField, Button } = Import_Material;
  //Formik
  const formik = useFormik({
    initialValues: {
      fistname: "",
      lastname: "",
      email: "",
      mobile: "",
    },

    validationSchema: Yup.object({
      fistname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      mobile: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);

      setTableArray([values, ...TableArray]);
    },
  });
  return (
    <>
      {" "}
      <form onSubmit={formik.handleSubmit}>
        <div className={AddFromStyle.Addform_Parent}>
          <div>
            <TextField
              type="text"
              placeholder="Fistname*"
              name="fistname"
              value={formik.values.fistname}
              onChange={formik.handleChange}
            />
            {formik.touched.fistname && formik.errors.fistname ? (
              <div>{formik.errors.fistname}</div>
            ) : null}
          </div>
          <div>
            {" "}
            <TextField
              type="text"
              placeholder="Lastname*"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            {" "}
            <TextField
              type="email"
              placeholder="Email*"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            {" "}
            <TextField
              type="text"
              placeholder="Mobile*"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <Button variant="contained" onClick={handleClose} color="error">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

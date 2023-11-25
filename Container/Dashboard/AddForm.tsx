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
      fistname: Yup.string()
        .matches(/^[a-zA-Z]+$/, "fistname must only contain letters")
        .min(2, "Too short")
        .max(15, "Too long")
        .required("Required"),

      lastname: Yup.string()
        .matches(/^[a-zA-Z]+$/, "lastname must only contain letters")
        .min(1, "Too short")
        .max(10, "Too long")

        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Invalid mobile number")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);

      setTableArray([values, ...TableArray]);
    },
  });
  console.log(formik.errors, "formik.errors");

  const { values, handleSubmit, touched, errors, handleChange } = formik;
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <div className={AddFromStyle.Addform_Parent}>
          <div>
            <TextField
              type="text"
              placeholder="Fistname*"
              name="fistname"
              value={values.fistname}
              onChange={formik.handleChange}
            />
            {touched.fistname && errors.fistname ? (
              <div>{errors.fistname}</div>
            ) : null}
          </div>
          <div>
            {" "}
            <TextField
              type="text"
              placeholder="Lastname*"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
            />
            {touched.lastname && errors.lastname ? (
              <div>{errors.lastname}</div>
            ) : null}
          </div>
          <div>
            {" "}
            <TextField
              type="email"
              placeholder="Email*"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {touched.email && errors.email ? <div>{errors.email}</div> : null}
          </div>
          <div>
            {" "}
            <TextField
              type="text"
              placeholder="Mobile*"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
            />
            {touched.mobile && errors.mobile ? (
              <div>{errors.mobile}</div>
            ) : null}
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

import AddFromStyle from "../../styles/AddFrom.module.css";
import Import_Material from "../../utils/Import_Material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ApplicationProps } from "../../ContextAPI/Context";
import { useContext } from "react";
export default function AddForm({ handleClose }) {
  const { TableArray, setTableArray } = useContext(ApplicationProps);

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
      const USAnumber = `(${values.mobile.slice(0, 3)}) ${[
        values.mobile.slice(3, 6),
        values.mobile.slice(-3),
      ].join("-")}`;

      values.mobile = USAnumber;

      setTableArray([values, ...TableArray]);
    },
  });

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
              helperText={touched.fistname && formik.errors.fistname}
              error={touched.fistname && Boolean(errors.fistname)}
            />
          </div>
          <div>
            {" "}
            <TextField
              type="text"
              placeholder="Lastname*"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              helperText={touched.lastname && formik.errors.lastname}
              error={touched.lastname && Boolean(errors.lastname)}
            />
          </div>
          <div>
            {" "}
            <TextField
              type="email"
              placeholder="Email*"
              name="email"
              value={values.email}
              onChange={handleChange}
              helperText={touched.email && formik.errors.email}
              error={touched.email && Boolean(errors.email)}
            />
          </div>
          <div>
            {" "}
            <TextField
              type="text"
              placeholder="Mobile*"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              helperText={touched.mobile && formik.errors.mobile}
              error={touched.mobile && Boolean(errors.mobile)}
            />
          </div>
          <div>
            <Button variant="contained" onClick={handleClose} color="error">
              Cancel
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

import AddFromStyle from "../../styles/AddFrom.module.css";
import Import_Material from "../../utils/Import_Material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ApplicationProps } from "../../ContextAPI/Context";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
export default function EditBankForm({
  handleClose,
  setOpen,
  EditCustomerindex,
  EditCustomerdata,
}) {
  const {
    TableArray,
    setTableArray,
    ViewGetData,
    setViewGetData,
    Getindex,
    InvokeHook,
    setInvokeHook,
    AccountNames,
  } = useContext(ApplicationProps);

  const { TextField, Button } = Import_Material;

  const getUpdateValues = (formvalue: any) => {
    const updateContacts = TableArray[Getindex].BankingData.map((el, index) => {
      return index == EditCustomerindex ? formvalue : { ...el };
    });

    const updateContactsTableArray = TableArray.map((item, index) => {
      return index == Getindex
        ? {
            ...item,
            BankingData: updateContacts,
          }
        : item;
    });

    setTableArray(updateContactsTableArray);
  };

  //Formik
  const formik = useFormik({
    initialValues: EditCustomerdata,

    validationSchema: Yup.object({
      accountNumber: Yup.string()

        .matches(/^\d{10}$/, "Invalid AccountNumber")
        .required("Required"),

      accountName: Yup.string()
        .matches(/^[a-zA-Z]+$/, "accountName must only contain letters")
        .min(1, "Too short")
        .max(15, "Too long")
        .required("Required"),
      nickName: Yup.string()
        .matches(/^[a-zA-Z]+$/, "nickName must only contain letters")
        .min(1, "Too short")
        .max(10, "Too long")
        .required("Required"),
      Ifsc: Yup.string()
        .matches(/^\d{4}$/, "Invalid IFSC Code")
        .required("Required"),
    }),

    onSubmit: (values) => {
      getUpdateValues(values);
      setOpen(false);
    },
  });

  const { values, handleSubmit, touched, errors, handleChange } = formik;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={AddFromStyle.Addform_Parent}>
          <div>
            <TextField
              type="text"
              placeholder="Account Number*"
              name="accountNumber"
              value={values.accountNumber}
              onChange={formik.handleChange}
              helperText={touched.accountNumber && formik.errors.accountNumber}
              error={touched.accountNumber && Boolean(errors.accountNumber)}
              style={{ width: "17rem" }}
            />
          </div>
          <div>
            {" "}
            <TextField
              select
              type="text"
              placeholder="Account Name*"
              name="accountName"
              value={values.accountName}
              onChange={handleChange}
              helperText={touched.accountName && formik.errors.accountName}
              error={touched.accountName && Boolean(errors.accountName)}
              style={{ width: "17rem" }}
            >
              {" "}
              {AccountNames?.map((elm) => {
                return <MenuItem value={elm.value}> {elm.label}</MenuItem>;
              })}
            </TextField>
          </div>
          <div>
            {" "}
            <TextField
              type="text"
              placeholder="Nick Name*"
              name="nickName"
              value={values.nickName}
              onChange={handleChange}
              helperText={touched.nickName && formik.errors.nickName}
              error={touched.nickName && Boolean(errors.nickName)}
              style={{ width: "17rem" }}
            />
          </div>
          <div>
            {" "}
            <TextField
              type="text"
              placeholder="IFSC*"
              name="Ifsc"
              value={values.Ifsc}
              onChange={handleChange}
              helperText={touched.Ifsc && formik.errors.Ifsc}
              error={touched.Ifsc && Boolean(errors.Ifsc)}
              style={{ width: "17rem" }}
            />
          </div>
          <div className={AddFromStyle.cancel_Sumbit_btn}>
            <div>
              {" "}
              <Button variant="contained" onClick={handleClose} color="error">
                Cancel
              </Button>
            </div>
            <div>
              {" "}
              <Button type="submit" variant="contained">
                Update
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

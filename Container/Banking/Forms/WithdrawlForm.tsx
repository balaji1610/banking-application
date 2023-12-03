import AddFromStyle from "../../../styles/AddFrom.module.css";
import Import_Material from "../../../utils/Import_Material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ApplicationProps } from "../../../ContextAPI/Context";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import { useContext } from "react";
export default function WithdrawlForm({ setOpen, handleClose }) {
  const { Getindex, TableArray, setTableArray } = useContext(ApplicationProps);

  const { TextField, Button } = Import_Material;

  const getAccountName = TableArray[Getindex].BankingData?.map((bank) => {
    return bank.accountName;
  });

  const getDropdownlabel = getAccountName?.map((value) => {
    return { value: value, label: value };
  });

  //Formik
  const formik = useFormik({
    initialValues: {
      withdrawamount: "",
      getbankname: "",
      description: "Depoist",
    },

    validationSchema: Yup.object({
      withdrawamount: Yup.string()
        .matches(/^[0-9]*$/, "Numbers Only")
        .min(1, "Too short")
        .max(4, "Too long")
        .required("Required"),

      getbankname: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      const { withdrawamount, getbankname } = values;
      setOpen(false);
      const addbalanceAmount = TableArray[Getindex].BankingData.map((el) => {
        return el.accountName == getbankname
          ? {
              ...el,
              balance: Number(el.balance) - Number(withdrawamount),
              TransactionHistory: [
                {
                  withdrawamount: withdrawamount,
                  description: "WithDraw",
                  balance: Number(el.balance) - Number(withdrawamount),
                },
                ...el.TransactionHistory,
              ],
            }
          : { ...el };
      });

      const addUserbalance = TableArray.map((el, index) => {
        return index == Getindex
          ? { ...el, BankingData: addbalanceAmount }
          : { ...el };
      });

      setTableArray(addUserbalance);
    },
  });

  const { values, handleSubmit, touched, errors, handleChange } = formik;
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <div className={AddFromStyle.Addform_Parent}>
          <div>
            <TextField
              type="text"
              placeholder="withdrawt amount *"
              name="withdrawamount"
              value={values.withdrawamount}
              onChange={formik.handleChange}
              helperText={
                touched.withdrawamount && formik.errors.withdrawamount
              }
              error={touched.withdrawamount && Boolean(errors.withdrawamount)}
              style={{ width: "17rem" }}
            />
          </div>
          <div>
            <TextField
              select
              type="text"
              name="getbankname"
              placeholder="Select Your Bank*"
              value={values.getbankname}
              onChange={formik.handleChange}
              helperText={touched.getbankname && formik.errors.getbankname}
              error={touched.getbankname && Boolean(errors.getbankname)}
              style={{ width: "17rem" }}
            >
              {getDropdownlabel?.map((elm) => {
                return <MenuItem value={elm.value}> {elm.label}</MenuItem>;
              })}
            </TextField>
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
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

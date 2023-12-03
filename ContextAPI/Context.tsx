import { createContext, useContext, useReducer, useState } from "react";
import Production_Object from "../utils/Production_Object";
export const ApplicationProps = createContext(null);
export default function Context({ children }) {
  const [RouterPath, setRouterPath] = useState(null);
  const [InvokeHook, setInvokeHook] = useState(1);
  const [SubmitBtninvoke, setSubmitBtninvoke] = useState(1);
  const [ViewGetData, setViewGetData] = useState();
  const [Getindex, setGetindex] = useState();
  const [TableArray, setTableArray] = useState(Production_Object);

  return (
    <ApplicationProps.Provider
      value={{
        TableArray,
        setTableArray,
        RouterPath,
        setRouterPath,
        ViewGetData,
        setViewGetData,
        Getindex,
        setGetindex,
        InvokeHook,
        setInvokeHook,
        SubmitBtninvoke,
        setSubmitBtninvoke,
      }}
    >
      {children}
    </ApplicationProps.Provider>
  );
}

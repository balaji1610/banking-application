import { createContext, useContext, useReducer, useState } from "react";
export const ApplicationProps = createContext(null);
export default function Context({ children }) {
  const [RouterPath, setRouterPath] = useState(null);
  const [InvokeHook, setInvokeHook] = useState(1);
  const [ViewGetData, setViewGetData] = useState();
  const [Getindex, setGetindex] = useState();
  const [TableArray, setTableArray] = useState([
    {
      fistname: "balaji",
      lastname: "A",
      email: "apple@gmail.com",
      mobile: "(908) 041-562",
      BankingData: [
        {
          accountNumber: "1234567890",
          accountName: "ICICI",
          nickName: "INDIA",
          Ifsc: "1234",
        },
        {
          accountNumber: "1234567890",
          accountName: "IOB",
          nickName: "INDIA",
          Ifsc: "1234",
        },
        {
          accountNumber: "1234567890",
          accountName: "Canara",
          nickName: "INDIA",
          Ifsc: "1234",
        },
        {
          accountNumber: "1234567890",
          accountName: "HDFC",
          nickName: "INDIA",
          Ifsc: "1234",
        },
      ],
    },
    {
      fistname: "Banana",
      lastname: "B",
      email: "Banana@gmail.com",
      mobile: "(908) 041-562",
      BankingData: [],
    },
    {
      fistname: "Mango",
      lastname: "M",
      email: "Mango@gmail.com",
      mobile: "1234567890",
      BankingData: [],
    },
    {
      fistname: "apple",
      lastname: "A",
      email: "apple@gmail.com",
      mobile: "(908) 041-562",
      BankingData: [],
    },
  ]);

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
      }}
    >
      {children}
    </ApplicationProps.Provider>
  );
}

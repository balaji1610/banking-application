import { createContext, useContext, useReducer, useState } from "react";
export const ApplicationProps = createContext(null);
export default function Context({ children }) {
  const [RouterPath, setRouterPath] = useState(null);
  const [ViewGetData, setViewGetData] = useState();
  const [TableArray, setTableArray] = useState([
    {
      fistname: "apple",
      lastname: "A",
      email: "apple@gmail.com",
      mobile: "(908) 041-562",
      BankingData: [],
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
      mobile: "(908) 041-562",
      BankingData: [],
    },
    {
      fistname: "apple",
      lastname: "A",
      email: "apple@gmail.com",
      mobile: "(908) 041-562",
      BankingData: [],
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
      mobile: "(908) 041-562",
      BankingData: [],
    },
    {
      fistname: "apple",
      lastname: "A",
      email: "apple@gmail.com",
      mobile: "(908) 041-562",
      BankingData: [],
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
      mobile: "(908) 041-562",
      BankingData: [],
    },
    {
      fistname: "apple",
      lastname: "A",
      email: "apple@gmail.com",
      mobile: "(908) 041-562",
      BankingData: [],
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
      }}
    >
      {children}
    </ApplicationProps.Provider>
  );
}

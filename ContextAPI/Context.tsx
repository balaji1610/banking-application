import { createContext, useContext, useReducer, useState } from "react";
export const ApplicationProps = createContext(null);
export default function Context({ children }) {
  const [RouterPath, setRouterPath] = useState(null);
  const [TableArray, setTableArray] = useState([
    {
      fistname: "apple",
      lastname: "A",
      email: "apple@gmail.com",
      mobile: "1234567890",
    },
    {
      fistname: "Banana",
      lastname: "B",
      email: "Banana@gmail.com",
      mobile: "1234567890",
    },
    {
      fistname: "Mango",
      lastname: "M",
      email: "Mango@gmail.com",
      mobile: "1234567890",
    },
  ]);

  return (
    <ApplicationProps.Provider
      value={{ TableArray, setTableArray, RouterPath, setRouterPath }}
    >
      {children}
    </ApplicationProps.Provider>
  );
}

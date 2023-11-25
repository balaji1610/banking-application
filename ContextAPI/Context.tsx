import { createContext, useContext, useReducer, useState } from "react";
export const ApplicationProps = createContext(null);
export default function Context({ children }) {
  const [TableArray, setTableArray] = useState("balaji");

  return (
    <ApplicationProps.Provider value={{ TableArray, setTableArray }}>
      {children}
    </ApplicationProps.Provider>
  );
}

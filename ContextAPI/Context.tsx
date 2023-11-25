import { createContext, useContext, useReducer, useState } from "react";
export const ApplicationProps = createContext(null);
export default function Context({ children }) {
  const [TableArray, setTableArray] = useState([]);

  return (
    <ApplicationProps.Provider value={{ TableArray, setTableArray }}>
      {children}
    </ApplicationProps.Provider>
  );
}

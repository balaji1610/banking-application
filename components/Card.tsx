import { useState, useEffect } from "react";
import Custom from "../styles/Home.module.css";

// interface HeadStrucureTypes {
//   Balance: number;
//   TransactionHistory: [];
// }
export default function Crud() {
  const HeadStrucure = {
    Balance: 1000,
    TransactionHistory: [],
  };

  //States

  const [stateHeadStrucure, setHeadStrucure] = useState(HeadStrucure);

  const [Eventinvoke, setEventInvoke] = useState(1);
  useEffect(() => {
    stateHeadStrucure;
  }, [Eventinvoke]);
  const [statedepoist, setStatedepoist] = useState({
    Description: "Depoist",
    Amount: 0,
    BalanceAmount: 0,
  });
  //MouseEvents
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setStatedepoist({ ...statedepoist, Amount: Number(value) });
  };

  const DepositClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const getBalance = stateHeadStrucure.Balance + statedepoist.Amount;

    setStatedepoist({ ...statedepoist, BalanceAmount: getBalance });
    setHeadStrucure({
      ...stateHeadStrucure,
      Balance: getBalance,
      TransactionHistory: [
        ...stateHeadStrucure.TransactionHistory,
        statedepoist,
      ],
    });

    console.log(stateHeadStrucure, "Inner-stateHeadStrucure");
    setEventInvoke(Eventinvoke + 1);
  };

  // console.log(statedepoist, "statedepoist");
  // console.log(stateHeadStrucure, "stateHeadStrucure");
  return (
    <div>
      <div>
        <h1>Balance&nbsp;{stateHeadStrucure.Balance}</h1>
      </div>
      <hr></hr>
      <div>
        {" "}
        <h1>Deposit</h1>
        <input
          type="number"
          placeholder="Enter Your Amount"
          onChange={handleChange}
          name="depoist"
        />
        <div>
          <button onClick={DepositClick}>Deposit</button>
        </div>
      </div>
    </div>
  );
}

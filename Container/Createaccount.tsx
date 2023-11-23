import { useState } from "react";

export default function Createaccount({ value }) {
  console.log(value, "value");
  const customerDeatils = {
    Name: "",
    Email: "",
    password: "",
    confirmpassword: "",
  };

  const [customerData, setcustomerData] = useState(customerDeatils);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setcustomerData({ ...customerData, [name]: value });
  };

  return (
    <div>
      <p>Name</p>
      <input type="text" name="Name" onChange={handleChange} />
      <p>Email</p>
      <input type="eamil" name="Email" onChange={handleChange} />
      <p>password</p>
      <input type="password" name="password" onChange={handleChange} />
      <p>confirmpassword</p>
      <input type="password" name="confirmpassword" onChange={handleChange} />
    </div>
  );
}

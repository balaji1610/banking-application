export default function Crud() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    console.log(name, value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChange}
        name="Name"
      />
    </div>
  );
}

import React, { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [inputName]: value });
  };
  console.log(user);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        className="border p-2 m-2 rounded"
        onChange={handelChange}
      />
      <input
        type="text"
        name="email"
        id="email"
        className="border p-2 m-2 rounded"
        onChange={handelChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

import React, { useEffect, useRef } from "react";
import CustomInput from "../../components/CustomInput";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(myRef.current?.value);
  };

  useEffect(() => {
    myRef.current?.focus();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <h1>useRef</h1>

      {/* <input
        ref={myRef}
        className="border border-b border-gray-500 rounded text-black-900 focus:border-gray-900"
        type="text"
        name="name"
        id="name"
      /> */}
      <CustomInput
        className="border border-b border-gray-500 rounded text-black-900 focus:border-gray-900"
        ref={myRef}
      />
      <button
        type="submit"
        className=" px-2 py-1 border bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default UseRefExample;

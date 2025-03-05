import { Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const ReactFormInput = ({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label?: string;
}) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <label htmlFor={name} style={{ marginBottom: "1rem" }}>
          {label}
        </label>
      )}

      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            id={name}
            type={type}
            placeholder={`enter ${label}`}
          />
        )}
      />
    </div>
  );
};

export default ReactFormInput;
{
  /* <input
type={type}
className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
placeholder={`enter ${label}`}
{...register(name, {
  required: `*${label} is required`,
})}
/> */
}

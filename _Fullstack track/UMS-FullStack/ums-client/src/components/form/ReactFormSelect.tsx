import { Form, Select, Space } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

type TReactFormSelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};
const ReactFormSelect = ({ label, name, options }: TReactFormSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            defaultValue={{
              value: "",
              label: "Choose One",
              disabled: true,
            }}
            {...field}
            //   onChange={handleChange}
            options={options}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default ReactFormSelect;

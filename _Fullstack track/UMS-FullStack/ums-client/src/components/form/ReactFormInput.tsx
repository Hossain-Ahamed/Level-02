import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

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
      <Controller
        name={name}
        render={({ field ,fieldState : {error}}) => (
         <Form.Item label={label}>
           <Input
            {...field}
            id={name}
            type={type}
            placeholder={`enter ${label}`}
          />
          {error && <small style={{color:'red'}}>{error.message}</small>}
         </Form.Item>
        )}
      />
    </div>
  );
};

export default ReactFormInput;

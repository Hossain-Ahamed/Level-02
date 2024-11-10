import React, { forwardRef } from "react";
type TcustomInputProps = {
    className : string
}
const CustomInput = forwardRef<HTMLInputElement,TcustomInputProps>(({ className }, inputRef) => {
  return (
  <input 
  ref={inputRef} 
  type="text"
   className={className} />)
});

export default CustomInput;

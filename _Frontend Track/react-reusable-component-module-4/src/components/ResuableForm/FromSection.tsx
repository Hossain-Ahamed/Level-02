import { useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from "./Form";

export const FromSection = ({ children }) => {
  const { double } = useContext(FormElementContext);
  console.log(double)
  return (
    <div
      className={cn("grid gap-5 justify-items-center ", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};

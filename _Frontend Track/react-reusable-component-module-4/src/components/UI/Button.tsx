import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import cn from "../../utils/cn";

export const Button = ({ className, outline }) => {
  return (
    <button
      className={cn(
        "bg-red-500 px-3 py-2 rounded-md",
        {
          "border border-purple-500 bg-opacity-10": outline,
        },
        className
      )}
    >
      Click
    </button>
  );
};

import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TVariant = "solid" | "ghost" | "outline";
type TVariantOptions = {
  variant?: TVariant;
};

type TRef = HTMLButtonElement;
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TVariantOptions;

export const Button = forwardRef<TRef, TButton>(
  ({ children, className, variant = "solid", ...rest }, ref) => {
    const getVariant = (variant_name: TVariant) => {
      switch (variant_name) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";
        default:
          return "btn-solid";
      }
    };

    return (
      <button
        className={cn(getVariant(variant), className)}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

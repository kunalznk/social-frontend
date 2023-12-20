import { ButtonHTMLAttributes, LegacyRef, forwardRef } from "react";
import { cn } from "../utils/common";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef(
  (
    { className, ...props }: ButtonProps,
    ref: LegacyRef<HTMLButtonElement> | undefined,
  ) => {
    return (
      <button className={cn("font-semibold text-white bg-sky-500 rounded-xl px-4" ,className)} {...props} ref={ref}>
        {props.children}
      </button>
    );
  },
);

export default Button;

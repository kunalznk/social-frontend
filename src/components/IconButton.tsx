import { ButtonHTMLAttributes, LegacyRef, forwardRef } from "react";
import { cn } from "../utils/common";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = forwardRef(
  (
    { className, ...props }: IconButtonProps,
    ref: LegacyRef<HTMLButtonElement> | undefined,
  ) => {
    return (
      <button className={cn("font-semibold rounded-xl px-4" ,className)} {...props} ref={ref}>
        {props.children}
      </button>
    );
  },
);

export default IconButton;

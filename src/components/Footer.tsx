

import { ButtonHTMLAttributes, LegacyRef, forwardRef } from "react";
import { cn } from "../utils/common";
import IconButton from "./IconButton";

import Home from "../assets/svgs/Home.svg"
import Search from "../assets/svgs/Search.svg"
import Create from "../assets/svgs/Create.svg"
import Chat from "../assets/svgs/Chat.svg"
import Profile from "../assets/svgs/Profile.svg"
import MoreDots from "../assets/svgs/More-dot.svg"

type FooterProps = ButtonHTMLAttributes<HTMLDivElement>;

const Footer = forwardRef(
  (
    { className, ...props }: FooterProps,
    ref: LegacyRef<HTMLDivElement> | undefined,
  ) => {
    return (
      <div className={cn("flex shadow-md rounded-md bg-white border-t-1 border-gray-300" ,className)} {...props} ref={ref}>
            <IconButton>
                <img src={Home} className="w-full aspect-square"/>
            </IconButton>
            <IconButton>
                <img src={Search} className="w-full aspect-square"/>
            </IconButton>
            <IconButton>
                <img src={MoreDots} className="w-full aspect-square"/>
            </IconButton>
            <IconButton>
                <img src={Create} className="w-full aspect-square"/>
            </IconButton>
            <IconButton>
                <img src={Chat} className="w-full aspect-square"/>
            </IconButton>
            <IconButton>
                <img src={Profile} className="w-full aspect-square"/>
            </IconButton>
      </div>
    );
  },
);

export default Footer;

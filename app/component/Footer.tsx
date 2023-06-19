import React from "react";
import LogoComponent from "./LogoComponent";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full h-auto border-t-2 p-2 border-solid text-xl border-black">
      <div className="py-8 w-full flex items-center justify-center flex-col gap-4">
        <LogoComponent />
        <div className="text-black text-semibold">
          Good code is its own best documentation
        </div>
        <div className="text-black text-sm">
          Handcrafted with{" "}
          <span className="text-pink-500 text-xl px-1">&#9825;</span> by me{" "}
        </div>
        <div className="text-black text-xs">
          {new Date().getFullYear()} @ All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

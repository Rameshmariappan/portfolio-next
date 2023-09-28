import Link from "next/link";
import React from "react";
import SvgComponent from "./Icons";

type Props = {};

const HireMe = (props: Props) => {
  return (
    <div className="fixed flex items-center justify-center right-8 bottom-8 overflow-hidden">
      <div className="w-48 h-auto flex items-center relative">
        <SvgComponent className="animate-spin-slow" />
        <Link
          href={"mailto:ramesh@sprile.com"}
          className="w-20 h-20 flex items-center justify-center border border-solid shadow-sm border-black hover:bg-white hover:text-black text-white text-bold rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LogoComponent = () => {
  return (
    <div>
      <div className="p-1 border-solid border-2 border-black ">
        <Link href={"/"} className="flex group">
          <div className="px-3 py-2 bg-black text-white font-bold group-hover:bg-white group-hover:text-black  ">Dev</div>
          <div className="px-3 py-2 bg-white text-black font-bold group-hover:bg-black group-hover:text-white ">Ram</div>
        </Link>
      </div>
    </div>
  );
};

export default LogoComponent;

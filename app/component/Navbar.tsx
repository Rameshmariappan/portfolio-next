'use client'
import React from "react";
import LogoComponent from "./LogoComponent";
import CustomLink from "./CustomLink";
import { GithubIcon, LinkedInIcon, TwitterIcon, WordPress } from "./Icons";
import { motion } from "framer-motion";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="flex justify-between w-full px-32 py-8 items-center font-medium">
      <nav className="flex gap-8">
        <CustomLink link="/" title="Home" />
        <CustomLink link="/about" title="About" />
        <CustomLink link="/projects" title="Projects" />
        <CustomLink link="/blogs" title="Blogs Page" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap gap-6">
        <motion.a href={"/"} className="w-6" whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <LinkedInIcon />
        </motion.a>
        <motion.a href={"/projects"} className="w-6" whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <WordPress />
        </motion.a>
        <motion.a href={"/about"} className="w-6" whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <TwitterIcon />
        </motion.a>
        <motion.a href={"/blogs"} className="w-6" whileHover={{y:-2}} whileTap={{scale:0.9}}>
          <GithubIcon />
        </motion.a>
      </nav>
      <div className="absolute top-3 left-[50%] translate-x-[-50%]">
        <LogoComponent />
      </div>
    </header>
  );
};
export default Navbar;

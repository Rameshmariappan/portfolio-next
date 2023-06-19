'use client'
import React from "react";
import { motion } from "framer-motion";
type Props = {
  text: string;
  className?: string;
};

const maintext ={
  initial:{
    opacity:1,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5,
      staggerChildren:0.08,
    }
  }
}

const particulartext ={
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:0.5
    }
  }
}
const AnimatedText = ({ text, className }: Props) => {
  return (
    <div className="w-full mx-auto flex py-2 justify-center text-center items-center overflow-hidden">
      <motion.h1
        className={`inline-block text-black capitalize font-bold text-8xl w-full ${className}`}
        initial={"initial"}
        animate={"animate"}
        variants={maintext}
      >
        {text.split(" ").map((singletext, index) => {
          return (
            <motion.span 
            key={singletext + index} className="inline-block" 
            variants={particulartext}
            >
              {singletext}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;

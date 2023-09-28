import React from "react";
import { motion } from "framer-motion";
type Props = {};

const SkillContent = ({
  name,
  x,
  y,
}: {
  name: string;
  x: string;
  y: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex items-center justify-center absolute text-white bg-[#0077b5] py-3 px-6 rounded-full font-semibold"
    >
      {name}
    </motion.div>
  );
};

const Skills = (props: Props) => {
  return (
    <>
      <h2 className="font-bold text-8xl text-center w-full pt-64">Skills</h2>
      <div className=" w-full h-screen bg-solarSystemRound rounded-full flex items-center relative justify-center ">
        <motion.div className="flex items-center justify-center absolute text-white bg-black py-3 px-6 rounded-full font-semibold">
          WEB
        </motion.div>
        <SkillContent name={"HTML"} x="-10vw" y="3vw" />
        <SkillContent name={"CSS"} x="5vw" y="-7vw" />
        <SkillContent name={"Javascript"} x="-10vw" y="-8vw" />
        <SkillContent name={"React"} x="-25vw" y="-2vw" />
        <SkillContent name={"Material UI"} x="24vw" y="-2vw" />
        <SkillContent name={"Tailwind css"} x="24vw" y="15vw" />
        <SkillContent name={"Sass"} x="5vw" y="14vw" />
        <SkillContent name={"Redux"} x="-15vw" y="10vw" />
        <SkillContent name={"RTK Query"} x="-20vw" y="18vw" />
        <SkillContent name={"Axios"} x="-20vw" y="-18vw" />
        <SkillContent name={"Bootstrap"} x="25vw" y="-10vw" />
        <SkillContent name={"React Router"} x="10vw" y="-17vw" />
        <SkillContent name={"React Bootstrap"} x="16vw" y="5vw" />
        <SkillContent name={"Next Js"} x="-35vw" y="7vw" />
      </div>
    </>
  );
};

export default Skills;

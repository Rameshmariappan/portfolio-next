import { type } from "os";
import React, { useRef } from "react";
import ExperienceData from "../components/data.json";
import { useScroll, motion } from "framer-motion";
import Round from "./Round";
type Props = {
  companyName: string;
  year: string;
  address: string;
  content: string[];
  role: string;
};

const ParticularExperience = ({
  companyName,
  year,
  address,
  content,
  role,
}: Props) => {
  const liRef = useRef(null);
  return (
    <li
      ref={liRef}
      className="w-[70%] mx-auto flex justify-between flex-col items-center my-8 first:mt-0 last:mb-0 gap-2"
    >
      <Round reference={liRef} />
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5 ,type:"spring"}}>
        <div className="font-bold text-2xl">
          {role}&nbsp;@ <span className="text-purple-500">{companyName}</span>
        </div>
        <div className="font-bold text-black/75">
          {year} | {address}
        </div>
        <ul className="list-disc">
          {content.map((singlecontent) => {
            return <li>{singlecontent}</li>;
          })}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="w-full  my-64">
      <div className="font-bold text-black text-8xl text-center mb-16">
        Experience
      </div>
      <div className="w-[75%] relative mx-auto" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute w-[4px] bg-black h-full origin-top left-9 top-0"
        ></motion.div>
        <ul className="w-full flex items-start justify-between flex-col ml-4">
          {ExperienceData.experience.map((item, index) => {
            return (
              <ParticularExperience
                companyName={item.companyName}
                address={item.address}
                content={item.content}
                role={item.role}
                year={item.year}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;

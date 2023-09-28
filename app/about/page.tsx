"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
import AnimatedText from "../component/AnimatedText";
import Cover from "../../public/Images/cover.png";
import Image from "next/image";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
type Props = {};

const AnimatedNumber = ({ value }: { value: any }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const motionValue = useMotionValue(0);
  const springValues = useSpring(motionValue);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValues.on("change", (prev) => {
      if (ref.current && prev.toFixed(0) <= value) {
        ref.current.textContent = prev.toFixed(0);
      }
    });
  }, []);

  return <span ref={ref}></span>;
};

const page = (props: Props) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center p-32 pt-8">
      <div className="flex justify-center items-center ">
        <AnimatedText
          text="Precision and Passion Unleashed"
          className="text-7xl"
        />
      </div>
      <div className="grid grid-cols-8 gap-16 w-full">
        <div className=" flex items-start col-span-3 justify-start">
          <Image src={Cover} alt="developer" className="w-full h-auto" />
        </div>
        <div className="col-span-5 flex-col flex items-start  justify-center">
          <div className="flex flex-row justify-between items-center w-full py-4">
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-7xl">
                <AnimatedNumber value={2} />+
              </span>
              <h2 className="font-medium capitalize text-black/75">
                Years Experience
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-7xl">
                {" "}
                <AnimatedNumber value={5} />+
              </span>
              <h2 className="font-medium capitalize text-black/75">
                Projects Completed
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-7xl">
                <AnimatedNumber value={5} />+
              </span>
              <h2 className="font-medium capitalize text-black/75">
                Satisfied Clients
              </h2>
            </div>
          </div>

          <h2 className="text-bold text-2xl text-black/75 uppercase py-2">
            Biography
          </h2>
          <p className="text-medium text-black pb-3">
            Hello, I'm{" "}
            <span className="text-bold text-xl">Ramaiah Mariappan</span>, a
            passionate web developer with a focus on React, Next.js, and
            Node.js. With a solid foundation in these technologies, I bring
            creativity, efficiency, and reliability to every project I
            undertake.
          </p>
          <p className="text-medium text-black  pb-3">
            I have honed my skills in React and Next.js, leveraging their power
            to build robust and interactive web applications. With a deep
            understanding of React's component-based architecture, I craft
            reusable UI components that promote code reusability and
            maintainability.
          </p>
          <p className="text-medium text-black  pb-3">
            Next.js, with its server-side rendering (SSR) and static site
            generation (SSG) capabilities, allows me to optimize performance and
            enhance user experience. I embrace the versatility of Next.js,
            enabling me to create fast, SEO-friendly, and scalable applications.
          </p>
          <p className="text-medium text-black  pb-3">
            In addition to my expertise in React and Next.js, I possess a solid
            understanding of Node.js. This enables me to build full-stack
            applications and leverage the power of JavaScript on both the front
            end and back end. With Node.js, I can create efficient server-side
            logic, handle API integrations, and build RESTful APIs that power
            dynamic web applications.
          </p>
        </div>
      </div>
      <Skills />
      <Experience />
    </div>
  );
};

export default page;

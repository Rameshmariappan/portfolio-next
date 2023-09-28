import { useScroll,motion } from "framer-motion";
import React from "react";

type Props = {
  reference:React.MutableRefObject<null>;
};

const Round = (props: Props) => {
  const { scrollYProgress } = useScroll({
    target: props.reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="stroke-black absolute left-0">
      <svg className="-rotate-90" height="75" width="75" viewBox="0 0 100 100">
        <circle
          cx={"75"}
          cy={"50"}
          r="20"
          className="stroke-1 stroke-purple-500 fill-none"
        />
        <motion.circle
        style={{pathLength:scrollYProgress}}
          cx={"75"}
          cy={"50"}
          r="20"
          className="stroke-[5px]  fill-white"
        />

        <circle
          cx={"75"}
          cy={"50"}
          r="10"
          className="stroke-1 stroke-purple-500 fill-purple-500"
        />
      </svg>
    </figure>
  );
};

export default Round;

import Image from "next/image";
import Link from "next/link";
import developer from "../../my-app/public/Images/developer-pic.png";
import AnimatedText from "./component/AnimatedText";
import HireMe from "./component/HireMe";
import SvgComponent, { CircularText, LinkArrow } from "./component/Icons";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center p-32 pt-0">
      <div className="inline-block w-full min-h-full z-0 text-black bg-white">
        <div className="flex min-h-screen w-full items-center justify-between">
          <div className="w-1/2">
            <Image alt="developer" className="w-full h-auto" src={developer} />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text={"Bridging Vision and Reality through Code and Design"}
              className={"!text-6xl !text-left"}
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to transforming
              ideas into captivating web applications. With expertise in
              React.js and web development, I bring innovation and functionality
              to every project. Explore my portfolio to witness the seamless
              fusion of design and code in my latest creations.
            </p>
            <div className="flex items-center self-start gap-2">
              <Link href="./Ram.pdf" target={"_blank"} download={true} className="flex p-2.5 px-6 bg-black text-white rounded-lg font-semibold gap-2 items-center hover:bg-white hover:text-black border-2 border-transparent border-solid hover:border-black"><LinkArrow className="w-6 "/>Resume</Link>
              <Link href="mailto:ramaiah.m@spritle.com">Contact</Link>
            </div>
          </div>
        </div>
      <HireMe />
      </div>
    </main>
  );
}

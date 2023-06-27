import Link from "next/link";
import React from "react";
import AnimatedText from "../component/AnimatedText";
import { products } from "./component/ProjectArray";
type Props = {};

const page = (props: Props) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center p-32 pt-8">
      <div className="flex justify-center items-center ">
        <AnimatedText text="Projects" className="text-7xl" />
      </div>
      <div className="grid grid-flow-row gap-8 my-16 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item, index) => {
          return (
            <Link
              href={`/projects/${item.id}`}
              className="max-w-sm  overflow-hidden  my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
            >
              <img
                className="rounded-t h-72 w-full object-cover"
                src={item.images[0].src}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {item.major_skills.map((skill, index) => {
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      # {skill}
                    </span>
                  );
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;

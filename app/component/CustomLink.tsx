'use client'
import Link from "next/link";
import React from "react";
import { useRouter,usePathname } from "next/navigation";
type PropsforRoute = {
  link: string;
  title: string;
  className?: string;
};

const CustomLink = ({ link, className = "", title }: PropsforRoute) => {
    const router = usePathname();
  return (
    <Link href={link} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router === link ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;

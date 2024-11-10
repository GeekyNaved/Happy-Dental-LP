"use client";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import {IoChevronForwardCircleOutline} from "react-icons/io5";

const ServicesCard = ({imgPath, imgAlt, title, description}) => {
  const routeName = usePathname();
  return (
    <div className="flex-1 bg-white w-full shadow-xl flex flex-col p-4 py-10 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer">
      <div className="self-center rounded-full shadow-xl p-2 bg-blue-500">
        <Image
          src={imgPath}
          alt={imgAlt}
          className="w-auto h-auto"
          width={250}
          height={250}
        />
      </div>
      <h2 className="text-center text-2xl font-bold py-2">{title}</h2>
      <p className="text-slate-600 text-lg text-center py-2">{description}</p>
      {routeName != "/services" ? (
        <div className="self-center flex justify-between items-center gap-2 hover:underline underline-offset-2 font-semibold mt-2">
          <Link href="/services">Learn More</Link>
          <div className="text-2xl">
            <IoChevronForwardCircleOutline />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ServicesCard;

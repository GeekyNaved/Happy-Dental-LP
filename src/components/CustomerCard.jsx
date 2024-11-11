"use client";
import Image from "next/image";
import React from "react";

const CustomerCard = ({imgPath, imgAlt, title, comment}) => {
  return (
    <div className="flex-1 bg-white w-full shadow-xl flex flex-col p-4 py-10 my-4 rounded-lg cursor-pointer mb-16">
      <div className="flex gap-4 items-center">
        <Image
          src={imgPath}
          alt={imgAlt}
          className="w-auto h-auto"
          width={250}
          height={250}
        />
      <h2 className="text-center text-2xl font-bold py-2">{title}</h2>
      </div>
      <p className="text-slate-600 text-justify pt-6">{comment}</p>
    </div>
  );
};

export default CustomerCard;

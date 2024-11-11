import Image from "next/image";
import React from "react";

const DrCard = ({imgPath, imgAlt, name, job, desc}) => {
  return (
    <div className="flex md:flex-row flex-col gap-10 my-20">
      <section className="flex-shrink-0">
        <Image
          src={imgPath}
          alt={imgAlt}
          className="w-full h-auto"
          width={300}
          height={300}
          priority
        />
      </section>
      <section>
        <div className="flex md:flex-row flex-col md:gap-2 items-center">
          <h1 className="md:text-2xl text-xl font-bold">{name}</h1>
          <p>( {job})</p>
        </div>
        <p className="md:mt-2 mt-5 text-slate-600 text-justify">{desc}</p>
      </section>
    </div>
  );
};

export default DrCard;

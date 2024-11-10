"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="py-10 md:py-20 px-4">
      <div className="grid md:grid-cols-2 md:gap-4">
        <section className="flex flex-col justify-center">
          <p className="md:text-5xl sm:text-4xl text-3xl font-bold">
            Get Ready For Your Best
          </p>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold py-2">
            Ever Dental Experience!
          </h1>
          <p className="text-slate-600 py-4">
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </p>
          <Link
            className="text-white bg-blue-500 text-center hover:bg-blue-400 w-[15rem] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
            href="/contact"
          >
            Book an appointment
          </Link>
        </section>
        <section>
          <Image
            src="/hero.jpg"
            alt="hero image"
            className="w-auto h-auto"
            width={500}
            height={500}
            priority
          />
        </section>
      </div>
    </div>
  );
};

export default HeroSection;

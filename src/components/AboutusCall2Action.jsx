import Image from "next/image";
import Link from "next/link";

const AboutusCall2Action = () => {
  return (
    <div className="bg-sky-950 py-10 px-4 lg:px-16 rounded-md">
      <div className="grid md:grid-cols-3 md:gap-4">
        <div className="flex flex-col justify-center md:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-slate-50">
            Dental Website That’s gonna
            <br />
            shake the game rules up.
          </h1>
          <p className="md:mt-2 text-slate-300">
            We use only the best quality materials on the market in order
            <br /> to provide the best products to our patients.
          </p>
          <Link
            className="text-white bg-blue-500 text-center hover:bg-blue-400 w-[15rem] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
            href="/about"
          >
            Learn More
          </Link>
        </div>
        <div className="rounded-md shadow-lg">
          <Image
            src="/call2Action.png"
            alt="call to Action image"
            className="w-full h-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutusCall2Action;

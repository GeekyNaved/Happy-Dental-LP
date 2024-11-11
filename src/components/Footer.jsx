import Link from "next/link";
import React from "react";
import {FaFacebookF, FaInstagram, FaXTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="md:my-10 my-5 px-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="md:text-3xl text-2xl">
          <span className="font-extrabold">HAPPY</span>
          <span className="font-thin">DENTAL</span>
        </Link>
        <nav className="flex gap-4">
          <Link className="hover:underline text-slate-600" href="/">
            Home
          </Link>
          <Link className="hover:underline text-slate-600" href="/about">
            About
          </Link>
          <Link className="hover:underline text-slate-600" href="/services">
            Services
          </Link>
          <Link className="hover:underline text-slate-600" href="/contact">
            Contact us
          </Link>
        </nav>
      </div>
      <hr className="mt-8 mb-4 h-0.5 border-t-0 bg-sky-950" />
      <div className="flex md:flex-row flex-col-reverse justify-between items-center">
        <p className="text-md text-center my-3 md:my-0">
          All rights reserved ®2024 | Designed & Developed By Naved.
        </p>
        <div className="flex cursor-pointer gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="rounded-full shadow-xl p-2 bg-blue-500 text-white hover:scale-110 duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="rounded-full shadow-xl p-2 bg-blue-500 text-white hover:scale-110 duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="rounded-full shadow-xl p-2 bg-blue-500 text-white hover:scale-110 duration-300"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

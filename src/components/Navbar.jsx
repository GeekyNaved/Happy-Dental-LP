"use client";
import {usePathname, useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routeName = usePathname();

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  // Disable body scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div
      className={
        routeName == "/"
          ? "bg-blue-50 rounded-md px-5 py-7 flex justify-between items-center"
          : "bg-white rounded-md px-5 py-7 flex justify-between items-center"
      }
    >
      <Link href="/" className="md:text-3xl text-2xl">
        <span className="font-extrabold">HAPPY</span>
        <span className="font-thin">DENTAL</span>
      </Link>
      {/* START - Navbar for Desktop and Tabs */}
      <ul className="hidden md:flex">
        <li
          className={
            routeName == "/"
              ? "md:text-xl p-3 underline underline-offset-4 decoration-2 decoration-customBlue"
              : "md:text-xl p-3 hover:underline underline-offset-4 decoration-2 decoration-customBlue"
          }
        >
          <Link className="cursor-pointer hover:underline font-bold" href="/">
            Home
          </Link>
        </li>
        <li
          className={
            routeName == "/about"
              ? "md:text-xl p-3 underline underline-offset-4 decoration-2 decoration-customBlue"
              : "md:text-xl p-3 hover:underline underline-offset-4 decoration-2 decoration-customBlue"
          }
        >
          <Link
            className="cursor-pointer hover:underline font-bold"
            href="/about"
          >
            About
          </Link>
        </li>
        <li
          className={
            routeName == "/services"
              ? "md:text-xl p-3 underline underline-offset-4 decoration-2 decoration-customBlue"
              : "md:text-xl p-3 hover:underline underline-offset-4 decoration-2 decoration-customBlue"
          }
        >
          <Link
            className="cursor-pointer hover:underline font-bold"
            href="/services"
          >
            Services
          </Link>
        </li>
        {/* <li
          className={
            routeName == "/contact"
              ? "md:text-xl p-3 underline underline-offset-4 decoration-2 decoration-customBlue"
              : "md:text-xl p-3 hover:underline underline-offset-4 decoration-2 decoration-customBlue"
          }
        >
          <Link
            className="cursor-pointer hover:underline font-bold"
            href="/contact"
          >
            Contact
          </Link>
        </li> */}
      </ul>
      <Link
        href="/contact"
        className="md:block hidden bg-blue-500 md:text-xl text-white px-5 py-2 rounded-md"
      >
        Book Now
      </Link>

      {/* END - Navbar for Desktop and Tabs */}

      {/* START - Navbar for Mobile */}
      <div onClick={handleNav} className="block md:hidden z-10">
        {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          isOpen
            ? "z-10 fixed left-0 top-0 w-full overflow-hidden h-full bg-sky-950 text-slate-50 ease-in-out duration-500"
            : "h-full ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold text-slate-50 text-center my-8">
            <span className="font-extrabold">HAPPY</span>
            <span className="font-thin">DENTAL</span>
          </h1>

          <div
            onClick={handleNav}
            className="block md:hidden z-10 border-2 text-xl border-white rounded-full p-1"
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 text-xl">
          <li
            className={
              routeName == "/"
                ? "p-3 underline underline-offset-8 font-bold decoration-2 decoration-slate-50"
                : "p-3 hover:underline underline-offset-8 decoration-2 decoration-white"
            }
          >
            <Link href="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li
            className={
              routeName == "/about"
                ? "p-3 underline underline-offset-8 font-bold decoration-2 decoration-slate-50"
                : "p-3 hover:underline underline-offset-8 decoration-2 decoration-white"
            }
          >
            <Link href="/about" onClick={handleNav}>
              About
            </Link>
          </li>
          <li
            className={
              routeName == "/services"
                ? "p-3 underline underline-offset-8 font-bold decoration-2 decoration-slate-50"
                : "p-3 hover:underline underline-offset-8 decoration-2 decoration-white"
            }
          >
            <Link href="/services" onClick={handleNav}>
              Services
            </Link>
          </li>
          {/* <li
            className={
              routeName == "/contact"
                ? "p-3 underline underline-offset-8 font-bold decoration-2 decoration-slate-50"
                : "p-3 hover:underline underline-offset-8 decoration-2 decoration-white"
            }
          >
            <Link href="/contact" onClick={handleNav}>
              Contact
            </Link>
          </li> */}
          <li className="mt-5">
            <Link
              onClick={handleNav}
              href="/contact"
              className="bg-blue-500 text-white px-5 py-2 rounded-md"
            >
              Book Now
            </Link>
          </li>
        </div>
      </ul>
      {/* END - Navbar for Mobile */}
    </div>
  );
};

export default Navbar;

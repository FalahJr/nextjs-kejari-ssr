import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 5) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <nav
      className={`${
        colorChange || showMobileNav
          ? "bg-[#17438E] duration-500"
          : "bg-transparent"
      } p-3 fixed w-full z-20 top-0 left-0 border-b border-gray-200`}
    >
      <div className="w-full lg:container  mx-auto flex flex-wrap md:flex-nowrap items-center justify-between">
        <Link href="/" className="flex items-center w-auto text-4xl  mr-14">
          {colorChange || showMobileNav ? (
            // <Image
            //   src="/assets/img/logo-red.png"
            //   width={250}
            //   height={60}
            //   alt="Arkana Technology"
            // />
            <h2>Kejari</h2>
          ) : (
            // <Image
            //   src="/assets/img/logo.png"
            //   width={250}
            //   height={60}
            //   alt="Arkana Technology"
            // />
            <h2>Kejari</h2>
          )}
        </Link>
        <button
          type="button"
          className={`ml-3 inline-flex items-center justify-center text-3xl hover:text-gray-900 md:hidden 
            ${colorChange || showMobileNav ? "text-[#fb392f]" : "text-white"}
          `}
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <span className="sr-only">Open main menu</span>
          <GiHamburgerMenu />
        </button>

        <div
          className={` ${
            showMobileNav ? "" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="mt-4 flex flex-col rounded-lg md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium md:dark:bg-transparent md:items-center">
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <Link
                href="/"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Beranda
              </Link>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Profil
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Informasi Publik
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Galeri
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Kontak
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Informasi Perkara
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Reformasi Birokrasi
              </a>
            </li>
            <li
              className={`hover:border-b-4 hover:duration-200 py-3  ${
                colorChange || showMobileNav
                  ? "hover:border-[#fb392f]"
                  : "hover:border-white"
              }`}
            >
              <a
                href="/about"
                className={`block rounded font-poppins-medium text-base md:text-xs lg:text-base md:text-center hover:no-underline ${
                  colorChange || showMobileNav
                    ? "text-white hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                Pelayanan Publik
              </a>
            </li>
            {/* <li>
              <Link
                href="/contact"
                className="mt-2 block rounded-full bg-[#f9c300] py-1 text-center font-poppins-bold text-base text-white md:mt-1 md:py-3 md:px-6 hover:text-white hover:no-underline hover:bg-[#e8bd22]"
              >
                REQUEST QUOTE
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

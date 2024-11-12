import React from "react";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#17438E]">
      <div className="container mx-auto py-6 lg:pt-16 lg:pb-8 text-white">
        <div className="mt-6 grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3 w-full px-6 md:px-10">
          <div className="lg:col-start-1 lg:col-span-2 w-3/4">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins-regular text-sm md:text-base mt-4">
                Innovation distinguishes between a leader and a follower.
              </h2>
              <h2 className="font-poppins-bold text-sm md:text-base">
                - Steve Jobs
              </h2>
            </div>
          </div>

          <div className="lg:col-end-4">
            <h2 className="font-poppins-bold text-base uppercase">
              Get In Touch
            </h2>
            <a
              href="mailto:febri@arkanatechnology.com"
              className="text-white"
              target="__blank"
            >
              <div className="mt-2 flex font-poppins-medium text-base">
                <div className="text-xl pr-2 pt-1">
                  <FaLocationDot />
                </div>
                <div>
                  <p>
                    Grand Harvest, Cluster Caspia CA-06, Balas Klumprik, Kec.
                    Wiyung, Surabaya, Jawa Timur 60215
                  </p>
                </div>
              </div>
            </a>
            <a
              href="mailto:febri@arkanatechnology.com"
              className="text-white"
              target="__blank"
            >
              <div className="mt-2 flex font-poppins-medium text-base items-center">
                <div className="text-xl pr-2">
                  <FiMail />
                </div>
                <div>
                  <p>febri@arkanatechnology.com</p>
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/62811333525"
              className="text-white"
              target="__blank"
            >
              <div className="mt-2 flex font-poppins-medium text-base">
                <div className="text-xl pr-2">
                  <FaWhatsapp />
                </div>
                <div>+62811333525</div>
              </div>
            </a>
          </div>
        </div>
        <hr className="mt-20 mb-8 border-[#E0E0E0]" />
        <span className="block text-center font-poppins-medium text-sm px-6">
          Copyright © 2023 - Arkana Technology | Powered by Arkana Technology
        </span>
      </div>
    </footer>
  );
};

export default Footer;

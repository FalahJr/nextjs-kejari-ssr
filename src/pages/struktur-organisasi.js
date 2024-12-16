// src/pages/struktur-organisasi.js
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Navbar } from "@/components/Layout/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function StrukturOrganisasi() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="py-28 bg-gradient-to-t from-white to-[#5493ff]">
        <div className="px-4 xl:px-0 xl:container mx-auto flex flex-col items-center md:h-max text-black">
          <h1 className="text-center font-poppins-bold text-4xl md:text-5xl mb-10">
            Struktur Organisasi
          </h1>
          <Image
            src="/assets/img/struktur-organisasi.png"
            width={1000}
            height={100}
          ></Image>
        </div>
      </div>

      <Footer />
    </>
  );
}

import React from "react";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#17438E]">
      <div className="container mx-auto py-6 lg:pt-16 lg:pb-8 text-white">
        <div className="mt-6 grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-5 w-full px-6 md:px-10">
          <div className="mr-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins-regular text-sm md:text-lg mt-4 font-bold">
                Profil
              </h2>
              <ul className="text-sm">
                <li>- Tentang Kami</li>
                <li>- Struktur Organisasi</li>
                <li>- Pejabat Struktural</li>
                <li>- Tugas Pokok dan Fungsi</li>
                <li>- Doktrin Kejaksaan</li>
                <li>- Visi dan Misi</li>
                <li>- Perintah Harian Jaksa Agung</li>
              </ul>
            </div>
          </div>
          <div className="mr-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins-regular text-sm md:text-lg mt-4 font-bold">
                Profil Pimpinan
              </h2>
              <ul className="text-sm">
                <li>- Kepala Kejaksaan Negeri</li>
                <li>- Kepala Sub Bagian Pembinaan</li>
                <li>- Kepala Seksi Intelijen</li>
                <li>- Kepala Saksi Tindak Pidana Umum</li>
                <li>- Kepala Saksi Tindak Pidana Khusus</li>
                <li>- Kepala Seksis Perdata & Tata Usaha Negara</li>
              </ul>
            </div>
          </div>
          <div className="mr-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins-regular text-sm md:text-lg mt-4 font-bold">
                Organisasi
              </h2>
              <ul className="text-sm">
                <li>- Pembinaan</li>
                <li>- Intelijen</li>
                <li>- Tindak Pidana Umum</li>
                <li>- Tindak Pidana Khusus</li>
                <li>- Perdata & Tata Usaha Negara</li>
              </ul>
            </div>
          </div>
          <div className="mr-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins-regular text-sm md:text-lg mt-4 font-bold">
                Produk Hukum
              </h2>
              <ul className="text-sm">
                <li>- Undang-Undang</li>
                <li>- Putusan Mahkamah Konstitusi</li>
                <li>- Peraturan Pemerintah</li>
                <li>- Peraturan Presiden</li>
                <li>- Keputusan Presiden</li>
                <li>- Intruksi Presiden</li>
                <li>- Peraturan Jaksa Agung</li>
                <li>- Nota Kesepahaman</li>
                <li>- Produk Hukum Lainnya</li>
              </ul>
            </div>
          </div>

          <div className="">
            <h2 className="font-poppins-regular text-sm md:text-lg mt-4 font-bold">
              Kontak
            </h2>
            <a
              href="mailto:febri@arkanatechnology.com"
              className="text-white"
              target="__blank"
            >
              <div className="mt-2 flex font-poppins-medium text-sm">
                <div className="text-xl pr-2 pt-1">
                  <FaLocationDot />
                </div>
                <div>
                  <p>
                    Jalan Raya Sukomanunggal Jaya No.1, Sukomanunggal, Kota
                    Surabaya, Jawa Timur 60188
                  </p>
                </div>
              </div>
            </a>
            <a
              href="mailto:febri@arkanatechnology.com"
              className="text-white"
              target="__blank"
            >
              <div className="mt-2 flex font-poppins-medium text-sm items-center">
                <div className="text-xl pr-2">
                  <FiMail />
                </div>
                <div>
                  <p>kejaksaan.surabaya@gmail.com</p>
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/62811333525"
              className="text-white"
              target="__blank"
            >
              <div className="mt-2 flex font-poppins-medium text-sm">
                <div className="text-xl pr-2">
                  <FaWhatsapp />
                </div>
                <div>+031 7382297</div>
              </div>
            </a>
          </div>
        </div>
        <hr className="mt-20 mb-8 border-[#E0E0E0]" />
        <span className="block text-center font-poppins-medium text-sm px-6">
          Copyright © 2024 - All Rights Reserved by Kejaksaan Negeri Surabaya
        </span>
      </div>
    </footer>
  );
};

export default Footer;

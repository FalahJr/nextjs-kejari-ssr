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
        <div className="px-4 xl:px-0 xl:container mx-auto flex flex-col  md:h-max text-black">
          <h1 className="text-center font-poppins-bold text-4xl md:text-5xl mb-10 uppercase">
            Visi dan Misi
          </h1>

          <div className="px-10 my-4">
            <div className="py-6">
              <h3 className="text-2xl">Visi Kejaksaan R.I :</h3>
              <p className="mt-2">
                Kejaksaan sebagai lembaga penegak hukum yang bersih, efektif,
                efisien, transparan, akuntabel, untuk dapat memberikan pelayanan
                prima dalam mewujudkan supremasi hukum secara profesional,
                proporsional dan bermartabat yang berlandaskan keadilan,
                kebenaran, serta nilai – nilai kepautan.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Misi Kejaksaan R.I :</h3>
              <ol className="list-decimal px-4 mt-2">
                <li>
                  Mengoptimalkan pelaksanaan fungsi Kejaksaan dalam pelaksanaa
                  tugas dan wewenang, baik dalam segi kualitas maupun kuantitas
                  penanganan perkara seluruh tindak pidana, penanganan perkara
                  Perdata dan Tata Usaha Negara, serta pengoptimalan kegiatan
                  Intelijen Kejaksaan, secara profesional, proposional dan
                  bermartabat melalui penerapan Standard Operating Procedure
                  (SOP) yang tepat, cermat, terarah, efektif, dan efisien.
                </li>
                <li>
                  Mengoptimalkan peranan bidang Pembinaan dan Pengawasan dalam
                  rangka mendukung pelaksanaan tugas bidang-bidang lainnya,
                  terutama terkait dengan upaya penegakan hukum.
                </li>
                <li>
                  Mengoptimalkan tugas pelayanan publik di bidang hukum dengan
                  penuh tanggung jawab, taat azas, efektif dan efisien, serta
                  penghargaan terhadap hak-hak publik;
                </li>
                <li>
                  Melaksanakan pembenahan dan penataan kembali struktur
                  organisasi Kejaksaan, pembenahan sistem informasi manajemen
                  terutama pengimplementasian program quickwins agar dapat
                  segera diakses oleh masyarakat, penyusunan cetak biru (blue
                  print) pembangunan sumber daya manusia Kejaksaan jangka
                  menengah dan jangka panjangtahun 2025, menerbitkan dan menata
                  kembali manajemen administrasi keuangan, peningkatan sarana
                  dan prasarana, serta peningkatan kesejahteraan pegawai melalui
                  tunjangan kinerja atau remunerasi, agar kinerja Kejaksaan
                  dapat berjalan lebih efektif, efisien, transparan, akuntabel
                  dan optimal.
                </li>
                <li>
                  Membentuk aparat Kejaksaan yang handal, tangguh, profesional,
                  bermoral dan beretika guna menunjang kelancaran pelaksanaan
                  tugas pokok, fungsi dan wewenang, terutama dalam upaya
                  penegakan hukum yang berkeadilan serta tugas-tugas lainnya
                  yang terkait.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

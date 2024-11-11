// pages/index.js
import { useState } from "react";
import { FaMoneyBillAlt, FaWhatsapp } from "react-icons/fa";
import Button from "../components/Button/Button";
import Image from "next/image";
import Header from "../components/Layout/Header";
import { Navbar } from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { FaMoneyBill } from "react-icons/fa";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

export async function getServerSideProps() {
  // Fetch data from an external API
  // const data = await fetch("https://api.example.com/services");
  const res = await fetch("http://localhost:3000/data/services.json");

  const services = await res.json();

  // Return data as props
  return {
    props: { services }, // This data will be available in the page component
  };
}

const Home = ({ services }) => {
  const [show, setShow] = useState(true);
  const [placement, setPlacement] = useState("right");

  const onChange = (placement) => {
    setShow(!show);
    setPlacement(placement);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-[url('/assets/img/bg-head2.png')] bg-fixed bg-cover bg-no-repeat xl:h-screen">
        <div className="block">
          <div className="container mx-auto flex flex-col-reverse justify-center md:flex-row md:text-left h-screen md:items-center px-4 md:px-0">
            <div className="w-full md:w-11/12 flex flex-col text-white items-start md:py-24 xl:py-40 ">
              <h1 className="w-3/4 font-poppins-medium text-xl ">
                We Might be Your Solution
              </h1>
              <h1 className="w-3/4 font-poppins-bold text-4xl xl:text-5xl md:leading-[50px] xl:leading-[58px]">
                We Help Create Your Mobile Apps
              </h1>
              <p className="font-poppins-medium text-base mt-4">
                with our experience working on various kinds of applications, we
                should be able to help you provide solutions to your problem
              </p>
              <Button
                classname="rounded-lg bg-[#f9c300] text-white px-6 py-3 flex gap-2.5 justify-center items-center text-lg font-poppins-bold mt-10 hover:no-underline hover:bg-[#e8bd22]"
                name="GET STARTED"
              />
            </div>
            <div className="w-3/4 md:w-5/6 container mx-12 mb-6 md:mx-0 md:mb-0 items-center hidden lg:block"></div>
          </div>
        </div>
      </div>
      {/* <div className="xl:h-screen">
        <Carousel
          showArrows={true}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          <div>
            <img src="/assets/img/banner-1.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="assets/4.jpeg" />
            <p className="legend">Legend 4</p>
          </div>
          <div>
            <img src="assets/5.jpeg" />
            <p className="legend">Legend 5</p>
          </div>
          <div>
            <img src="assets/6.jpeg" />
            <p className="legend">Legend 6</p>
          </div>
        </Carousel>
      </div> */}

      <div className="bg-gradient-to-t from-white to-[#bbd4fe] py-16">
        <div className="px-4 xl:px-0 xl:container mx-auto flex flex-col items-center md:h-max text-[#153164]">
          <h1 className="text-center font-poppins-bold text-4xl md:text-5xl mb-4">
            Bagaimana kami dapat membantu Anda?
          </h1>
          {/* <h6 className="text-center font-poppins-regular text-base tracking-widest">
            Here are the services we can provide.
          </h6> */}

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4 sm:w-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-10 flex flex-col gap-2 items-center shadow-xl border border-[#f5f5f5] text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#17438E] text-[32px] text-white">
                  <FaMoneyBillAlt />
                </div>
                <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-[#17438E] text-center">
                  {service.name}
                </div>
                <div className="mt-1 font-poppins-medium text-base text-[#616161]">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="px-4 xl:px-0 xl:container mx-auto flex flex-col items-center md:h-max text-black">
          <h1 className="text-center font-poppins-bold text-4xl md:text-5xl mb-4">
            Berita Terbaru
          </h1>
          {/* <h6 className="text-center font-poppins-regular text-base md:text-base tracking-widest">
            Innovation distinguishes between a leader and a follower.
          </h6> */}

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 sm:w-auto">
            <div className="rounded-xl bg-white shadow-xl border border-[#f5f5f5] sm:h-auto sm:max-h-[1200px] md:h-[70vh]  flex flex-col">
              <div className="h-full md:h-5/6  bg-[url('/assets/img/berita-2.jpg')] bg-cover bg-no-repeat"></div>
              <div className="px-4 py-3 h-auto">
                <h4 className="text-base font-bold">
                  Selamat Hari Batik Nasional Nasional
                </h4>
                <p className="text-sm mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  est cumque vitae sequi ducimus aperiam voluptates doloribus
                  repellendus at fuga? Voluptas.....
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-xl border border-[#f5f5f5] sm:h-auto sm:max-h-[1200px] md:h-[70vh]  flex flex-col">
              <div className="h-full md:h-5/6  bg-[url('/assets/img/berita-2.jpg')] bg-cover bg-no-repeat"></div>
              <div className="px-4 py-3 h-auto">
                <h4 className="text-base font-bold">
                  Selamat Hari Batik Nasional Nasional
                </h4>
                <p className="text-sm mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  est cumque vitae sequi ducimus aperiam voluptates doloribus
                  repellendus at fuga? Voluptas.....
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-xl border border-[#f5f5f5] sm:h-auto sm:max-h-[1200px] md:h-[70vh]  flex flex-col">
              <div className="h-full md:h-5/6  bg-[url('/assets/img/berita-2.jpg')] bg-cover bg-no-repeat"></div>
              <div className="px-4 py-3 h-auto">
                <h4 className="text-base font-bold">
                  Selamat Hari Batik Nasional Nasional
                </h4>
                <p className="text-sm mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  est cumque vitae sequi ducimus aperiam voluptates doloribus
                  repellendus at fuga? Voluptas.....
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-xl border border-[#f5f5f5] sm:h-auto sm:max-h-[1200px] md:h-[70vh]  flex flex-col">
              <div className="h-full md:h-5/6  bg-[url('/assets/img/berita-2.jpg')] bg-cover bg-no-repeat"></div>
              <div className="px-4 py-3 h-auto">
                <h4 className="text-base font-bold">
                  Selamat Hari Batik Nasional Nasional
                </h4>
                <p className="text-sm mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  est cumque vitae sequi ducimus aperiam voluptates doloribus
                  repellendus at fuga? Voluptas.....
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <Button
              classname="rounded-lg bg-[#153164] text-white px-6 py-3 flex gap-2.5 justify-center items-center text-lg font-poppins-bold mt-10 hover:no-underline hover:bg-[#e8bd22]"
              name="Berita Lainnya"
            />
          </div>
        </div>
      </div>

      <div className="pb-10 md:pb-16 px-4 lg:px-20 bg-[#fcf2f3]">
        <div className="sm:container sm:mx-auto bg-white flex flex-col md:flex-row justify-around rounded-xl shadow-xl z-10 w-full p-10">
          <div className="justify-center items-start text-black">
            <h1 className="text-2xl sm:text-3xl tracking-wide">
              Would you like to start a project with us?
            </h1>
            <h1 className="text-base sm:text-base mt-6">
              Feel free to contact if any questions
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-end md:w-4/12 mt-8 md:mt-0">
            <Link
              href="https://wa.me/62811333525"
              className="rounded-lg bg-[#17438E] text-white px-6 py-3 flex gap-2.5 justify-center items-center text-lg font-poppins-medium w-full md:w-auto hover:no-underline hover:text-[#17438E] hover:bg-white hover:border hover:border-[#17438E] duration-150"
            >
              <FaWhatsapp />
              <span>+62811333525</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

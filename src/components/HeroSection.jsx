import React from "react";
import { AuroraText } from "./Effect/AuroraText";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen  bg-center bg-cover grid grid-cols-1 md:grid-cols-3"
      style={{
        backgroundImage:
          "url('https://en.onepiece-cardgame.com/renewal/images/top/mv/st22/mv.webp')",
        fontFamily: '"Poppins", YuGothic, -apple-system, sans-serif',
      }}
    >
      {/* Cột 1: Text */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Chào mừng đến với{" "}
          <AuroraText
            speed={1.5}
            colors={["#38BDF8", "#3B82F6", "#EC4899", "#A855F7"]}
            className="ml-2"
          >
            KĀDO
          </AuroraText>
        </h1>

        <p className="text-lg md:text-3xl mb-6 text-white/90 font-bold">
          Nền tảng giao lưu, sưu tầm và trao đổi thẻ bài TCG tại Việt Nam.
        </p>

        <button className=" text-2xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:-translate-y-1">
          Tìm Hiểu Ngay
        </button>
      </div>

      <div></div>
      <div></div>
    </section>
  );
};

export default HeroSection;

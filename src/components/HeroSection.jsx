import React from "react";
import { ChevronDown } from "lucide-react";

const AuroraText = ({ children, className }) => {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse ${className}`}
    >
      {children}
    </span>
  );
};

const HeroSection = ({ onScrollDown }) => {
  return (
    <section
      className="relative w-full h-screen bg-center bg-cover flex items-center justify-center text-center"
      style={{
        backgroundImage: 'url("/background_KADO.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: '"Poppins", YuGothic, -apple-system, sans-serif',
      }}
    >
      <div
        className="absolute inset-0 bg-black/30 z-0"
        aria-hidden="true"
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center px-6 md:px-16 text-white">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {" "}
          Chào mừng đến với{" "}
          <AuroraText
            speed={1.5}
            colors={["#38BDF8", "#3B82F6", "#EC4899", "#A855F7"]}
            className="ml-2"
          >
            KĀDO
          </AuroraText>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-bold max-w-3xl">
          Nền tảng giao lưu, sưu tầm và trao đổi thẻ bài TCG tại Việt Nam.
        </p>
        <div>
          <button
            onClick={onScrollDown}
            className="text-lg md:text-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 hover:scale-105"
          >
            Tìm Hiểu Ngay
          </button>
        </div>
      </div>

      <button
        onClick={onScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 group"
        aria-label="Cuộn xuống"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all duration-300 group-hover:scale-110 border border-white/30">
            <ChevronDown className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
          </div>
        </div>
      </button>
    </section>
  );
};

export default HeroSection;

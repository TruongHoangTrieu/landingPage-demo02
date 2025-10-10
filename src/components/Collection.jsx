import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import ThreeDCard from "./Effect/ThreeDCard";

const slides = [
  {
    id: 1,
    bg: "https://i.redd.it/extended-card-art-wallpapers-part-2-v0-m9rryk6yk0nb1.jpg?width=3841&format=pjpg&auto=webp&s=bf36300668878c327c2bf2f736de1335ee92283a",
    card: "https://images.pokemoncard.io/images/swsh8/swsh8-269_hiresopt.jpg",
    logo: "https://tcg.pokemon.com/assets/img/global/logos/en-us/tcg-logo.png",
    title: "Pokémon TCG",
    subtitle:
      "Thu thập, chiến đấu và khám phá thế giới Pokémon với hàng nghìn lá bài độc đáo và hiếm có.",
    buttons: [
      { text: "Khám phá bộ sưu tập", color: "bg-yellow-400" },
      { text: "Xem tất cả thẻ", color: "bg-cyan-400" },
    ],
  },
  {
    id: 2,
    bg: "https://en.onepiece-cardgame.com/renewal/images/top/mv/st26/mv.webp",
    card: "https://en.onepiece-cardgame.com/images/cardlist/card/OP09-061_p2.png?251003",
    logo: "/one-piece-logo.png",
    title: "One Piece Card Game",
    subtitle:
      "Tập hợp đồng đội, triển khai chiến lược và trở thành Vua Hải Tặc trong thế giới One Piece!",
    buttons: [
      { text: "Khám phá thẻ bài", color: "bg-red-500" },
      { text: "Xem chi tiết bộ mở rộng", color: "bg-yellow-400" },
    ],
  },
  {
    id: 3,
    bg: "https://cdn.wallpapersafari.com/37/82/PczlZd.png",
    card: "https://ygovietnamcdn.azureedge.net/storage/Card/46986414.jpg",
    logo: "https://img.yugioh-card.com/en/wp-content/uploads/2020/04/logo-main.png",
    title: "Yu-Gi-Oh! Trading Card Game",
    subtitle:
      "Triệu hồi quái thú, kích hoạt ma pháp, tung bẫy và chiến thắng đối thủ trong đấu trường hấp dẫn nhất!",
    buttons: [
      { text: "Khám phá bài Yu-Gi-Oh!", color: "bg-purple-500" },
      { text: "Xem gallery", color: "bg-yellow-400" },
    ],
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-black">
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 
bg-black/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg z-20 "
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center">
          Hỗ trợ 3 loại thẻ bài phổ biến
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundPosition: "center center",
              }}
            >
              {/* Bên trái: logo, text, nút */}
              <div className="relative z-10 flex-1 flex flex-col gap-4 md:gap-5 text-center md:text-left text-white max-w-xl mt-10 md:mt-0 ml-0 md:ml-32">
                {slide.logo && (
                  <img
                    src={slide.logo}
                    alt="Logo"
                    className="w-[200px] md:w-[220px] mx-auto md:mx-0 drop-shadow-lg mb-2"
                  />
                )}
                <h1 className="text-4xl md:text-5xl font-black text-yellow-400 drop-shadow-xl">
                  {slide.title}
                </h1>
                <p className="text-4xl md:text-2xl  font-black text-gray-200 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                  {slide.buttons.map((btn, i) => (
                    <button
                      key={i}
                      className={`${btn.color} text-black font-bold px-5 py-3 rounded-full shadow-md hover:opacity-90 transition`}
                    >
                      {btn.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bên phải: card */}
              <div className="relative z-10 flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
                {/* 🎮 Khi đổi slide → card xoay 360 độ */}
                <motion.div
                  key={
                    activeIndex === index
                      ? `card-${slide.id}`
                      : `card-inactive-${slide.id}`
                  }
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: activeIndex === index ? 360 : 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="w-[260px] h-[360px] sm:w-[320px] sm:h-[460px] md:w-[400px] md:h-[550px] md:-translate-x-10 lg:-translate-x-16"
                >
                  <ThreeDCard
                    backgroundImage={slide.card}
                    maxRotation={45}
                    glowOpacity={0.8}
                  >
                    <img
                      src={slide.card}
                      alt="Card"
                      className="w-full h-full object-contain rounded-2xl pointer-events-none"
                    />
                  </ThreeDCard>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    bg: "https://i.redd.it/extended-card-art-wallpapers-part-2-v0-m9rryk6yk0nb1.jpg?width=3841&format=pjpg&auto=webp&s=bf36300668878c327c2bf2f736de1335ee92283a",
    card: "https://images.pokemoncard.io/images/swsh8/swsh8-269_hiresopt.jpg",
    cardBack: "/poke-back.png",
    logo: "https://tcg.pokemon.com/assets/img/global/logos/en-us/tcg-logo.png",
    title: "Pokémon TCG",
    subtitle:
      "Thu thập, chiến đấu và khám phá thế giới Pokémon với hàng nghìn lá bài độc đáo và hiếm có.",
    buttons: [],
  },
  {
    id: 2,
    bg: "https://en.onepiece-cardgame.com/renewal/images/top/mv/st26/mv.webp",
    card: "https://en.onepiece-cardgame.com/images/cardlist/card/OP09-061_p2.png?251003",
    cardBack: "/onepiece-back.png",
    logo: "/one-piece-logo.png",
    title: "One Piece Card Game",
    subtitle:
      "Tập hợp đồng đội, triển khai chiến lược và trở thành Vua Hải Tặc trong thế giới One Piece!",
    buttons: [],
  },
  {
    id: 3,
    bg: "https://cdn.wallpapersafari.com/37/82/PczlZd.png",
    card: "https://ygovietnamcdn.azureedge.net/storage/Card/46986414.jpg",
    cardBack: "/yugi-back.png",
    logo: "https://img.yugioh-card.com/en/wp-content/uploads/2020/04/logo-main.png",
    title: "Yu-Gi-Oh! Trading Card Game",
    subtitle:
      "Triệu hồi quái thú, kích hoạt ma pháp, tung bẫy và chiến thắng đối thủ trong đấu trường hấp dẫn nhất!",
    buttons: [],
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="cards" className="relative w-full overflow-hidden bg-black">
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 
bg-black/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg z-20 w-[90%] md:w-auto mt-12"
      >
        <h2 className="text-2xl md:text-5xl font-extrabold text-white text-center ">
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
        className="w-full min-h-[90vh] mobile-nav-hide"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full min-h-[100vh] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-16 pt-32 pb-16 md:pt-28 md:pb-0 gap-8 md:gap-0"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            >
              <div className="relative z-10 flex-1 flex flex-col gap-4 md:gap-5 text-center md:text-left text-white max-w-xl ml-0 md:ml-32">
                {slide.logo && (
                  <img
                    src={slide.logo}
                    alt="Logo"
                    className="w-[200px] md:w-[220px] mx-auto md:mx-0 drop-shadow-lg mb-2"
                  />
                )}
                <h1 className="text-3xl md:text-5xl font-black text-yellow-400 drop-shadow-xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl font-black text-gray-200 leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>

              <div className="relative z-10 flex-1 flex justify-center md:justify-end mt-5 mb-5">
                <div
                  className="w-[260px] h-[360px] sm:w-[320px] sm:h-[460px] md:w-[400px] md:h-[550px] md:-translate-x-10 lg:-translate-x-16"
                  style={{ perspective: "1200px" }}
                >
                  <motion.div
                    key={
                      activeIndex === index
                        ? `card-${slide.id}`
                        : `card-inactive-${slide.id}`
                    }
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="relative w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="absolute w-full h-full"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={slide.card}
                        alt="Card Front"
                        className="w-full h-full object-contain rounded-2xl pointer-events-none mt-10"
                      />
                    </div>

                    <div
                      className="absolute w-full h-full"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <img
                        src={slide.cardBack}
                        alt="Card Back"
                        className="w-full h-full object-contain rounded-2xl pointer-events-none"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .mobile-nav-hide .swiper-button-next,
        .mobile-nav-hide .swiper-button-prev {
          display: none;
        }
        @media (min-width: 768px) {
          .mobile-nav-hide .swiper-button-next,
          .mobile-nav-hide .swiper-button-prev {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;

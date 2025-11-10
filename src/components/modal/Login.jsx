import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { X, Mail, Lock, Eye } from "lucide-react";

export default function ModalLogin({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    onClose();
    navigate("/register");
  };

  const slides = [
    {
      title: "Bắt đầu hành trình sưu tập KADO",
      text: "Đăng ký tài khoản để tạo bộ sưu tập đầu tiên và kết nối với cộng đồng người chơi thẻ bài trên toàn cầu.",
      image: <div className="text-white text-5xl mb-4 font-extrabold"></div>,
    },
    {
      title: "Mua token – giao dịch thẻ bài mọi lúc",
      text: "Sử dụng token KADO để mua, bán và sở hữu những lá bài hiếm nhất trong thị trường sưu tập.",
      image: <div className="text-white text-5xl mb-4 font-extrabold"></div>,
    },
    {
      title: "Cộng đồng KADO",
      text: "Tham gia các sự kiện, đấu giá và trao đổi với hàng ngàn nhà sưu tập khác.",
      image: <div className="text-white text-5xl mb-4 font-extrabold"></div>,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex w-full h-auto sm:h-[600px] sm:max-w-4xl overflow-hidden rounded-xl sm:rounded-none lg:rounded-xl shadow-2xl transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="hidden lg:flex w-5/12 flex-col justify-center relative p-8 text-white"
          style={{
            backgroundImage: `url('/kado.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70 z-0"></div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass:
                "swiper-pagination-bullet bg-white/50 w-3 h-3 rounded-full mx-1 transition-all duration-300 inline-block cursor-pointer hover:bg-white/80",
              bulletActiveClass: "bg-white scale-125",
            }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            className="w-full h-full z-10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center p-8"
              >
                <div className="text-center">
                  <div className="flex justify-center items-center h-20">
                    {slide.image}
                  </div>
                  <h2 className="text-3xl font-bold mt-4 mb-2 leading-snug">
                    {slide.title}
                  </h2>
                  <p className="text-lg font-medium opacity-90">{slide.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10" />
        </div>

        <div className="w-full lg:w-7/12 bg-white p-8 sm:p-12 flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 transition-colors z-20"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col space-y-6 mt-8">
            {/* Tiêu đề */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900">
                Đăng nhập bằng Email
              </h1>
              <p className="text-gray-500 mt-2 text-base">
                Tham gia KĀDO để bắt đầu hành trình sưu tập thẻ bài của bạn.
              </p>
            </div>

            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Địa chỉ Email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500 transition duration-150 outline-none"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500 transition duration-150 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-end text-sm">
                <a
                  href="#"
                  className="text-yellow-400 hover:underline font-medium"
                >
                  Quên mật khẩu?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-lg font-bold text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors shadow-lg mt-6"
              >
                Đăng nhập
              </button>
            </form>

            <div className="text-center text-sm text-gray-600 pt-2">
              Chưa có tài khoản?{" "}
              <a
                href="/register"
                onClick={handleRegisterClick}
                className="font-semibold text-yellow-400 hover:text-yellow-500 transition-colors"
              >
                Đăng ký ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

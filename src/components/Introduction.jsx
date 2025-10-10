import React from "react";

const HeroIntro = () => {
  return (
    <section
      className="relative w-full h-[85vh] bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage:
          "url('https://www.pixelstalk.net/wp-content/uploads/2025/07/A-serene-landscape-with-Pokemon-in-their-natural-habitat-perfect-as-a-HD-wallpaper.jpg')",
      }}
    >
      {/* Container text có overlay */}
      <div className="relative z-10 bg-black/60 backdrop-blur-sm text-white max-w-xl px-6 md:px-12 py-8 rounded-lg ml-6 md:ml-16">
        <h1 className="text-3xl md:text-3xl font-extrabold mb-4 leading-tight">
          MỚI BẮT ĐẦU VỚI THẾ GIỚI THẺ BÀI?
        </h1>
        <p className="text-xl md:text-xl mb-6  leading-relaxed">
          Chào mừng bạn đến với <span className="font-semibold">KĀDO</span> —
          nền tảng dành riêng cho những người yêu thích thẻ bài.
          <br/> 
          <br/> Tại đây, bạn có
          thể học cách chơi, xây dựng bộ bài yêu thích và khám phá chiến lược từ
          cộng đồng người chơi trên khắp thế giới.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
            Hướng Dẫn Cho Người Mới →
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
            Cách Chơi →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;

import React from "react";

const HeroIntro = () => {
  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center md:justify-start" // <-- THAY ĐỔI: Căn giữa trên mobile, căn trái từ 'md'
      style={{
        backgroundImage:
          "url('https://www.pixelstalk.net/wp-content/uploads/2025/07/A-serene-landscape-with-Pokemon-in-their-natural-habitat-perfect-as-a-HD-wallpaper.jpg')",
      }}
    >
      {/* Container text có overlay */}
      <div className="relative z-10 bg-black/60 backdrop-blur-sm text-white w-full max-w-xl px-6 md:px-12 py-8 rounded-lg mx-4 md:ml-16 md:mx-0"> {/* <-- THAY ĐỔI: Thêm mx-4, w-full và bỏ ml-6 */}
        
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight"> {/* <-- THAY ĐỔI: Giảm font h1 trên mobile */}
          MỚI BẮT ĐẦU VỚI THẾ GIỚI THẺ BÀI?
        </h1>

        <p className="text-lg md:text-xl mb-6 leading-relaxed"> {/* <-- THAY ĐỔI: Giảm font p trên mobile */}
          Chào mừng bạn đến với <span className="font-semibold">KĀDO</span> —
          nền tảng dành riêng cho những người yêu thích thẻ bài.
          <br />
          <br /> Tại đây, bạn có
          thể học cách chơi, xây dựng bộ bài yêu thích và khám phá chiến lược từ
          cộng đồng người chơi trên khắp thế giới.
        </p>

        <div className="flex flex-col md:flex-row flex-wrap gap-4"> {/* <-- THAY ĐỔI: Xếp dọc trên mobile, ngang từ 'md' */}
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
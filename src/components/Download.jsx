"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DownloadSection() {
  const backgroundImageURL =
    "https://images.unsplash.com/photo-1628968434441-d9c1c66dcde7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0";

  return (
    <section
      className="relative text-gray-900 py-28 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay làm mờ nền để dễ đọc chữ */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>

      {/* Nội dung chính */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl px-6 space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Tải Ngay Ứng Dụng{" "}
          <span className="text-[#0284c7] italic font-extrabold">KĀDO</span>
        </h2>

        <ul className="space-y-3 text-gray-700 text-lg text-left md:text-center mx-auto inline-block">
          <li className="flex items-center gap-3 justify-start md:justify-center">
            <span className="w-3 h-3 bg-[#38bdf8] rounded-full"></span>
            Quản lý bộ sưu tập thẻ bài của bạn một cách chuyên nghiệp
          </li>
          <li className="flex items-center gap-3 justify-start md:justify-center">
            <span className="w-3 h-3 bg-[#38bdf8] rounded-full"></span>
            Cập nhật thông tin set thẻ và giá trị thị trường nhanh chóng
          </li>
          <li className="flex items-center gap-3 justify-start md:justify-center">
            <span className="w-3 h-3 bg-[#38bdf8] rounded-full"></span>
            Kết nối và trao đổi với cộng đồng sưu tập TCG
          </li>
        </ul>
      </motion.div>

      {/* Nút bên dưới */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 mt-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#38bdf8] text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-[#0ea5e9] transition duration-300"
        >
          Tải ứng dụng
        </motion.button>
      </motion.div>
    </section>
  );
}

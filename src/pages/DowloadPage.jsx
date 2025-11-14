import React, { useState } from "react";
import { FaAndroid } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";

const QR_CODE_URL = "/qr.png";
const MASCOT_URL = "/kado-mascot.png";
const BACKGROUND_IMAGE_URL = "/kado-bg.png";
const DOWNLOAD_URL =
  "https://api.expo.dev/v2/artifacts/eas/w9vqqvZ9586cMj3ADaiZ48";

function DowloadPage() {
  const [activeTab, setActiveTab] = useState("ANDROID");

  const PRIMARY_COLOR = "#6366F1";
  const HOVER_COLOR = "#4F46E5";

  let content;

  if (activeTab === "ANDROID") {
    content = (
      <>
        <div
          className={`flex items-center justify-center gap-2 text-xl font-semibold mt-2 mb-4`}
          style={{ color: PRIMARY_COLOR }}
        >
          <BsQrCodeScan size={24} />
          <span>Quét mã để tải ứng dụng</span>
        </div>

        <img
          src={QR_CODE_URL}
          alt="Momo QR Code"
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] mb-4"
        />

        <button
          onClick={() => (window.location.href = DOWNLOAD_URL)}
          className="w-[90%] sm:w-1/3 py-3 text-white text-lg font-bold rounded-xl shadow-xl mt-4 flex items-center justify-center"
          style={{
            backgroundColor: PRIMARY_COLOR,
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = HOVER_COLOR;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = PRIMARY_COLOR;
          }}
        >
          Tải Ứng Dụng
        </button>
      </>
    );
  } else {
    content = (
      <div className="flex flex-col items-center justify-center h-full py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wider">
          <span className="text-red-500">COMING SOON</span>!
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          Ứng dụng đang trong quá trình phát triển.
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      <div className="flex-grow flex flex-col items-center justify-center py-10 pt-18 px-4 sm:px-0">
        <div className="flex w-full max-w-xl sm:max-w-2xl lg:max-w-[900px] text-xl font-bold mb-4 z-10">
          <span
            className={`flex-1 text-center cursor-pointer pb-1 transition duration-300 border-b-4 ${
              activeTab === "IOS"
                ? "text-white opacity-100 border-white"
                : "text-white opacity-80 border-transparent"
            }`}
            onClick={() => setActiveTab("IOS")}
          >
            IOS
          </span>

          <span
            className={`flex-1 text-center cursor-pointer pb-1 transition duration-300 border-b-4 ${
              activeTab === "ANDROID"
                ? "text-[#f7b500] opacity-100 border-[#f7b500]"
                : "text-white opacity-80 border-transparent"
            }`}
            onClick={() => setActiveTab("ANDROID")}
          >
            ANDROID
          </span>
        </div>

        <div
          className="bg-[#FFFFFF] rounded-3xl p-5 w-full max-w-xl sm:max-w-2xl lg:max-w-[900px] flex flex-col items-center relative z-10"
          style={{ boxShadow: `0 0 25px 8px rgba(102, 126, 234, 0.8)` }}
        >
          {content}

          <img
            src={MASCOT_URL}
            alt="Momo Mascot"
            className="absolute w-20 h-auto z-20 bottom-[-40px] right-[-40px] sm:w-120 sm:h-auto sm:bottom-[-80px] sm:right-[-80px] hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
}

export default DowloadPage;

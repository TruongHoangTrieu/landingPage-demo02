import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function EmailVerificationSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const KADO_YELLOW = "text-yellow-400";

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white relative p-4"
      style={{
        backgroundImage: `url('/kado.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="max-w-md w-full p-8 sm:p-12 bg-black/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl z-10 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className={`w-24 h-24 ${KADO_YELLOW}`} strokeWidth={2} />
        </div>

        {/* Title */}
        <h1 className={`text-4xl font-black ${KADO_YELLOW} mb-4`}>
          Kādo (<span className="text-base font-normal">カード</span>)
        </h1>

        {/* Success Message */}
        <h2 className="text-2xl font-bold text-white mb-4">
          Đăng ký tài khoản thành công!
        </h2>

        <p className="text-gray-300 text-base mb-8">
          Chào mừng bạn đến với{" "}
          <span className={`font-bold ${KADO_YELLOW}`}>Kādo</span>.
          <br />
          Tài khoản của bạn đã được kích hoạt thành công.
          <br />
          <br />
          Giờ đây bạn đã có thể đăng nhập vào app{" "}
          <span className={`font-bold ${KADO_YELLOW}`}>
            Kādo (<span className="text-base font-normal">カード</span>)
          </span>
        </p>

        {/* Countdown */}
        <div className="text-sm text-gray-400">
          Tự động chuyển về trang chủ sau{" "}
          <span className={`font-bold text-xl ${KADO_YELLOW}`}>
            {countdown}
          </span>{" "}
          giây...
        </div>

        {/* Manual redirect button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-colors duration-200"
        >
          Về trang chủ ngay
        </button>
      </div>
    </div>
  );
}

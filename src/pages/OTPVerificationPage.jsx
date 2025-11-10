import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OTPVerificationPage({ email = "tr*****03@gmail.com" }) {
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef([]);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const navigate = useNavigate();

  const KADO_YELLOW = "bg-yellow-400 hover:bg-yellow-500";
  const TEXT_YELLOW = "text-yellow-400";
  const BORDER_OTP = "border-yellow-400 focus:border-yellow-500";

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (isResendDisabled && resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (resendTimer === 0) {
      setIsResendDisabled(false);
      setResendTimer(60);
    }
  }, [isResendDisabled, resendTimer]);

  const handleResend = () => {
    console.log("Gửi lại mã OTP...");
    setIsResendDisabled(true);
    setResendTimer(60);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    if (finalOtp.length === OTP_LENGTH) {
      alert(`Xác nhận OTP: ${finalOtp}`);
    } else {
      alert("Vui lòng nhập đủ 6 số.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/");
  };

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

      <div className="max-w-sm w-full p-6 sm:p-8 bg-black/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl z-10">
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-black ${TEXT_YELLOW} mb-4`}>
            Kādo (<span className="text-base font-normal">カード</span>)
          </h1>

          <h2 className="text-xl font-bold text-white mb-6">Xác thực OTP</h2>

          <p className="text-sm text-gray-300">
            Mã xác thực đã được gửi đến <br />
            <span className={`font-bold text-lg ${TEXT_YELLOW}`}>{email}</span>
          </p>
          <p className="text-sm mt-2 text-gray-300">
            Vui lòng nhập <span className="font-bold">6 số</span> vào bên dưới
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-2 sm:space-x-3">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className={`w-10 sm:w-12 h-12 text-center text-2xl font-bold bg-transparent border-b-2 ${BORDER_OTP} focus:outline-none focus:ring-0 rounded-none text-white transition-colors duration-200`}
                style={{ caretColor: "transparent" }}
                required
              />
            ))}
          </div>

          <div className="text-center text-sm text-gray-400">
            Bạn không nhận được mã OTP?
            <button
              type="button"
              onClick={handleResend}
              disabled={isResendDisabled}
              className={`font-bold ${TEXT_YELLOW} transition-opacity duration-300 disabled:opacity-50`}
            >
              Gửi lại {isResendDisabled && `(${resendTimer}s)`}
            </button>
          </div>

          <button
            type="submit"
            className={`w-full py-4 text-xl font-bold text-gray-900 ${KADO_YELLOW} rounded-xl shadow-lg mt-8 transition-colors duration-200`}
          >
            XÁC NHẬN
          </button>
        </form>

        {/* Quay lại Đăng nhập */}
        <div className="text-center mt-6">
          <button
            onClick={handleLoginRedirect}
            className={`text-base font-bold text-gray-400 hover:text-yellow-400 transition-colors`}
          >
            Quay lại <span className={`${TEXT_YELLOW}`}>Đăng nhập</span>
          </button>
        </div>
      </div>
    </div>
  );
}

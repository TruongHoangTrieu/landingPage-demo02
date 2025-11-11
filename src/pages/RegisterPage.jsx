import React, { useState } from "react";
import { User, Mail, Lock, Eye, Calendar, Key, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { register, loading } = useRegister();

  const fields = [
    {
      name: "ten",
      placeholder: "Tên",
      icon: User,
      type: "text",
      required: true,
    },
    { name: "ho", placeholder: "Họ", icon: User, type: "text", required: true },
    {
      name: "email",
      placeholder: "Nhập Email",
      icon: Mail,
      type: "email",
      required: true,
    },
    {
      name: "username",
      placeholder: "Tên tài khoản (chỉ chữ, số, gạch dưới)",
      icon: Edit,
      type: "text",
      required: true,
    },
    {
      name: "dob",
      placeholder: "Ngày sinh (YYYY-MM-DD)", // Đã cập nhật placeholder để hướng dẫn định dạng
      icon: Calendar,
      type: "text", // <-- Đã thay đổi từ "date" sang "text"
      required: true,
      // Bạn có thể thêm pattern nếu muốn ép buộc định dạng nhập liệu
      // pattern: "\\d{4}-\\d{2}-\\d{2}", // Ví dụ: YYYY-MM-DD
      // title: "Vui lòng nhập ngày sinh theo định dạng YYYY-MM-DD",
    },
    {
      name: "password",
      placeholder: "Mật khẩu",
      icon: Lock,
      isPassword: true,
      showState: showPassword,
      toggleShow: setShowPassword,
      required: true,
      minLength: 8,
    },
    {
      name: "confirmPassword",
      placeholder: "Xác nhận Mật khẩu",
      icon: Key,
      isPassword: true,
      showState: showConfirmPassword,
      toggleShow: setShowConfirmPassword,
      required: true,
      minLength: 8,
    },
  ];

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      email: form.email.value,
      username: form.username.value,
      password: form.password.value,
      firstName: form.ten.value,
      lastName: form.ho.value,
      dateOfBirth: form.dob.value,
    };

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Email không hợp lệ!");
      return;
    }

    // --- BỔ SUNG VALIDATION CHO NGÀY SINH (khi type="text") ---
    // Ví dụ: Kiểm tra định dạng YYYY-MM-DD
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobRegex.test(data.dateOfBirth)) {
      alert("Ngày sinh không hợp lệ. Vui lòng nhập theo định dạng YYYY-MM-DD!");
      return;
    }
    // Bạn cũng có thể thêm logic kiểm tra ngày tháng hợp lệ (vd: 30/02)
    const dateParts = data.dateOfBirth.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // Tháng trong JS Date là từ 0-11
    const day = parseInt(dateParts[2]);
    const dateObj = new Date(year, month, day);

    if (dateObj.getFullYear() !== year || dateObj.getMonth() !== month || dateObj.getDate() !== day) {
        alert("Ngày sinh không tồn tại. Vui lòng kiểm tra lại!");
        return;
    }
    // Đảm bảo không chọn ngày trong tương lai
    if (dateObj > new Date()) {
        alert("Ngày sinh không thể là ngày trong tương lai!");
        return;
    }
    // --------------------------------------------------------

    // Validate password length
    if (data.password.length < 8) {
      alert("Mật khẩu phải có ít nhất 8 ký tự!");
      return;
    }

    // Validate password has at least one uppercase and one lowercase letter
    const hasUpperCase = /[A-Z]/.test(data.password);
    const hasLowerCase = /[a-z]/.test(data.password);
    if (!hasUpperCase || !hasLowerCase) {
      alert("Mật khẩu phải có ít nhất 1 chữ hoa và 1 chữ thường!");
      return;
    }

    // Validate password confirmation
    if (form.password.value !== form.confirmPassword.value) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      const response = await register(data);
      if (response.success) {
        // Navigate to OTP page with email
        navigate("/otp-verification", { state: { email: data.email } });
      } else {
        alert(response.message || "Đăng ký thất bại!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.message || "Có lỗi xảy ra khi đăng ký!");
    }
  };

  const inputStyle =
    "w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 outline-none text-gray-800";
  const iconStyle =
    "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400";
  const buttonStyle =
    "w-full py-3 px-4 text-lg font-bold text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors shadow-lg mt-6";

  return (
    <div className="flex min-h-screen w-full bg-gray-900">
      <div
        className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center relative p-8 text-white"
        style={{
          backgroundImage: `url('/kado.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 z-0"></div>
      </div>

      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-4 sm:p-8">
        <div className="max-w-md w-full p-6 sm:p-8">
          <div className="flex flex-col space-y-4">
            <div className="mb-4 text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                ĐĂNG KÝ TÀI KHOẢN
              </h1>
              <p className="text-gray-500 mt-2 text-base">
                Tham gia KĀDO để bắt đầu hành trình sưu tập thẻ bài của bạn.
              </p>
            </div>

            <form onSubmit={handleRegistrationSubmit} className="space-y-3">
              {fields.map((field) => {
                const Icon = field.icon;
                const inputType = field.isPassword
                  ? field.showState
                    ? "text"
                    : "password"
                  : field.type || "text";

                return (
                  <div key={field.name} className="relative">
                    <Icon className={iconStyle} />
                    <input
                      type={inputType}
                      placeholder={field.placeholder}
                      name={field.name}
                      className={inputStyle}
                      required={field.required}
                      minLength={field.minLength}
                      autoCapitalize="none"
                      autoCorrect="off"
                      // Pattern cho email và password vẫn giữ nguyên.
                      // Nếu bạn thêm pattern cho dob, bạn có thể thêm vào đây:
                      // field.name === "dob" ? "\\d{4}-\\d{2}-\\d{2}" : undefined
                      pattern={
                        field.name === "email"
                          ? "[^\\s@]+@[^\\s@]+\\.[^\\s@]+"
                          : field.name === "password" ||
                            field.name === "confirmPassword"
                          ? "(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          : field.name === "dob" // <-- Thêm pattern cho DOB nếu muốn
                          ? "^\\d{4}-\\d{2}-\\d{2}$" // Ví dụ định dạng YYYY-MM-DD
                          : undefined
                      }
                      title={
                        field.name === "email"
                          ? "Vui lòng nhập email hợp lệ"
                          : field.name === "password" ||
                            field.name === "confirmPassword"
                          ? "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa và chữ thường"
                          : field.name === "dob" // <-- Thêm title cho DOB nếu muốn
                          ? "Vui lòng nhập ngày sinh theo định dạng YYYY-MM-DD"
                          : field.minLength
                          ? `Tối thiểu ${field.minLength} ký tự`
                          : undefined
                      }
                    />
                    {field.isPassword && (
                      <button
                        type="button"
                        onClick={() => field.toggleShow(!field.showState)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition"
                        aria-label={
                          field.showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"
                        }
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                );
              })}

              <button
                type="submit"
                className={buttonStyle + " mt-6"}
                disabled={loading}
              >
                {loading ? "ĐANG TẠO TÀI KHOẢN..." : "TẠO TÀI KHOẢN"}
              </button>
            </form>

            {/* <div className="text-center text-sm text-gray-600 pt-2">
              Đã có tài khoản?
              <a
                href="/"
                onClick={handleLoginLinkClick}
                className="font-semibold text-yellow-400 hover:text-yellow-500 transition-colors"
              >
                Đăng nhập
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
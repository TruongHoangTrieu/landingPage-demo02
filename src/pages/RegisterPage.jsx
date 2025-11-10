
import React, { useState } from "react";
import { User, Mail, Lock, Eye, Calendar, Key, Edit } from "lucide-react"; 
import { useNavigate } from "react-router-dom"; 
export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); 


  const fields = [
    { name: "ten", placeholder: "Tên", icon: User, type: "text", required: true },
    { name: "ho", placeholder: "Họ", icon: User, type: "text", required: true },
    { name: "email", placeholder: "Nhập Email", icon: Mail, type: "email", required: true },
    { name: "username", placeholder: "Tên đăng nhập (chỉ chữ, số, gạch dưới)", icon: Edit, type: "text", required: true },
    { name: "dob", placeholder: "Ngày sinh (YYYY-MM-DD)", icon: Calendar, type: "text", required: true },
    { name: "password", placeholder: "Mật khẩu", icon: Lock, isPassword: true, showState: showPassword, toggleShow: setShowPassword, required: true },
    { name: "confirmPassword", placeholder: "Xác nhận Mật khẩu", icon: Key, isPassword: true, showState: showConfirmPassword, toggleShow: setShowConfirmPassword, required: true },
  ];

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    alert("Đã gửi form Đăng ký!");
  };
  
  const inputStyle = "w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 outline-none text-gray-800";
  const iconStyle = "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400";
  const buttonStyle = "w-full py-3 px-4 text-lg font-bold text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors shadow-lg mt-6";

  const handleLoginLinkClick = (e) => {
    e.preventDefault();
    navigate('/'); 
  };

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

      <div 
        className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-4 sm:p-8"
      >
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
                const inputType = field.isPassword ? (field.showState ? "text" : "password") : (field.type || "text");
                
                return (
                  <div key={field.name} className="relative">
                    <Icon className={iconStyle} />
                    <input
                      type={inputType}
                      placeholder={field.placeholder}
                      name={field.name}
                      className={inputStyle}
                      required={field.required}
                    />
                    {field.isPassword && (
                      <button
                        type="button"
                        onClick={() => field.toggleShow(!field.showState)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition"
                        aria-label={field.showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                );
              })}
              
              <button type="submit" className={buttonStyle + " mt-6"}>
                TẠO TÀI KHOẢN
              </button>
            </form>
            
            <div className="text-center text-sm text-gray-600 pt-2">
                Đã có tài khoản?
                <a 
                  href="/" 
                  onClick={handleLoginLinkClick} 
                  className="font-semibold text-yellow-400 hover:text-yellow-500 transition-colors"
                >
                    Đăng nhập
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
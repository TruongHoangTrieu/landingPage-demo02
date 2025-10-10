"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Camera, TrendingUp, Users, Shield, Zap, Database } from "lucide-react";

// =============== COMPONENT GỐC ===============
const ArrowRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.22 2.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 8.5H3.75a.75.75 0 0 1 0-1.5h8.19L8.22 3.78a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {Icon && (
        <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-300 mb-2" />
      )}

      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
        {name}
      </h3>

      <p className="max-w-lg text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>

    {href && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <a
          href={href}
          className="pointer-events-auto text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 flex items-center"
        >
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

// =============== DỮ LIỆU TÍNH NĂNG ===============
const features = [
  {
    Icon: Camera,
    name: "Quét thẻ bài",
    description:
      "Sử dụng camera để quét và thêm thẻ bài vào bộ sưu tập chỉ trong vài giây.",
    href: "#",
    cta: "Tìm hiểu thêm",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-indigo-50 dark:bg-indigo-950/20" />
    ),
  },
  {
    Icon: TrendingUp,
    name: "Theo dõi giá trị",
    description:
      "Cập nhật giá thị trường real-time để biết giá trị bộ sưu tập của bạn.",
    href: "#",
    cta: "Xem chi tiết",
    className: "lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-pink-50 dark:bg-pink-950/20" />
    ),
  },
  {
    Icon: Users,
    name: "Cộng đồng",
    description:
      "Kết nối với người chơi khác, trao đổi thẻ bài và chia sẻ deck.",
    href: "#",
    cta: "Tham gia ngay",
    className: "lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-cyan-50 dark:bg-cyan-950/20" />
    ),
  },
  {
    Icon: Shield,
    name: "Bảo mật",
    description: "Dữ liệu được mã hóa và sao lưu tự động trên cloud.",
    href: "#",
    cta: "Tìm hiểu thêm",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-green-50 dark:bg-green-950/20" />
    ),
  },
  {
    Icon: Zap,
    name: "Deck Builder",
    description: "Công cụ xây dựng deck mạnh mẽ với gợi ý thông minh.",
    href: "#",
    cta: "Khám phá",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-yellow-50 dark:bg-yellow-950/20" />
    ),
  },
  {
    Icon: Database,
    name: "Database đầy đủ",
    description:
      "Hơn 35,000 thẻ bài với thông tin chi tiết và hình ảnh chất lượng cao.",
    href: "#",
    cta: "Xem thư viện",
    className: "lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-purple-50 dark:bg-purple-950/20" />
    ),
  },
];

// =============== COMPONENT CHÍNH ===============
export default function BentoGridCom() {
  return (
    <section
      className="w-full p-4 sm:p-6 lg:p-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/gray-abstract-wireframe-background_53876-99911.jpg?semt=ais_hybrid&w=740&q=80')", // Đường dẫn ảnh nền
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-black bg-clip-text mb-2 leading-[2.1]">
            Tính năng nổi bật
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Mọi thứ bạn cần để quản lý và phát triển bộ sưu tập thẻ bài của mình
          </p>
        </div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

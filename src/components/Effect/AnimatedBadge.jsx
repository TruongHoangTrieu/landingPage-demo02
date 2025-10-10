"use client";
import React from "react";

const DownloadIcon = () => (
  <svg
    fill="none"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <line
      x1="12"
      y1="3"
      x2="12"
      y2="11"
      stroke="rgb(44,169,188)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <polyline
      points="9 8 12 11 15 8"
      stroke="rgb(44,169,188)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21,13,18.23,4.68A1,1,0,0,0,17.28,4H16"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8,4H6.72a1,1,0,0,0-1,.68L3,13"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21,13v7a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V13H8a4,4,0,0,0,8,0Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export const AnimatedBadge = ({ text = "Tải ứng dụng" }) => {
  return (
    <>
      <style>
        {`
          @keyframes move-bg {
            to {
              background-position: 400% 0;
            }
          }
        `}
      </style>
      <div
        className={`rounded-full p-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent [background-size:400%_100%]`}
        style={{ animation: "move-bg 8s linear infinite" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xl font-semibold text-white shadow-md backdrop-blur-md">
          <DownloadIcon />
          <span>{text}</span>
        </div>
      </div>
    </>
  );
};

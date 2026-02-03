import React from "react";

export default function Button({ children, variant = "primary", ...props }) {
  const base =
    "px-4 py-2 rounded-lg font-semibold transition duration-200 text-sm";
  const variants = {
    primary: "bg-[#4BA0E0] text-white hover:bg-[#3A8DC6]",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
import React from "react";

function DownArrow({ size, color }) {
  const defaultColor = "currentColor";
  const fillColor = color || defaultColor;

  return (
    <svg
      width={size}
      height={size}
      fill={fillColor}
      viewBox="0 0 32 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M31.25 3.74935L15.8438 19.4264L0.328125 3.63997L3.47917 0.431641L15.8438 13.0046L28.099 0.541016L31.25 3.74935Z" />
    </svg>
  );
}
export default DownArrow;

import React from "react";

function RightArrow({ size, color }) {
  const defaultColor = "currentColor";
  const fillColor = color || defaultColor;

  return (
    <svg
      width={size}
      height={size}
      fill={fillColor}
      viewBox="0 0 15 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.17185 0.853516C2.48435 0.166016 1.36456 0.166016 0.677062 0.853516C-0.0104367 1.54102 -0.0104367 2.66081 0.677062 3.34831L9.96352 12.64L0.677062 21.9264C-0.0104367 22.6139 -0.0104367 23.7337 0.677062 24.4212C1.02081 24.765 1.47394 24.9368 1.92706 24.9368C2.38019 24.9368 2.8281 24.765 3.17706 24.4212L13.7083 13.8848C14.401 13.1973 14.401 12.0775 13.7083 11.39L3.17185 0.853516Z" />
    </svg>
  );
}
export default RightArrow;

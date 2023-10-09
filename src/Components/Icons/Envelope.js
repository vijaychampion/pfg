import React from "react";

function Envelope({ size, color }) {
  const defaultColor = "currentColor";
  const fillColor = color || defaultColor;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fillColor}
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="20"
        d="M27.878,115.042c5.583-4.59,12.742-7.335,20.532-7.335H463.59c7.79,0,14.95,2.745,20.532,7.346"
      ></path>
      <path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="20"
        d="M496,140.117v231.766c0,17.893-14.506,32.41-32.41,32.41H48.41c-17.9,0-32.41-14.511-32.41-32.41V140.117
		c0-10.114,4.625-19.131,11.878-25.075l215.499,172.878c7.375,5.917,17.871,5.917,25.246,0l215.499-172.867
		C491.375,120.986,496,130.003,496,140.117z"
      ></path>
      <line
        x1="195.769"
        x2="27.878"
        y1="249.727"
        y2="396.958"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="20"
      ></line>
      <line
        x1="316.359"
        x2="484.25"
        y1="249.727"
        y2="396.958"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="20"
      ></line>
    </svg>
  );
}
export default Envelope;

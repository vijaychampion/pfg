import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ link, text, icon }) {
  return (
    <Link
      to={link}
      target="_blank"
      className="w-full flex flex-col items-center justify-center rounded-lg border border-black p-2 no-underline hover:bg-black/10 transition duration-150"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos-once="true"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default LinkButton;

import React from "react";
import { Link } from "react-router-dom";

function Button({ isLink, onClick, children, additionalClass }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 lg:gap-4 px-5 lg:px-10 py-3 lg:py-5 rounded-full border border-black text-base lg:text-xl font-semibold font-blacker hover:bg-black/10 transition duration-150";
  const combinedClasses = additionalClass
    ? `${baseClasses} ${additionalClass}`
    : baseClasses;

  if (isLink) {
    return (
      <Link
        to={onClick}
        className={combinedClasses}
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos-once="true"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      type="button"
      onClick={onClick}
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos-once="true"
    >
      {children}
    </button>
  );
}

export default Button;

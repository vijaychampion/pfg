import React from "react";

function Paragraph({ paraText, additionalClass }) {
  const baseClasses = "text-base lg:text-lg";
  const combinedClasses = additionalClass
    ? `${baseClasses} ${additionalClass}`
    : baseClasses;

  return (
    <p
      dangerouslySetInnerHTML={{ __html: paraText }}
      className={combinedClasses}
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos-once="true"
    />
  );
}

export default Paragraph;

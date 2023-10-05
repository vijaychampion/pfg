import React from "react";

function SectionSubtitle({ title, additionalClass }) {
  const baseClasses = "text-2xl font-bold uppercase";
  const combinedClasses = `${baseClasses} ${additionalClass}`;

  return (
    <h4
      className={combinedClasses}
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos-once="true"
    >
      {title}
    </h4>
  );
}

export default SectionSubtitle;

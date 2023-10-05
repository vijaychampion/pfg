import React from "react";

function BlockTitle({ title, additionalClass }) {
  const baseClasses = "text-xl md:text-2xl font-blacker mb-2 md:mb-4";
  const combinedClasses = `${baseClasses} ${additionalClass}`;

  return (
    <h3
      className={combinedClasses}
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos-once="true"
    >
      {title}
    </h3>
  );
}

export default BlockTitle;

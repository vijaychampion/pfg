import React from "react";

function SectionTitle({ title, additionalClass }) {
  const baseClasses = "text-2xl lg:text-6xl font-bold uppercase font-gothic";
  const combinedClasses = `${baseClasses} ${additionalClass}`;

  return <h3 className={combinedClasses}>{title}</h3>;
}

export default SectionTitle;

import React from "react";

function ListItems({ listItems, additionalClass }) {
  const baseClasses = "pl-5 block w-full relative text-base sm:text-lg";
  const combinedClasses = `${baseClasses} ${additionalClass}`;

  return (
    <ul
      className="mb-8"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos-once="true"
    >
      {listItems.map((item, index) => {
        const linkText = typeof item === "string" ? item : item.text;
        const linkUrl = typeof item === "string" ? null : item.url;

        return (
          <li key={index} className={`${combinedClasses}`}>
            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-black rounded-full"></span>
            {linkUrl ? (
              <a
                href={linkUrl}
                className="no-underline hover:underline font-normal"
              >
                {linkText}
              </a>
            ) : (
              <span>{linkText}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default ListItems;

import React, { Fragment, useState } from "react";
import DownArrow from "../Icons/DownArrow";
import Paragraph from "../Ui/Paragraph";

function BlockItemContent({ item }) {
  const { title, content } = item;
  const [showFull, setShowFull] = useState(false);

  const handleToggle = () => {
    setShowFull(!showFull);
  };

  return (
    <Fragment>
      <div>
        <h2
          className="text-lg md:text-2xl font-bold mb-5 pt-6"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
          data-aos-offset="200"
          data-aos-once="true"
        >
          {title}
        </h2>

        <div
          className={`content relative ${
            showFull ? "max-h-full" : "max-h-48 overflow-hidden"
          }`}
        >
          {content.map((paragraph, index) => (
            <Paragraph
              key={index}
              paraText={paragraph}
              additionalClass="mb-3"
            />
          ))}

          {!showFull && (
            <span
              className="absolute right-0 bottom-0 px-2 bg-white"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
              data-aos-offset="200"
              data-aos-once="true"
            >
              [...]
            </span>
          )}
        </div>
      </div>

      <button
        onClick={handleToggle}
        className="w-full py-3 md:py-5 flex flex-col items-center relative"
        // border-t border-black
      >
        {!showFull && (
          <span className="bg-gradient-to-t from-white to-white/40 absolute left-0 right-0 bottom-0 h-[150%] z-0"></span>
        )}

        {!showFull ? (
          <span className="z-10">
            <DownArrow size="20" color="#000000" />
          </span>
        ) : (
          <span className="rotate-180 z-10">
            <DownArrow size="20" color="#000000" />
          </span>
        )}
      </button>
    </Fragment>
  );
}

export default BlockItemContent;

import React, {
  Fragment,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import DownArrow from "../Icons/DownArrow";
import Paragraph from "../Ui/Paragraph";

const BlockItemContent = React.forwardRef(({ item }, ref) => {
  const { title, content } = item;
  const [showFull, setShowFull] = useState(false);

  useImperativeHandle(ref, () => ({
    getTitleText: () => title,
  }));

  const handleToggle = () => {
    setShowFull(!showFull);
  };

  useEffect(() => {
    ref.current.getTitleText = () => title;
  }, [title, ref]);

  return (
    <Fragment>
      <div>
        <h2 className="text-lg md:text-2xl font-bold mb-4 pt-5">{title}</h2>

        <div
          className={`content relative ${
            showFull ? "max-h-full" : "max-h-56 overflow-hidden"
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
              className="absolute right-0 bottom-0 md:bottom-0.5 px-2 md:py-1 bg-white"
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
        className="w-full border-t border-black py-3 md:py-5 flex flex-col items-center mt-4"
      >
        {!showFull ? (
          <DownArrow size="20" color="#000000" />
        ) : (
          <span className="rotate-180">
            <DownArrow size="20" color="#000000" />
          </span>
        )}
      </button>
    </Fragment>
  );
});

export default BlockItemContent;

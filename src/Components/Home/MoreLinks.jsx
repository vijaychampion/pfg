import React from "react";
import { HomeLinks } from "./../../Data/HomePage";
import RightArrow from "../Icons/RightArrow";
import { Link } from "react-router-dom";
import Paragraph from "../Ui/Paragraph";

function MoreLinks() {
  return (
    <div className="max-w-7xl m-auto py-10 lg:py-20 px-7">
      {HomeLinks.map((item) => (
        <div
          key={item.id}
          className="flex flex-col lg:flex-row gap-2 lg:gap-3 py-4 sm:py-8 items-end relative"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="200"
          data-aos-once="true"
        >
          <Link
            to={item.ulr}
            className="inline-flex gap-3 no-underline w-full md:w-auto"
          >
            <span className="absolute left-0 bottom-0 w-full lg:w-36 h-[1px] bg-black"></span>
            <i className="w-6 lg:w-8 h-6 lg:h-8 rounded-full border border-black flex flex-col items-center justify-center mt-0.5">
              <RightArrow size="13px" color="#000000" />
            </i>
            <h4 className="text-xl lg:text-4xl font-bold uppercase font-gothic">
              {item.title}
            </h4>
          </Link>
          <Paragraph paraText={item.content} />
        </div>
      ))}
    </div>
  );
}

export default MoreLinks;

import React from "react";
import { HomeLinks } from "./../../Data/HomePage";
import RightArrow from "../Icons/RightArrow";
import { Link } from "react-router-dom";
import Paragraph from "../Ui/Paragraph";

function MoreLinks() {
  return (
    <div className="max-w-7xl m-auto py-10 lg:py-20 px-7">
      {HomeLinks.map((item) => (
        <Link
          key={item.id}
          className="flex flex-col lg:flex-row gap-3 lg:gap-4 py-4 sm:py-8 items-end relative group no-underline w-full md:w-auto group/category"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="200"
          data-aos-once="true"
          to={item.ulr}
        >
          <span className="absolute left-0 bottom-0 w-full lg:w-36 h-[1px] bg-black group-hover:lg:w-full group-hover:bg-yellow-600 transition-all duration-300"></span>
          <i className="w-6 lg:w-8 h-6 lg:h-8 rounded-full border border-black flex flex-col items-center justify-center mt-0.5 transition-all group-hover/category:translate-x-1.5 text-black group-hover/category:text-yellow-600 group-hover/category:border-yellow-600">
            <RightArrow size="13px" />
          </i>
          <h4 className="text-xl lg:text-3xl font-bold uppercase font-gothic group-hover/category:text-yellow-600">
            {item.title}
          </h4>
          <Paragraph paraText={item.content} additionalClass="group-hover/category:text-yellow-600" />
        </Link>
      ))}
    </div>
  );
}

export default MoreLinks;

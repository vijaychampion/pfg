import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../Icons/BackArrow";
import SectionTitle from "./SectionTitle";
import ListItems from "./ListItems";

function PageSidebar({ title, data }) {
  return (
    <div
      className="flex flex-col items-center justify-center mt-6"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos-once="true"
    >
      <Link
        to="/"
        className="mb-10"
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos-once="true"
      >
        <BackArrow size="50" color="#000000" />
      </Link>

      {data ? (
        data.map((item) => (
          <div key={item.id} className="w-full">
            <h3
              className="text-base sm:text-lg font-bold uppercase mb-4"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
              data-aos-offset="200"
              data-aos-once="true"
            >
              {item.title}
            </h3>

            {Array.isArray(item.links) && item.links[0]?.url ? (
              <ListItems
                listItems={item.links}
                additionalClass="pl-3 block w-full mb-2"
              />
            ) : (
              <ListItems
                listItems={item.links}
                additionalClass="pl-3 block w-full mb-2"
              />
            )}
          </div>
        ))
      ) : (
        <SectionTitle
          title={title}
          additionalClass="rotate-0 sm:rotate-180 writing-vertical-lr"
        />
      )}
    </div>
  );
}

export default PageSidebar;

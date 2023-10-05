import React from "react";
import BlockItem from "./BlockItem";
import SectionSubtitle from "../Ui/SectionSubtitle";

function EduBlocks({ title, data }) {
  return (
    <div
      className="w-full flex flex-col gap-10 pb-10"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos-once="true"
    >
      <SectionSubtitle title={title} additionalClass="mt-8" />

      {data.map((item) => (
        <BlockItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default EduBlocks;

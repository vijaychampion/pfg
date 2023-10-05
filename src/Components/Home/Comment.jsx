import React from "react";
import { HomeComments } from "./../../Data/HomePage";
import SectionTitle from "../Ui/SectionTitle";
import Paragraph from "../Ui/Paragraph";

function Comments() {
  const { title, content } = HomeComments;

  return (
    <div className="bg-[#f9f8f5]">
      <div className="max-w-7xl m-auto py-10 lg:py-20 px-7">
        <SectionTitle title={title} additionalClass="mb-6" />

        {content.map((paragraph, index) => (
          <Paragraph key={index} paraText={paragraph} additionalClass="mb-8" />
        ))}
      </div>
    </div>
  );
}

export default Comments;

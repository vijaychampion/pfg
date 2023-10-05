import React from "react";
import { EnvironmentData } from "./../Data/EnvironmentPage";
import EduBlocks from "../Components/Education/EduBlocks";
import SectionTitle from "../Components/Ui/SectionTitle";
import Paragraph from "../Components/Ui/Paragraph";
import PageSidebar from "../Components/Ui/PageSidebar";

function Environment() {
  const {
    sidebarLinks,
    pageTitle,
    introPara,
    subTitle,
    educationBlocks = [],
  } = EnvironmentData?.[0] || {};

  return (
    <div className="max-w-7xl m-auto flex">
      <div className="w-72 border-r border-black mr-10 pr-10">
        <PageSidebar data={sidebarLinks} />
      </div>

      <div className="flex-[2]">
        <SectionTitle title={pageTitle} additionalClass="mb-5" />

        {introPara.map((paragraph, index) => (
          <Paragraph key={index} paraText={paragraph} />
        ))}

        <EduBlocks title={subTitle} data={educationBlocks} />
      </div>
    </div>
  );
}

export default Environment;

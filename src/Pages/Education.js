import React from "react";
import { EductionData } from "./../Data/EducationPage";
import EduBlocks from "../Components/Education/EduBlocks";
import SectionTitle from "../Components/Ui/SectionTitle";
import Paragraph from "../Components/Ui/Paragraph";
import PageSidebar from "../Components/Ui/PageSidebar";

function Education() {
  const {
    sidebarLinks,
    pageTitle,
    introPara,
    subTitle,
    educationBlocks = [],
  } = EductionData?.[0] || {};

  return (
    <div className="max-w-7xl m-auto flex flex-col sm:flex-row py-10 lg:py-20 px-7">
      <div className="w-full sm:w-72 border-b sm:border-r border-black mb-5 sm:mr-10 sm:mb-0 sm:pr-10">
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

export default Education;

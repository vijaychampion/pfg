import React from "react";
import PageSidebar from "../Components/Ui/PageSidebar";
import { TermsOfUseData } from "../Data/TermsOfUsePage";
import Paragraph from "../Components/Ui/Paragraph";
import BlockTitle from "../Components/Ui/BlockTitle";

function TermsOfUse() {
  return (
    <div className="max-w-7xl m-auto flex flex-col md:flex-row py-10 md:py-20 px-7">
      <div className="w-full md:w-52 border-b md:border-r md:border-b-0 border-black md:mr-10 md:pr-10">
        <PageSidebar title="Conditions d'Utilisation" />
      </div>

      <div className="flex-[2] mt-6 md:mt-0">
        {TermsOfUseData.map((section) => (
          <div key={section.pageTitle}>
            <Paragraph paraText={section.pageTitle} additionalClass="font-bold mb-3 md:mb-8" />

            {section.pageIntro.map((intro, index) => (
              <Paragraph key={index} paraText={intro} additionalClass="mb-3 md:mb-8" />
            ))}

            {section.pageContent.map((content) => (
              <div key={content.id}>
                <BlockTitle title={content.title} />

                {content.para.map((para, index) => (
                  <Paragraph key={index} paraText={para} additionalClass="mb-3 md:mb-8" />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermsOfUse;

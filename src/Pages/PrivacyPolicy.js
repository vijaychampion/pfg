import React from "react";
import PageSidebar from "../Components/Ui/PageSidebar";
import { PrivacyPolicyData } from "../Data/PrivacyPolicyPage";
import Paragraph from "../Components/Ui/Paragraph";
import BlockTitle from "../Components/Ui/BlockTitle";
import ListItems from "../Components/Ui/ListItems";

function PrivacyPolicy() {
  return (
    <div className="max-w-7xl m-auto flex py-14">
      <div className="w-52 border-r border-black mr-10 pr-10">
        <PageSidebar title="Politique de Confidentialité" />
      </div>

      <div className="flex-[2]">
        {PrivacyPolicyData.map((section) => (
          <div key={section.pageTitle}>
            <Paragraph
              paraText={section.pageTitle}
              additionalClass="font-bold mb-3 md:mb-8"
            />

            {section.pageContent.map((content) => (
              <div key={content.id}>
                <BlockTitle title={content.title} />

                {content.para.map((para, index) => (
                  <Paragraph key={index} paraText={para} additionalClass="mb-3 md:mb-8" />
                ))}

                {content.lists && content.lists.length > 0 && (
                  <ListItems listItems={content.lists} additionalClass="mb-1 md:mb-2" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrivacyPolicy;

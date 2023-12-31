import React from "react";
import BlockItemContent from "./BlockItemContent";
import BlockItemActions from "./BlockItemActions";

function BlockItem({ item }) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6">
      <div className="flex-[2] bg-white rounded-xl shadow-lg px-8">
        <BlockItemContent item={item} />
      </div>

      <div className="w-full md:w-32 flex flex-col items-start gap-1 text-xs">
        <BlockItemActions
          title={item.title}
          gptLink={item.gptLink}
          piLink={item.piLink}
          bardLink={item.bardLink}
        />
      </div>
    </div>
  );
}

export default BlockItem;

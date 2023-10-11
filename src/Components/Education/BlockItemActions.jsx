import React, { Fragment } from "react";
// import GoogleBard from "../Icons/GoogleBard";
// import Pi from "../Icons/Pi";
import ChatGPT from "../Icons/ChatGPT";
import LinkButton from "../Ui/LinkButton";
import CopyButton from "../Ui/CopyButton";
import ShareButton from "../Ui/ShareButton";
import Pi from "../Icons/Pi";
import GoogleBard from "../Icons/GoogleBard";

function BlockItemActions({ title, gptLink, piLink, bardLink }) {
  return (
    <Fragment>
      <div className="w-full flex flex-row md:flex-col justify-center">
        <CopyButton title={title} />
        <ShareButton />
      </div>

      <div className="text-center w-full">
        <span>
          <strong className="block">Tester</strong>
          ce prompt sur :
        </span>

        <div className="flex flex-row md:flex-col gap-1.5 mt-1">
          <LinkButton
            link={gptLink}
            text="Chat Gpt"
            icon={<ChatGPT size="20" color="#000000" />}
          />
          <LinkButton
            link={piLink}
            text="Pi"
            isDisabled={true}
            icon={<Pi size="20" color="#000000" />}
          />
          <LinkButton
            link={bardLink}
            text="Google Bard"
            isDisabled={true}
            icon={<GoogleBard size="20" color="#000000" />}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default BlockItemActions;

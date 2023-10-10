import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Copy from "../Icons/Copy";

function CopyButton({ title }) {
  const handleCopy = () => {
    if (title) {
      alert(`Copied: ${title}`);
    }
  };

  return (
    <CopyToClipboard text={title} onCopy={handleCopy}>
      <button className="w-full flex flex-col items-center justify-center rounded-lg hover:bg-black/10 transition duration-150 p-2">
        <span>
          <strong className="block">Copier</strong>
          ce prompt
        </span>
        <i>
          <Copy size="20" color="#000000" />
        </i>
      </button>
    </CopyToClipboard>
  );
}

export default CopyButton;

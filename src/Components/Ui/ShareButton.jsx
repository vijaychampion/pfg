import React, { useState } from "react";
import Share from "../Icons/Share";
import Facebook from "../Icons/Facebook";
import TwitterX from "../Icons/TwitterX";
import Instagram from "../Icons/Instagram";
import Whatsapp from "../Icons/Whatsapp";
import { Link } from "react-router-dom";

function ShareButton() {
  const [isPopoutOpen, setIsPopoutOpen] = useState(false);

  const togglePopout = () => {
    setIsPopoutOpen(!isPopoutOpen);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={togglePopout}
        className="w-full flex flex-col items-center justify-center rounded-lg hover:bg-black/10 transition duration-150 p-2"
      >
        <span>
          <strong className="block">Envoyer</strong>
          ce prompt
        </span>
        <i>
          <Share size="20" color="#000000" />
        </i>
      </button>

      {isPopoutOpen && (
        <div className="flex gap-2 bg-black/90 p-3 rounded-lg absolute bottom-full mb-2">
          <span className="absolute left-1/2 -translate-x-1/2 w-0 h-0 -bottom-2 border-l-8 border-r-8 border-l-transparent border-r-transparent border-t-8 border-t-black/90"></span>
          <Link to="https://www.facebook.com/" target="_blank">
            <Facebook size={20} color="white" />
          </Link>
          <Link to="https://twitter.com/" target="_blank">
            <TwitterX size={20} color="white" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <Instagram size={20} color="white" />
          </Link>
          <Link to="https://www.whatsapp.com/" target="_blank">
            <Whatsapp size={20} color="white" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShareButton;

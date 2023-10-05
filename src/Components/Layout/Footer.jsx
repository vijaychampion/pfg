import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-100 text-center shrink-0 border-t-4 border-[#f1efe9] bg-white flex flex-col gap-3">
      <div className="max-w-7xl m-auto py-10 lg:py-20 px-7">
        <div className="text-2xl lg:text-4xl">
          <span className="font-bold">Prompts</span>forGood
        </div>
        <div className="text-base lg:text-xl">Contact</div>
        <div className="text-base lg:text-xl">
          <strong>Prompts</strong>forGood est une initiative de l'ONG Bayes
          Impact
        </div>
        <div className="mt-8 lg:mt-14 mb-3 lg:mb-5">
          <Link to="/terms-of-use" className="block md:inline-block">Conditions d'utilisation</Link> &{" "}
          <Link to="/privacy-policy" className="block md:inline-block">Politique de confidentialité</Link>
        </div>
        <div>© 2023 PromptsforGood, all right reserved.</div>
      </div>
    </div>
  );
}

export default Footer;

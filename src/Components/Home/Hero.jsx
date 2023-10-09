// Hero.js
import React from "react";
import Button from "../Ui/Button";
import { HeroContent } from "./../../Data/HomePage";
import DownArrow from "../Icons/DownArrow";

function Hero({ onScrollToMoreLinks }) {
  const { title, subtitle } = HeroContent;

  return (
    <div className="max-w-7xl m-auto text-center px-7 relative z-10">
      <h1
        className="text-3xl md:text-8xl uppercase font-bold text-center text-[#DACEB0] font-gothic mt-3 md:mt-8 mb-2 md:mb-5"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos-once="true"
      >
        {title}
      </h1>

      <h3
        className="text-xl md:text-4xl font-blacker mb-12"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos-once="true"
      >
        {subtitle}
      </h3>

      <p
        className="text-sm lg:text-base mb-3 md:mb-8 flex justify-center gap-1"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos-once="true"
      >
        <strong>prompt, nom masculin (mot anglais)</strong>:
        <span className="text-left">requête formulée à des intelligences artificielles comme <strong>ChatGPT, Bard, etc.</strong> <br />pour obtenir la meilleure réponse possible</span>
      </p>
      <p
        className="text-sm lg:text-base mb-3 md:mb-8"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos-once="true"
      >
        Explorez notre bibliothèque de <strong>prompts d'intérêt général</strong>, co-construits avec des experts et les citoyens !
      </p>

      <Button onClick={onScrollToMoreLinks} additionalClass="mt-3 md:mt-5">
        <DownArrow size="15" color="black" /> Explorer les prompts
      </Button>
    </div>
  );
}

export default Hero;

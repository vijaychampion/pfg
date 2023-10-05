// Hero.js
import React from "react";
import Button from "../Ui/Button";
import { HeroContent } from "./../../Data/HomePage";
import Paragraph from "../Ui/Paragraph";
import DownArrow from "../Icons/DownArrow";

function Hero({ onScrollToMoreLinks }) {
  const { title, subtitle, content } = HeroContent;

  return (
    <div className="max-w-7xl m-auto text-center px-7">
      <h1 className="text-4xl md:text-9xl uppercase font-bold text-center text-[#DACEB0] font-gothic mt-3 md:mt-8" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-offset="200" data-aos-once="true">
        {title}
      </h1>
      <h3 className="text-2xl md:text-6xl font-blacker mb-12" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-aos-offset="200" data-aos-once="true">
        {subtitle}
      </h3>
      {content.map((paragraph, index) => (
        <Paragraph key={index} paraText={paragraph} additionalClass="mb-3 md:mb-8" />
      ))}

      <Button onClick={onScrollToMoreLinks} additionalClass="mt-3 md:mt-5">
        <DownArrow size="15" color="black" /> Explorer les prompts
      </Button>
    </div>
  );
}

export default Hero;

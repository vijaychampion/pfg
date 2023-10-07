// Home.js
import React, { Fragment, useRef } from "react";
import Hero from "../Components/Home/Hero";
import MoreLinks from "../Components/Home/MoreLinks";
import Comments from "../Components/Home/Comment";
import videoSource from "./../Assets/Video/bg-video.mp4";

function Home() {
  const moreLinksRef = useRef();

  const handleScrollToMoreLinks = () => {
    moreLinksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <div className="w-full h-[600px] sm:h-[700px] absolute left-0 top-0 -z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Hero onScrollToMoreLinks={handleScrollToMoreLinks} />

      <div id="moreLinks" ref={moreLinksRef}>
        <MoreLinks />
      </div>

      <Comments />
    </Fragment>
  );
}

export default Home;

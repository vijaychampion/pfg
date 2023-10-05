// Home.js
import React, { Fragment, useRef } from "react";
import Hero from "../Components/Home/Hero";
import MoreLinks from "../Components/Home/MoreLinks";
import Comments from "../Components/Home/Comment";

function Home() {
  const moreLinksRef = useRef(); // Create a ref for the MoreLinks component

  const handleScrollToMoreLinks = () => {
    // Scroll to the MoreLinks component when the button is clicked
    moreLinksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <Hero onScrollToMoreLinks={handleScrollToMoreLinks} />
      <div id="moreLinks" ref={moreLinksRef}>
        <MoreLinks />
      </div>
      <Comments />
    </Fragment>
  );
}

export default Home;

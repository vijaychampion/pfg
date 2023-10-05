import React from "react";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom/dist";

function Header() {
  return (
    <div className="flex items-center justify-center sm:justify-between px-10 py-6 bg-gray-100">
      <div data-aos="fade-right" data-aos-delay="200" data-aos-offset="200" data-aos-once="true">
        <Link to="/">
          <img src="./img/logo.svg" alt="PROMPTS FOR GOOD" className="h-32" />
        </Link>
      </div>
      {/* <div>
        <Navbar />
      </div> */}
    </div>
  );
}

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between items-center space-x-4">
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/education">
            Education
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

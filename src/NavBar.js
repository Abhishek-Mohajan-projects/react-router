import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/" className="nav-Link">
            Home
          </NavLink>
          <NavLink to="/blogs" className="nav-Link">
            Blogs
          </NavLink>
          <NavLink to="/contact" className="nav-Link">
            Contact
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

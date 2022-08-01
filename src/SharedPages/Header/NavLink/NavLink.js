import React from "react";
import CustomLinks from "../CustomLinks/CustomLinks";

const NavLink = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <CustomLinks to="/" className="nav-link">
          Home
        </CustomLinks>
      </li>
      <li className="nav-item">
        <CustomLinks to="/about" className="nav-link">
          About
        </CustomLinks>
      </li>

      <li className="nav-item">
        <CustomLinks to="/blog" className="nav-link">
          Blog
        </CustomLinks>
      </li>
    </ul>
  );
};

export default NavLink;

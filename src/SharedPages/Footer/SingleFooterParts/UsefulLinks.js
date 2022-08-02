import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UsefulLinks = () => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="useful-link">
        <h2>Useful Links</h2>
        <div className="use-links">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="home"></FontAwesomeIcon> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon="eject"></FontAwesomeIcon> About
            </Link>
          </li>
          <li>
            <Link to="/inventory">
              <FontAwesomeIcon icon="warehouse"></FontAwesomeIcon>Inventory
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <FontAwesomeIcon icon="blog"></FontAwesomeIcon> Blog
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleService.css";
const SingleService = ({ data }) => {
  return (
    <div className="col-md-6 col-lg-3 col-sm-6 equal-height">
      <div className="item">
        <FontAwesomeIcon icon={data.icon} className="iconservice" />
        <h4>{data.heading}</h4>
        <p>{data.post}</p>
      </div>
    </div>
  );
};

export default SingleService;

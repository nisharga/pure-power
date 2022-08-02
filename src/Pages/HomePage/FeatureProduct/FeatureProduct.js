import React from "react";
import "./FeatureProduct.css";
import SingleItem from "./SingleItem/SingleItem";
import { Link } from "react-router-dom";
const FeatureProduct = () => {
  return (
    <div className="featureProduct">
      <h2 className="featureTitle">
        Feature <span>Product</span>
      </h2>
      <div className="container">
        <div className="row">
          <SingleItem></SingleItem>
          <SingleItem></SingleItem>
          <SingleItem></SingleItem>
          <SingleItem></SingleItem>
          <SingleItem></SingleItem>
          <SingleItem></SingleItem>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/inventory" className="button-three">
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default FeatureProduct;

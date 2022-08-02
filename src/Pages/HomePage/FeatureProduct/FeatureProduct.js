import React from "react";
import "./FeatureProduct.css";
import SingleItem from "./SingleItem/SingleItem";
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
    </div>
  );
};

export default FeatureProduct;

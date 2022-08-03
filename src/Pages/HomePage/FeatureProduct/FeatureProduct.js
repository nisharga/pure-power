import React from "react";
import "./FeatureProduct.css";
import SingleItem from "./SingleItem/SingleItem";
import { Link } from "react-router-dom";
import useProduct from "../../../Hooks/useProduct";
import Spinner from "./../../../SharedPages/Other/Spinner/Spinner";
const FeatureProduct = () => {
  const [product] = useProduct();
  return (
    <div className="featureProduct">
      <h2 className="featureTitle">
        Feature <span>Product</span>
      </h2>
      <div className="container">
        <div className="row">
          {product?.slice(0, 6).map((data) => (
            <SingleItem data={data} key={data._id}></SingleItem>
          ))}
          {!product && <Spinner></Spinner>}
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

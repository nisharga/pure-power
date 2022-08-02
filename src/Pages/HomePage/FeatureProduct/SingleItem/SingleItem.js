import React from "react";
import { Link } from "react-router-dom";
import "./SingleItem.css";
import img from "../../../../Image/logo.png";
const SingleItem = () => {
  // const {
  //   _id,
  //   name,
  //   image,
  //   short_description,
  //   price,
  //   quantity,
  //   supplier,
  //   description,
  // } = props.data;
  return (
    <div className="col-md-4 col-sm-6 mt-3 mb-4">
      <div className="thumb-wrapper">
        <div className="img-box">
          <img src={img} alt="d" />
        </div>
        <div className="thumb-content">
          <h4>Name</h4>
          <p className="short_des">short description</p>
          <div className="d-flex justify-content-center">
            <p className="quantity">Quantity:</p>
            <p className="supplier">Supplier:</p>
          </div>
          <p className="item-price">
            {/* <strike>${(price / 100) * 120}.00</strike> <b>${price}.00</b> */}
            22
          </p>
          <Link to="/inventory/ds" className="btn btn-primary">
            Updated
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;

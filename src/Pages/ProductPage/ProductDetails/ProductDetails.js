import React from "react";

const ProductDetails = ({ singleProductDetails }) => {
  return (
    <div className="details col-md-6">
      <h3 className="product-title">{singleProductDetails?.name}</h3>
      <p className="product-description">
        <strong>({singleProductDetails?.shortDescription})</strong>
      </p>
      <p className="product-description">{singleProductDetails?.description}</p>
      <h4 className="price">
        current price: $<span>{singleProductDetails?.price}</span>
      </h4>
      <div className="quantity_seller d-flex">
        <h5 className="quantity">
          Quantity: <strong>{singleProductDetails?.quantity}</strong>
        </h5>
        <h5>
          Seller: <strong>{singleProductDetails?.supplier}</strong>
        </h5>
      </div>
    </div>
  );
};

export default ProductDetails;

import React from "react";

const ProductDetails = () => {
  return (
    <div className="details col-md-6">
      <h3 className="product-title">productName</h3>
      <p className="product-description">
        <strong>p_dexcription</strong>
      </p>
      <p className="product-description">discription</p>
      <h4 className="price">
        current price: <span>22</span>
      </h4>
      <div className="quantity_seller d-flex">
        <h5 className="quantity">
          Quantity: <strong>2</strong>
        </h5>
        <h5>
          Seller: <strong>Kbir</strong>
        </h5>
      </div>
    </div>
  );
};

export default ProductDetails;

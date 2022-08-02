import React from "react";
import "./ProductPage.css";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImage from "./ProductImage/ProductImage";
import PageTitle from "../../SharedPages/Other/PageTitle/PageTitle";
const ProductPage = () => {
  return (
    <>
      <PageTitle pagetitle="Inventory"></PageTitle>
      <div className="productPage">
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <ProductImage />
                <ProductDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

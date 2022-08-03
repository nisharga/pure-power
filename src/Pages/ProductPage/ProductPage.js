import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImage from "./ProductImage/ProductImage";
import PageTitle from "../../SharedPages/Other/PageTitle/PageTitle";
import { Link, useParams } from "react-router-dom";
import Spinner from "./../../SharedPages/Other/Spinner/Spinner";
const ProductPage = () => {
  const id = useParams();
  const productId = id.id;
  const [singleProduct, setsingleProduct] = useState();
  useEffect(() => {
    fetch(`https://protected-taiga-39907.herokuapp.com/inventory/${productId}`)
      .then((res) => res.json())
      .then((data) => setsingleProduct(data));
  }, [productId]);
  console.log("singleProduct id", id.id);
  return (
    <>
      <PageTitle pagetitle="Inventory"></PageTitle>
      <div className="productPage">
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                {singleProduct && (
                  <ProductImage singleProductImage={singleProduct[0].image} />
                )}
                {singleProduct && (
                  <ProductDetails singleProductDetails={singleProduct[0]} />
                )}
                {!singleProduct && <Spinner></Spinner>}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/inventory" className="button-three">
            Manage Inventories
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

import React, { useEffect, useState } from "react";
import PageTitle from "../../SharedPages/Other/PageTitle/PageTitle";
import "./InventoryPage.css";
import TableData from "./TableData.js/TableData";
import { Link } from "react-router-dom";
import Spinner from "./../../SharedPages/Other/Spinner/Spinner";
const InventoryPage = () => {
  const [allProduct, setAllProduct] = useState();
  useEffect(() => {
    fetch("https://protected-taiga-39907.herokuapp.com/allproduct")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, [setAllProduct]);
  return (
    <>
      <PageTitle pagetitle="Inventory-Page"></PageTitle>
      <div className="inventoryArea">
        <h2 className="featureTitle">
          Inventory <span>Product {allProduct?.length}</span>
        </h2>
        <p className="text-center">
          <strong>(All orders here)</strong>
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-dark">
                <thead className="text-center">
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delet Item</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {allProduct?.map((data) => (
                    <TableData data={data}></TableData>
                  ))}
                  {!allProduct && <Spinner></Spinner>}
                </tbody>
              </table>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Link to="/addinventory" className="button-three">
              Add Inventories
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryPage;

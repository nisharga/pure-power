import React from "react";
import PageTitle from "../../SharedPages/Other/PageTitle/PageTitle";
import "./InventoryPage.css";
import TableData from "./TableData.js/TableData";
import { Link } from "react-router-dom";
import Spinner from "./../../SharedPages/Other/Spinner/Spinner";
import useAllProduct from "../../Hooks/useAllProduct";
const InventoryPage = () => {
  const [allproduct] = useAllProduct();

  return (
    <>
      <PageTitle pagetitle="Inventory-Page"></PageTitle>
      <div className="inventoryArea">
        <h2 className="featureTitle">
          Inventory <span>Product {allproduct?.length}</span>
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
                  {allproduct?.map((data) => (
                    <TableData data={data}></TableData>
                  ))}
                  {!allproduct && <Spinner></Spinner>}
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

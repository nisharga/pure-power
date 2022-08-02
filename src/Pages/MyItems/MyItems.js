import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../SharedPages/Other/PageTitle/PageTitle";
import MyItemsTable from "./MyItemsTable/MyItemsTable";
import "./Myitems.css";
const MyItems = () => {
  return (
    <>
      <PageTitle pagetitle="My-Items"></PageTitle>
      <div className="myItems">
        <h2 className="featureTitle">
          My <span>Items </span>
        </h2>
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
                  <MyItemsTable></MyItemsTable>
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

export default MyItems;

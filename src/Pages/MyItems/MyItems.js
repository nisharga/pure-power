import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../SharedPages/Other/PageTitle/PageTitle";
import MyItemsTable from "./MyItemsTable/MyItemsTable";
import "./Myitems.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../SharedPages/Authentication/Firebase_Auth/Auth";
import Spinner from "./../../SharedPages/Other/Spinner/Spinner";
const MyItems = () => {
  const [user] = useAuthState(auth);
  const id = user?.email;
  const [myItems, setMyItems] = useState();
  useEffect(() => {
    fetch(`https://protected-taiga-39907.herokuapp.com/myitems/${id}`)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [id]);
  // const items = [{ name: "anzu" }, { name: "nobel" }, { name: "aafif" }];
  return (
    <>
      <PageTitle pagetitle="My-Items"></PageTitle>
      <div className="myItems">
        <h2 className="featureTitle">
          My <span>Items: </span>
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
                  {/* {items?.map((val) => (
                    <MyItemsTable val={val}></MyItemsTable>
                  ))} */}
                  {myItems?.map((val) => (
                    <MyItemsTable val={val}></MyItemsTable>
                  ))}
                  {!myItems && <Spinner></Spinner>}
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

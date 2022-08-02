import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Authentication/Firebase_Auth/Auth";
import CustomLinks from "../CustomLinks/CustomLinks";

const NavLink = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <CustomLinks to="/" className="nav-link">
          Home
        </CustomLinks>
      </li>
      <li className="nav-item">
        <CustomLinks to="/about" className="nav-link">
          About
        </CustomLinks>
      </li>

      <li className="nav-item">
        <CustomLinks to="/blog" className="nav-link">
          Blog
        </CustomLinks>
      </li>
      <li className="nav-item">
        {user ? (
          <CustomLinks to="/inventory" className="nav-link">
            Manage Inventory
          </CustomLinks>
        ) : (
          ""
        )}
      </li>
      <li className="nav-item">
        {user ? (
          <CustomLinks to="/addinventory" className="nav-link">
            Add Item
          </CustomLinks>
        ) : (
          ""
        )}
      </li>
      <li className="nav-item">
        {user ? (
          <CustomLinks to="/myitems" className="nav-link">
            My Item
          </CustomLinks>
        ) : (
          ""
        )}
      </li>
      <li className="nav-item">
        {user ? (
          <button onClick={logout} className="logout">
            LogOut<i className="fa fa-sign-out"></i>
          </button>
        ) : (
          <CustomLinks to="/singup" className="nav-link">
            Sign Up
          </CustomLinks>
        )}
      </li>
    </ul>
  );
};

export default NavLink;

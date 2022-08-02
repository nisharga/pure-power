import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Address = () => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="address">
        <h2>Address</h2>
        <div className="address-links">
          <li className="address1">
            <FontAwesomeIcon icon="home"></FontAwesomeIcon> MonipuriPara, Bijoy
            Sarani, Dhaka, Bangladesh,
          </li>
          <li>
            <FontAwesomeIcon icon="phone"></FontAwesomeIcon> +8801774655873
          </li>
          <li>
            <FontAwesomeIcon icon="envelope"></FontAwesomeIcon>{" "}
            Kabirnisharga@gmail.com
          </li>
        </div>
      </div>
    </div>
  );
};

export default Address;

import React from "react";
import Logo from "../../../Image/logo.png";
import { Link } from "react-router-dom";
const LogoArea = () => {
  return (
    <div className="col-md-3 col-sm-6">
      <Link to="/">
        <img src={Logo} alt="" className="img-fluid logo-footer" />
      </Link>
      <div className="footer-about">
        <p>
          inventory management combines varying software packages to track stock
          levels and stock movements. The solution can integrate with
          multichannel sales systems or shipping systems.
        </p>
      </div>
    </div>
  );
};

export default LogoArea;

import React from "react";
import Glogo from "../../../../Image/G_logo.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./../../Firebase_Auth/Auth";
import Spinner from "./../../../Other/Spinner/Spinner";
const GoogleSignIn = () => {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIN = () => {
    signInWithGoogle();
  };
  return (
    <div className="other-authentication">
      <div className="or-container">
        <div className="line-separator"></div>
        <div className="or-label">or</div>
        <div className="line-separator"></div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <button
            className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
            onClick={handleGoogleSignIN}
          >
            <img src={Glogo} alt="Google logo" />
            Signin Using Google
          </button>
          {loading && <Spinner></Spinner>}
          {error && error.message}
        </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;

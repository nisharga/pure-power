import React from "react";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import auth from "../../Firebase_Auth/Auth";
import Spinner from "./../../../Other/Spinner/Spinner";

const SigninForm = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };
  // Redirect to that from page
  let navigate = useNavigate();
  let location = useLocation();
  const [userEmail] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";
  if (user || userEmail) {
    navigate(from, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group mb-3">
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-user"></i>
          </span>
        </div>
        <input
          {...register("email", { required: true })}
          type="text"
          name="email"
          className="form-control input_user"
          placeholder="Email"
        />
      </div>
      <div className="input-group mb-2">
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-key"></i>
          </span>
        </div>
        <input
          type="password"
          name="password"
          className="form-control input_pass"
          placeholder="password"
          {...register("password", { required: true })}
        />
      </div>
      {loading ? <Spinner></Spinner> : ""}
      {error ? error.message : ""}
      <div className="d-flex justiferrory-content-center mt-3 login_container">
        <input
          type="submit"
          value="SignIn"
          name="button"
          className="btn login_btn"
        />
      </div>
    </form>
  );
};

export default SigninForm;

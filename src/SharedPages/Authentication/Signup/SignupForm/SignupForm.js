import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Spinner from "../../../Other/Spinner/Spinner";
import auth from "../../Firebase_Auth/Auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const SignupForm = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, errorEmailVerify] =
    useSendEmailVerification(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(email, password);
    sendEmailVerification();
    toast("Check Email for Verification");
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
      {sending || loading ? <Spinner></Spinner> : ""}
      {error ? <p>{error.message}</p> : ""}
      {errorEmailVerify ? <p>{errorEmailVerify.message}</p> : ""}
      <div className="d-flex justify-content-center mt-3 login_container">
        <input
          type="submit"
          value={`SignUp`}
          name="button"
          className="btn login_btn"
        />
      </div>
    </form>
  );
};

export default SignupForm;

import React from "react";
import { useForm } from "react-hook-form";
import Delivered from "./Delivered/Delivered";
const ProductImage = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="col-md-6">
      <div className="preview">
        <img src="https://i.ibb.co/h9M4zRq/hamco.jpg" alt="img" />
      </div>
      <div className="">
        <Delivered></Delivered>
        <div className="incrise_quqntity d-flex justify-content-between">
          <h3>Incrise quantity:</h3>
          <form className="d-flex justify-content-between">
            <input
              {...register("quantity", { required: true })}
              className="form-control"
              placeholder="Add New Quantity"
            />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;

import React from "react";
import { useForm } from "react-hook-form";
import Delivered from "./Delivered/Delivered";
const ProductImage = ({ singleProductImage, singleProduct, productId }) => {
  // console.log("productId", productId);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newQuantity = data.quantity;
    fetch(
      `https://protected-taiga-39907.herokuapp.com/delivered/${productId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          quantity: newQuantity.toString(),
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    alert("New quantuty added Successfull");
    window.location.reload();
  };
  return (
    <div className="col-md-6">
      <div className="preview">
        <img src={singleProductImage} alt="batteryImage" />
      </div>
      <div className="">
        <Delivered singleProduct={singleProduct}></Delivered>
        <div className="incrise_quqntity d-flex justify-content-between">
          <h3>Incrise quantity:</h3>
          <form
            className="d-flex justify-content-between"
            onSubmit={handleSubmit(onSubmit)}
          >
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

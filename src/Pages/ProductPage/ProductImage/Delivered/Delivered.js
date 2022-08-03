import React from "react";
const Delivered = (props) => {
  // const productID = props.singleProduct?[0]._id
  const { _id, quantity } = props.singleProduct[0];
  const handleDeliverd = (id, quantity) => {
    const newQuantity = quantity - 1;
    fetch(`https://protected-taiga-39907.herokuapp.com/delivered/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        quantity: newQuantity.toString(),
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    alert("Delived one Successfull");
    window.location.reload();
  };

  return (
    <div className="deliverd d-flex justify-content-between mt-2 mb-2">
      <h3>Delivery Complete?</h3>
      <button
        className="btn btn-primary"
        onClick={() => handleDeliverd(_id, quantity)}
      >
        Delivered
      </button>
    </div>
  );
};

export default Delivered;

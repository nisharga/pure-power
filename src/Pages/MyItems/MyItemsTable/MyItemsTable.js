import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { confirmAlert } from "react-confirm-alert"; // Import
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const MyItemsTable = (props) => {
  const { name, supplier, price } = props.val;
  // console.log(name, supplier, price);
  // console.log(data.name);
  // const handleDelet = (id) => {
  //   confirmAlert({
  //     title: "Confirm to DELET",
  //     message: "Are you sure to do Delet.",
  //     buttons: [
  //       {
  //         label: "Yes",
  //         onClick: () => {
  //           fetch(`https://quiet-temple-29937.herokuapp.com/inventory/${id}`, {
  //             method: "DELETE",
  //           })
  //             .then((res) => res.json())
  //             .then((val) => {
  //               if (val.deletedCount > 0) {
  //                 console.log(val, "val deleted");
  //               }
  //             });
  //           window.location.reload();
  //         },
  //       },
  //       {
  //         label: "No",
  //         onClick: () => "",
  //       },
  //     ],
  //   });
  // };
  return (
    <tr>
      <td>{name}</td>
      <td>{supplier}</td>
      <td>{price}</td>
      <td>
        <button>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default MyItemsTable;

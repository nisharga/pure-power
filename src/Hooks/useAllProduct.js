import React, { useEffect, useState } from "react";

const useAllProduct = () => {
  const [allproduct, setAllProduct] = useState();
  useEffect(() => {
    const url = "https://protected-taiga-39907.herokuapp.com/allproduct";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, [setAllProduct]);
  return [allproduct, setAllProduct];
};

export default useAllProduct;

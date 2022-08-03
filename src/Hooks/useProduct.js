import React, { useEffect, useState } from "react";

const useProduct = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    const url = "https://protected-taiga-39907.herokuapp.com/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [setProduct]);
  return [product, setProduct];
};

export default useProduct;

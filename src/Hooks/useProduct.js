import React, { useEffect, useState } from "react";

const useProduct = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    const url = "http://localhost:5000/inventory";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [setProduct]);
  return [product, setProduct];
};

export default useProduct;

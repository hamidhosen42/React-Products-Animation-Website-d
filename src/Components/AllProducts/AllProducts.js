import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingelProduct from "../SingelProduct/SingelProduct";

const AllProducts = ({ setCartCount,setCardCounts }) => {
  const [products, setProsducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProsducts(data));
  }, [products]);

  console.log(products);

  return (
    <div>
      <h1 className="text-success mt-3 mb-3">All PRODUCTS</h1>
      <div className="row container w-100 m-auto">
        {products.map((product) => (
          <SingelProduct
            setCartCount={setCartCount}
            setCardCounts={setCardCounts}
            product={product}
            key={product.id}
          ></SingelProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./SingelProduct.css";
const SingelProduct = ({ product, setCartCount, setCardCounts }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="col-md-4"
    >
      <div className="card p-3 border-3">
        <div>
          <img className="w-50 m-auto" src={product.image} alt="" />
        </div>

        <h1>{product.title.slice(0, 15)}</h1>

        <div className="d-flex justify-content-around">
          <button onClick={setCartCount} className="btn btn-success">
            Add to Cart
          </button>
          <button onClick={setCardCounts} className="btn btn-danger">
            Delete
          </button>
          {/* <button className='btn btn-info'>Details</button> */}
          <ReactModal product={product}></ReactModal>
        </div>
      </div>
    </div>
  );
};

export default SingelProduct;

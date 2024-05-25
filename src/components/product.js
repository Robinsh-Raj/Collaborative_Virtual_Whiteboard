import React, { useState } from "react";

function Product(props) {
  let { product } = props;
  let addPrice = () => {
    props.handleAddPrice(product);
    // props.handleCount();
  };
  let subsPrice = () => {
    props.handleSubPrice(product);
    // props.handleCount();
  };
  let count = () => {
    props.handleCount();
  };
  return (
    <>
      {/* <div className="Totalamt">Total Price {price} </div> */}

      <div className="col-8  row ">
        
        <div className="container-img  col-6">
          <img src={"/images/" + product.image} alt="" />
          <button type="button" onClick={addPrice}>
            {" "}
            Add{" "}
          </button>
          </div>
          <div className="container-btn col-6">
          <button type="button" onClick={addPrice}>
            {" "}
            +{" "}
          </button>
          <h6 onChange={count}>..</h6>
          
          <button type="button" onClick={subsPrice}>
            {" "}
            -{" "}
          </button>
          
        
        </div>
        <div className="container-np col-6">
          <div >{product.name} </div>
          <div >Rs. {product.Price}</div>
        </div>
      </div>
    </>
  );
}
export default Product;

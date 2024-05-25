import { useState } from "react";
import React from "react";
function FormProduct(props) {
  let [product, setProduct] = useState(props.productRecord);
  function handleCancelButtonClick() {
    props.onCancelButtonClick();
  }
  function handleInputClick(event) {
    setProduct({ ...product, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    // pass data of student object to parent
    event.preventDefault();
    props.onSubmitForm(product);
  }
  return (
    <>
      <form className="text-dark bg-secondary p-4" onSubmit={handleSubmit}>
        {/* row starts */}
        <div className="form-group row align-items-center">
          <div className="col-5 form-label mb-2">
            <label>Name</label>
          </div>
          <div className="col-7 px-0 mb-2">
            <input
              type="text"
              className="form-control "
              name="name"
              value={product.name}
              onChange={handleInputClick}
              placeholder="Enter name of product"
              required
            />
          </div>
        </div>
        {/* row ends */}
        {/* row starts */}
        <div className="form-group row align-items-center">
          <div className="col-5 form-label mb-2">
            <label>Price</label>
          </div>
          <div className="col-7 px-0 mb-2">
            <input
              type="text"
              className="form-control"
              name="Price"
              value={product.Price}
              placeholder="Enter Price"
              onChange={handleInputClick}
            />
          </div>
        </div>
        {/* row ends */}
        {/* row starts */}
        <div className="form-group row align-items-center">
          <div className="col-5 form-label mb-2">
            <label>Image</label>
          </div>
          <div className="col-7 px-0 mb-2">
            <input
              type="text"
              className="form-control"
              name="image"
              value={product.image}
              onChange={handleInputClick}
              placeholder="Enter Name of Image"
            />
            
          </div>
        </div>
        {/* row ends */}
        {/* row starts */}
        <div className="form-group offset-5 text-center mb-0">
          <button className="btn btn-light" type="submit">
            {props.action == "add" ? "Add" : "Update"}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className="btn btn-light" onClick={handleCancelButtonClick}>
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
}
export default FormProduct;

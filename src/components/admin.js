import React from "react";

function Admin(props) {
  let { product } = props;
  // function handleEditButtonClick() {
  //   props.onEditButtonClick(props.product.id);
  // }
  function handleDeleteButtonClick(id,name)
  {
    props.onDeleteButtonClick(props.product.id,props.product.name)
  }
  function handleEditButtonClick(product)
  {
      props.onEditButtonClick(props.product)
  }

  return (
    <div className="row student">
      <div className="col-1 ">{props.index + 1}</div>
      <div className="col-2">{product.name}</div>
      <div className="col-2">{product.Price}</div>
      <div className="col-2">
        {<img src={"/images/" + product.image} alt="" />}
      </div>
      <div className="col-2" onClick={handleEditButtonClick}>
        <button>Update</button>
      </div>
      <div className="col-2" onClick={handleDeleteButtonClick}>
        <button>Delete</button>
      </div>
    </div>
  );
}
export default Admin;

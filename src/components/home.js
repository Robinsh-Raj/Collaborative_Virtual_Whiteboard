import React from "react";
import Search from "./search";
import FormStudent from "./formProduct";
import Search1 from "./search1";

// import Product from "./components/product";
// import Students from "./components/students";
// import Addition from "./components/addition";
// import Admin from "./components/admin";
import Admin from "./admin";
import { useState } from "react";
import Product from "./product";
import FormProduct from "./formProduct";
import { event } from "jquery";

function Home() {
  function handleDeleteButtonClick(id, name) {
    console.log("Delete button clicked " + id);
    let ans = window.confirm("Do you really want to delete record of " + name);
    if (ans == true) {
      let filteredData = product.filter((e) => e.id != id);
      localStorage.setItem("product", JSON.stringify(filteredData));
      console.log(JSON.parse(localStorage.getItem("product")));
      setFilteredData(filteredData);
      setMessage("Record of " + name + " deleted successfully");
      window.setTimeout(() => {
        setMessage("");
      }, 3000);
    } 
  }
  function handleEditButtonClick(productObject) {
    // console.log("edit button click");
    setView("form");
    setAction("edit");
    setProductRecord(productObject);
  }

  function handleAddOrListButtonClick() {
    if (view == "list") {
      setView("form");
      setAction("add");
      setProductRecord({ name: "", Price: "", image: "" });
    } else if (view == "form") {
      showProductRecords();
    }
  }
  function showProductRecords() {
    setView("list");
    setFilteredData(filteredData);
  }
  function handleCancelButtonClick() {
    showProductRecords();
  }
  function handleSearchTextKeyUp(searchText) {
    
    let updatedProductList;
      // let updatedProductList = filteredData.filter((e) =>
      // e.name.toLowerCase().startsWith(searchText.trim().toLowerCase())
      if(event === ' ')
      {
        updatedProductList = filteredData;
      }
      else
      {
      updatedProductList = product.filter((e) =>
      e.name.toLowerCase().includes(searchText.toLowerCase())
    );}
    
    setFilteredData(updatedProductList);

  }
  function handleSubmitForm(product) {
    setView("list");
    if (action == "add") {
      product.id = filteredData[filteredData.length - 1].id + 1;
      setFilteredData([...filteredData, product]);
      setMessage("A record is added successfully");
      window.setTimeout(() => {
        setMessage("");
      }, 3000);
    } //if
    else if (action == "edit") {
      let updatedProductList = filteredData.map((e) => {
        if (e.id == product.id) {
          return product;
        } else {
          return e;
        }
      });
      setProductRecord(updatedProductList);
      setFilteredData(updatedProductList);
      setMessage("Edit operation is successful.");
      window.setTimeout(() => {
        setMessage("");
      }, 3000);
    } //else
  }
  let product = [
    { id: 1, name: "Idli", Price: 30, image: "Idli.jpg" },
    { id: 2, name: "Dosa", Price: 40, image: "Dosa.jpg" },
    { id: 3, name: "Batatawada", Price: 50, image: "Batatawada.jpg" },
    { id: 4, name: "Masaladosa", Price: 30, image: "Masaladosa.jpg" },
    { id: 5, name: "Meduwada", Price: 40, image: "Meduwada.jpg" },
    { id: 6, name: "Onionuttapa", Price: 50, image: "Onionuttapa.jpg" },
    { id: 7, name: "Pohe", Price: 50, image: "Pohe.jpg" },
    {
      id: 8,
      name: "Sabudanakhichadi",
      Price: 50,
      image: "Sabudanakhichadi.jpg",
    },
    { id: 9, name: "Sabudanawada", Price: 50, image: "Sabudanawada.jpg" },
    { id: 10, name: "Sandwich", Price: 50, image: "Sandwich.jpg" },
    { id: 11, name: "Shira", Price: 50, image: "Shira.jpg" },
    { id: 12, name: "Tomatouttapa", Price: 50, image: "Tomatouttapa.jpg" },
    { id: 13, name: "Upma", Price: 50, image: "Upma.jpg" },
    { id: 14, name: "Vadapav", Price: 15, image: "Vadapav.jpg" },
  ];
  // let [productList, setProductList] = useState(product);
  let arrayproduct = JSON.stringify(product);
  let [filteredData, setFilteredData] = useState(product);
  let [message, setMessage] = useState("");
  let [view, setView] = useState("list");
  let [action, setAction] = useState("add");
  let [productRecord, setProductRecord] = useState({});
  let content_header;
  // console.log(arrayproduct);
  localStorage.setItem("filteredData", arrayproduct);

  return (
    <div className=" p-2 container ">
      {" "}
      {message && <div className="div-message">{message}</div>}{" "}
      {view == "list" && (
        <div className="div-product-count">{content_header}</div>
      )}
      {view == "list" && <Search onSearchTextKeyUp={handleSearchTextKeyUp} />}{" "}
      <div className="mb-2">
        {" "}
        <button className="btn bg-secondary text-white" onClick={handleAddOrListButtonClick}>
          {" "}
          {view == "list" ? "Add a Product" : "Show Product Records"}
        </button>
      </div>{" "}
      {view == "list" && filteredData.length != 0 && (
        <div>
          {" "}
          <div className="row">
            {" "}
            <div className="col-1">S.N.</div> <div className="col-2">Name</div>{" "}
            <div className="col-2">Price</div>{" "}
            <div className="col-2">Image</div>
          </div>{" "}
          {filteredData.map((product, index) => (
            <Admin
              product={product}
              key={index}
              index={index}
              onEditButtonClick={handleEditButtonClick}
              onDeleteButtonClick={handleDeleteButtonClick}
            />
          ))}
        </div>
      )}
      {view == "form" && (
        <FormProduct
          onCancelButtonClick={handleCancelButtonClick}
          onSubmitForm={handleSubmitForm}
          productRecord={productRecord}
          action={action}
        />
      )}
    </div>
  );
}
export default Home;

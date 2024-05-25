import React from "react";

import Product from "./components/product";
// import Students from "./components/students";
// import Addition from "./components/addition";
// import Admin from "./components/admin";
// import Admin from "./admin";
// import Admin from "./components/admin";
import { useState } from "react";

function Home2()
{
    let [price,setPrice]=useState(0);
    let [count,setCount]=useState(0);
  let product = [
    { id: 1, name: "Idli", Price: 30, image: "Idli.jpg" },
    { id: 2, name: "Dosa", Price: 40, image: "Dosa.jpg" },
    { id: 3, name: "Batatawada", Price: 50, image: "Batatawada.jpg" },
    { id: 4, name: "Masaladosa", Price: 30, image: "Masaladosa.jpg" },
    { id: 5, name: "Meduwada", Price: 40, image: "Meduwada.jpg" },
    { id: 6, name: "Onionuttapa", Price: 50, image: "Onionuttapa.jpg" },
    { id: 7, name: "Pohe", Price: 50, image: "Pohe.jpg" },
    { id: 8, name: "Sabudanakhichadi", Price: 50, image: "Sabudanakhichadi.jpg" },
    { id: 9, name: "Sabudanawada", Price: 50, image: "Sabudanawada.jpg" },
    { id: 10, name: "Sandwich", Price: 50, image: "Sandwich.jpg" },
    { id: 11, name: "Shira", Price: 50, image: "Shira.jpg" },
    { id: 12, name: "Tomatouttapa", Price: 50, image: "Tomatouttapa.jpg" },
    { id: 13, name: "Upma", Price: 50, image: "Upma.jpg" },
    { id: 14, name: "Vadapav", Price: 15, image: "Vadapav.jpg" },
  ];
  let arrayproduct = JSON.stringify(product);
  localStorage.setItem("product", arrayproduct);
  function handleAddPrice(product) {

      price += product.Price;
    // console.log(price);
    
      setPrice(price);
  }
  function handleSubPrice(product) {
      
    // console.log(price);
    if(price>=0 && (price-product.Price)>=0) 
    {
      price -= product.Price;
      setPrice(price);
    }
  }
  function handleCount()
  {
    count += 1;
    setCount(count);
  }

    return(
<>
<div className="App">
<div className="container2  ">
          <div className="Totalamt">Total Amount {price}</div>
          <div className="row ">
            {product.map((product, index) => (
              <Product
                product={product}
                key={index}
                handleAddPrice={handleAddPrice}
                handleSubPrice={handleSubPrice}
                handleCount={handleCount}
              />
            ))}
          </div>
        </div>
            </div>

</>

    );
}
export default Home2;
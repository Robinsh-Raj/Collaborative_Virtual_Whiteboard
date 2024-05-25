import React from "react";
import "./App.css";
import Product from "./components/product";
import Students from "./components/students";
import Addition from "./components/addition";
import Admin from "./components/admin";
// import Login from "./components/login";
import { useState } from "react";
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Home2 from "./home2";
import Container from "./components/container/Container";
import DrawingBoard from "./components/container/DrawingBoard";
import Login from "./components/login/login";
import VirtualWhiteboard from "./components/container/VirtualWhiteboard";
import Canva from "./components/Canva/canva";


function App() {
  
  // let [price,setPrice]=useState(0);

  // let product = [
  //   { id: 1, name: "Idli", Price: 30, image: "Idli.jpg" },
  //   { id: 2, name: "Dosa", Price: 40, image: "Dosa.jpg" },
  //   { id: 3, name: "Batatawada", Price: 50, image: "Batatawada.jpg" },
  //   { id: 4, name: "Masaladosa", Price: 30, image: "Masaladosa.jpg" },
  //   { id: 5, name: "Meduwada", Price: 40, image: "Meduwada.jpg" },
  //   { id: 6, name: "Onionuttapa", Price: 50, image: "Onionuttapa.jpg" },
  //   { id: 7, name: "Pohe", Price: 50, image: "Pohe.jpg" },
  //   { id: 8, name: "Sabudanakhichadi", Price: 50, image: "Sabudanakhichadi.jpg" },
  //   { id: 9, name: "Sabudanawada", Price: 50, image: "Sabudanawada.jpg" },
  //   { id: 10, name: "Sandwich", Price: 50, image: "Sandwich.jpg" },
  //   { id: 11, name: "Shira", Price: 50, image: "Shira.jpg" },
  //   { id: 12, name: "Tomatouttapa", Price: 50, image: "Tomatouttapa.jpg" },
  //   { id: 13, name: "Upma", Price: 50, image: "Upma.jpg" },
  //   { id: 14, name: "Vadapav", Price: 15, image: "Vadapav.jpg" },
  // ];
  // let arrayproduct = JSON.stringify(product);
  // localStorage.setItem("product", arrayproduct);
  // function handleAddPrice(product) {

  //     price += product.Price;
  //   // console.log(price);
    
  //     setPrice(price);
  // }
  // function handleSubPrice(product) {
      
  //   // console.log(price);
  //   if(price>=0 && (price-product.Price)>=0) 
  //   {
  //     price -= product.Price;
  //     setPrice(price);
  //   }
  // }
  // console.log(price);
  

  return (
    <>
    <BrowserRouter>
      
        <Routes>
          <Route  path="/home" element={<Home/>} />
          <Route  path="/home2" element={<Home2/>}/>
          <Route  path="/login" element={<Login />}/>
          {/* <Route  path="/login" element={<Login />}/> */}
          <Route  path="/Container" element={<Container/>}/>
          <Route  path="/DrawingBoard" element={<DrawingBoard/>}/>
          <Route  path="/VirtualWhiteboard" element={<VirtualWhiteboard/>}/>
          <Route  path="/Canva" element={<Canva/>}/>
          {/* Add more routes as needed */}
        </Routes>
    
    </BrowserRouter>
      {/* <div className="App"> */}
        {/* {products.map((product, index) => (
<Product
product={product}
key={index}
/>
 ))} */}
        {/* <Students/> */}
        {/* <Addition/> */}
        {/* <div className="container  ">
          <div className="Totalamt">Total Amount {price}</div>
          <div className="row ">
            {product.map((product, index) => (
              <Product
                product={product}
                key={index}
                handleAddPrice={handleAddPrice}
                handleSubPrice={handleSubPrice}
              />
            ))}
          </div>
        </div> */}
        {/* {product.map((product, index) => (
              <Admin
                product={product}
                key={index}
                
              />
            ))}
            </div> */}
      
    {/* </> */}
  {/* </div> */}
  
  </>
  );
}
export default App;

import React from "react";

function TotalPrice(product)
{

    let [price, setPrice] = useState(0);
    let addPrice = () => {
      let newPrice = price + product.Price;
      setPrice(newPrice);
    }
      let subsPrice = () => {
          let newPrice = price - product.Price;
          setPrice(newPrice);
      }

    return(
<>

        
</>

    );
}
export default TotalPrice;


import React from "react";
import { useState } from "react";
import CartDetails from "./CartDetails";
import ListProduct from './ListProduct'
import ProductInfo from "./ProductInfo";
import Data from './Mock'



const App = (props) => {
  const [product, newProduct] = useState(Data);
  const [cart, setCart] = useState([]);
  const [info, setInfo] = useState([]);
  const [show, setShow] = useState(true);
 




  const addToCart = (item) => {
    const addToCart1 = product.filter((list) => {
      if (list.name === item.name && item.quantity == 1) {
        setCart([...cart, item]);
        // console.log(cart);
      }
    })
  }

  

  const mainVal = (item) => {

    setCart(cart => cart.map((list) => {
      if (item.name === list.name) {
        item.quantity += 1;
        return { ...list, quantity: item.quantity};
      }
      return list
    })
    );
  }



  const detailView = (item) => {
    setShow(false)
    product.filter((list) => {
      if (list.name === item.name) {
        console.log(list)
        setInfo([list]);
      }
    })
  }

  


  return (<div>



    {show ? (<div><h3>Products</h3>
      <ListProduct product={product} addToCart={addToCart} detailView={detailView} />
      <CartDetails cart={cart} mainVal={mainVal} />
    </div>) : (<ProductInfo info={info} addToCart={addToCart} cart={cart} mainVal={mainVal} />)
    }
  </div>)
}


export default App
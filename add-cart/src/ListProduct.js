
import React from "react";
import './index.css'

const ListProduct = ({product,addToCart,detailView}) => {
    return (<div>
     {product.map(item => 
     <div className="products" key={item.name}>
         <h3>{item.name}</h3>
         <h4>{item.price}</h4>
         <div className="product-sub">
         <img src={item.src} onClick={()=>detailView(item)}/>
         <h4>{item.quantity}</h4>
         </div>
         <button onClick={()=>addToCart(item)}>Add to Cart</button>
     </div>)}

    </div>)
}

export default ListProduct;
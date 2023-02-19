

import React, { useState } from "react";
import { FaCartPlus, FaRegWindowClose, FaPlus, FaMinus } from 'react-icons/fa';
import { Redirect } from "react-router-dom";
import ListProduct from "./ListProduct";
import './index.css'

const ProductInfo = ({ info, addToCart, cart, mainVal }) => {
    const [cartShown, setcartShown] = useState("red");
    return (
        
            <div className="main-product">
                <div className="smallcart" onClick={() => setcartShown("green")}>
                    <FaCartPlus />
                    <h4>{cart.length}</h4>
                </div>
                <div className={cartShown}>
                    <div className="closecart" onClick={() => setcartShown("red")}>
                        <FaRegWindowClose />
                    </div>
                    <h4 style={{ textAlign: "center", paddingTop: "10px", margin: "0px" }}>Add To Cart</h4>
                    {cart.map(items =>
                        <div className="addtoCart">
                            <h4>{items.name} {items.quantity}</h4>
                            <h5>{items.price}</h5>
                            <button onClick={() => mainVal(items)} >+</button>
                            {/* <h4><FaMinus onClick={() => setMinval(items)} /></h4> */}
                        </div>

                    )}

                </div>
                <h3>ProductInfo</h3>
                {info.map(items => (
                    (<div className="subproduct">
                        <div className="pro-info">
                            <img src={items.src} />
                        </div>
                        <div className="right-div">
                            <h3>{items.name}</h3>
                            <h4>{items.price}</h4>
                            <button onClick={() => addToCart(items)}>Add to Cart</button>
                        </div>
                    </div>
                    )
                ))}
            </div>
    )
}

export default ProductInfo
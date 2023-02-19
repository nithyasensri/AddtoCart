


import React, { useState } from "react";
import { FaCartPlus, FaRegWindowClose, FaPlus, FaMinus } from 'react-icons/fa';


const CartDetails = ({ cart, mainVal}) => {



    const [cartShown, setcartShown] = useState("red");

  

        var priceval= cart.map(list=>{
         return list.price;
         }) ;
         
         var total =  priceval.reduce((initial,final)=>{
           return (initial+final)
         },0)
     
      console.log(total);


    return (
        <div>
            {/* <style>{`
        .red {top:50px;position:absolute;width:200px;height:100px;right:100px;background:#ccc}
        .green {color:green}
       `}</style> */}
 
            
            <div className="smallcart" onClick={() => setcartShown("green")}>
                <FaCartPlus />
                <h4>{cart.length}</h4>
            </div>
            <div className={cartShown}>
                <div className="closecart" onClick={() => setcartShown("red")}>
                    <FaRegWindowClose />
                </div>
                <h3>Total:{total}</h3>
                <h4 style={{ textAlign: "center", paddingTop: "10px", margin: "0px" }}>Add To Cart</h4>
                {cart.map(items =>
                    <div className="addtoCart" key={items.name}>
                        <h4>{items.name} {items.quantity}</h4>
                        <h5>{items.price*items.quantity}</h5>
                        <button onClick={() => mainVal(items)} >+</button>
                        {/* <h4><FaMinus onClick={() => setMinval(items)} /></h4> */}
                    </div>

                )}

            </div>
        </div>




    )
}





export default CartDetails
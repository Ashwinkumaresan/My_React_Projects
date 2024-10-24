import React, { useState } from 'react'

export const Cart = () => {
    const [cartCount, setCartCount] = useState(0);
    function handleClick(){
        setCartCount(cartCount + 1);
    }
    // const notHandleClick=()=> setCartCount(cartCount - 1);
    function notHandleClick() {
        if(cartCount>0)
            setCartCount(cartCount - 1);
        else{
            alert("You can't remove more items from cart");
        }
    }
  return (
    <>
    <h1>Number of items in cart: {cartCount} </h1>
    <button onClick={handleClick}>Add to cart</button>
    <button onClick={notHandleClick}>Remove from cart</button>
    </>
  )
}

import React from "react";
import { useCart } from "react-use-cart";

function Cart (){
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }=useCart();
    if (isEmpty) return <h1 className="text-left">Your cart is empty</h1>
    return(
        <section  className="py-4 container">
        <div className="row justify-content-center">
            <div className="col-12">
                <h1>Cart ({totalUniqueItems})total items:({totalItems})</h1>
            </div>
        </div>
        </section>
    )
}
export default Cart;
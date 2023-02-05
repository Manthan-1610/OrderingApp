import React from "react";
import { useCart } from "react-use-cart";
import GooglePay from "../GooglePay";
import './Card.css';
import { useNavigate } from "react-router-dom";

function Cart (){
    const navigate = useNavigate()
    const {
        isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }=useCart();
    if (isEmpty) return <div><h1 className="text-left">Your cart is empty</h1> <button onClick={() => navigate("/")} >Back to home screen</button></div>
    console.log('clicked')
    return(
        <div className="colo">
        <section  className="py-4 container">
        <div className=" first colo1">
            <div className="col-12">
                <h1>Your Plate</h1>
                <h3>Total items:({totalItems})</h3> 
                <table className="table table-light table-hover m-0">
                    <tbody>
                    {items.map((item,index)=>{
                        return(
                        <tr key={index}>
                        <td>
                            <img src={item.image} style={{height:'6rem'}} />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>Quantity ({item.quantity})</td>
                        <td>
                            <button className="btn btn-info ms-1 button1" onClick={()=>updateItemQuantity(item.id,item.quantity -1)}>-</button>
                            <button className="btn btn-info ms-2 button1 " onClick={()=>updateItemQuantity(item.id,item.quantity +1)} >+</button>
                            <button className="btn btn-danger ms-2 button1" onClick={()=>removeItem(item.id)}>Remove Item</button>
                        </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className="text">
                <h2>Total Price: Rs{cartTotal}</h2>
            </div>
            <div className="">
                <button className="clear" onClick={()=> emptyCart()}>Clear Cart</button>
                <GooglePay/> 
            </div>
        </div>
        </section>
        </div>
    )
}
export default Cart;
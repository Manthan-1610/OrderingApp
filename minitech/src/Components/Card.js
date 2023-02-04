import React from 'react'
import './Card.css';
import {useCart} from "react-use-cart";


function Card(props) {
    const {addItem} =useCart()
  return (
    <div className='card-container'>
        <img  className='image-container' src={props.image} alt='Southfood image'/>
           <h3 className='card-title'> {props.title} </h3>
           <p className='one' >Rs {props.price}</p>
            <button className='btn' onClick={() => {console.log('clicked'); addItem(props.item)}}><span>Add to Cart</span></button>
    </div>
  )
}

export default Card;
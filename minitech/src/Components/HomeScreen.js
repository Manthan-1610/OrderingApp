import React from 'react'
import Card from './Card.js';
import './Card.css';
import data from './data.js';

function HomeScreen() {
    console.warn(data.productData)
  return (
    <div>
    <div className='Homescreen-container'  class='row row-cols-3' >
        {
            data.productData.map((item,index)=>{
                return(
                    <Card  image={item.image} title={item.title} price={item.price} item={item} key={index}/>
                )
            })
        }
    </div>
    </div>
  )
}

export default HomeScreen;
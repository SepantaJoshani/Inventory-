import React from 'react'
import './Product.css'
const Product = (props) => {


    return (
        <div className="product">
           <p>Name : {props.product} </p> 
           <p>Category : {props.category}</p> 
         
        </div>
    )
}

export default Product

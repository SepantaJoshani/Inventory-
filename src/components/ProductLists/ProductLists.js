import React from 'react'
import Product from './Product'
import './ProductLists.css'

const ProductLists = () => {

    const productsList = JSON.parse(localStorage.getItem('Products'))
    console.log(productsList);

    return (
        <div className="productlists">
           {!productsList?null : productsList.map(item=>(
                <Product product={item.product} category={item.category} />
           ))}
          
        </div>
    )
}

export default ProductLists

import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ProductLists from "../ProductLists/ProductLists";
import "./ChooseCategory.css";
import '../ProductLists/ProductLists.css'





const ChooseCatForm = (props) => {
const [productName, setproductName] = useState("")
const [categoryName, setCategoryName] = useState('')
  const categories = JSON.parse(localStorage.getItem("categories"));

  const saveLocalProducts = (category) => {
    let savedCategories = localStorage.getItem("Products")
      ? JSON.parse(localStorage.getItem("Products"))
      : [];
    savedCategories.push(category);
    localStorage.setItem("Products",JSON.stringify(savedCategories));
  };
  

 
const submitHandler=(event)=>{
event.preventDefault()
if(categoryName.length!==0 && productName.length !==0){
  saveLocalProducts({category:categoryName,product:productName})
setproductName('')
}
}

  return (
    
   <Fragment>
      <form onSubmit={submitHandler}>
      <div className="select__info">
        <label htmlFor="select"></label>
        <select id="categories" value={categoryName} onChange={(event)=>{
          const selectedCategory = event.target.value
          setCategoryName(selectedCategory)

        }}>
          <option value="" disabled selected hidden>
            Select Your Category ...
          </option>
          {!categories ? []:categories.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="txt__info">
        <input type="text" id="product" value={productName} onChange={event=>setproductName(event.target.value)} placeholder="Enter Product Name ..." />
        <button type="submit">Set</button>
      </div>
    </form>
      <ProductLists />
   </Fragment>
  );
};

export default ChooseCatForm;

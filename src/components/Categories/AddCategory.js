import React from 'react'
import './AddCategory.css'
const AddCategory = () => {


    const addCategoryHandler = ()=>{
      const categoryName=  prompt('Please Enter a Name ')

    if(categoryName){

    }        
    }

    return (
        <div className="add__category__body">
            <div className="add__category__text" onClick={addCategoryHandler}>
                <p>Please Click Here If Yout Want to Create a New Category</p>
            </div>
           
        </div>
    )
}

export default AddCategory

import React, { useState } from "react";
import "./AddCategory.css";
import AddCatForm from "./AddCatForm";
const AddCategory = () => {

  return (
    <div className="add__category__body">
      <div className="add__category__text">
        <p>Please Create a Category If Its Not In The List</p>
      </div>
      <AddCatForm />
    </div>
  );
};



export default AddCategory;

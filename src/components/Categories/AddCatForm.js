import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ChooseCategory from "./ChooseCategory";
import "./ChooseCategory.css";

const AddCatForm = (props) => {
  const [category, setCategory] = useState("");
  const saveLocalCategories = (category) => {
    let savedCategories = localStorage.getItem("categories")
      ? JSON.parse(localStorage.getItem("categories"))
      : [];
    savedCategories.push(category);
    localStorage.setItem("categories", JSON.stringify(savedCategories));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (category.length !== 0) {
      saveLocalCategories(category);

      setCategory("");
    }
  };

  return (
    <Fragment>
      <form className="add__form" onSubmit={submitHandler}>
        <div className="add__form--info">
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Enter Category Name..."
          />
          <button type="submit">Set</button>
        </div>
      </form>
      <hr />
      <ChooseCategory />
    </Fragment>
  );
};

export default AddCatForm;

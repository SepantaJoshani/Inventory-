import React from "react";
import "./ChooseCategory.css";
import ChooseCatForm from "./ChooseCatForm";

const ChooseCategory = () => {

 

  return (
    <div className="choose__category__body">
      <div className="choose__category__text">
        <p>Please Select Your Products Category And Products Name</p>
      </div>
     <ChooseCatForm />
    </div>
  );
};

export default ChooseCategory;

import React from "react";
import "./ChooseCategory.css";

const ChooseCategory = () => {
  return (
    <div className="choose__category__body">
      <div className="choose__category__text">
        <p>Please Select Your Products Category And Products Name</p>
      </div>
      <form>
        <div className="select__info">
            <label htmlFor="select"></label>
          <select >
            
            <option value="" disabled selected hidden>Select Your Category ...</option>
            <option value="Mast" >Mast</option>
            
          </select>
        </div>
        <div className="txt__info">
            
            <input type="text" id="product" placeholder="Enter Product Name ..." />
          <button type="submit">Set</button>
        </div>
       
      </form>
    </div>
  );
};

export default ChooseCategory;

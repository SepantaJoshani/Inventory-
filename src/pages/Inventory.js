import React from 'react'
import './Inventory.css'
import AddCategory from '../components/Categories/AddCategory'
import ChooseCategory from '../components/Categories/ChooseCategory'
import ProductLists from '../components/ProductLists/ProductLists'

const Inventory = () => {

    
    return (
        <section className="inventory__body">
           <AddCategory />
        </section>
    )
}

export default Inventory

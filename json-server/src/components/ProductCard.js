import React from 'react'
import axios from 'axios'

const ProductCard = ({name, price, description, _id, getProducts}) => {

    const deleteProduct = async () => {
        try {
            await axios.delete(`https://ironrest.herokuapp.com/wdpt80/${_id}`)
            getProducts()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h3>{name}   {_id}</h3>
        <p> {description} </p>
        <span>Price: {price}</span>
        <button onClick={deleteProduct}>Delete</button>
    </div>
  )
}

export default ProductCard
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const Home = () => {

    const [products, setProducts] = useState()

    const getProducts = async () => {
        try {
            const result = await axios.get('https://ironrest.herokuapp.com/wdpt80')
            const data = result.data
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

  return (
    <div>
        <h2> Products </h2>
        {products && products.map(product => <ProductCard getProducts={getProducts} {...product} key={product._id}/>)}
    </div>
  )
}

export default Home
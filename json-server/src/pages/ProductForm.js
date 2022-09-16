import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductForm = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [feedback, setFeedback] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newProduct = { name, price, description }
        try {
            setLoading(true)
            await axios.post('https://ironrest.herokuapp.com/wdpt80', newProduct)
            setFeedback(true)
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {feedback && <div>
                Criado com sucesso
            </div>}
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Description</label>
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label>Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button style= {{backgroundColor: feedback && 'green'}}>{!loading ? "Send" : "Loading..."}</button>
            </form>
        </>
    )
}

export default ProductForm
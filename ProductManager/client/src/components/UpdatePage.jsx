import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const UpdatePage = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response=>{
            console.log(response.data)
            setTitle(response.data.title)
            setPrice(response.data.price)
            setDescription(response.data.description)
        })
        .catch(err=>console.log(err))


    },[])

    const handleSubmit = (e) =>{
        e.preventDefault()
        //send formData into API,if succs, redirect
        axios.put(`http://localhost:8000/api/product/${id}`, {title : title, price: price, description:description}) //req.body
            .then(response=>{
                console.log(response.data)
                navigate(`/`)
            })
            .catch(err=>console.log(err))
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Title:</label>
            <input type='text' name='location' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div>
            <label>Price:</label>
            <input type='number' name='rating' value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div>
            <label>Description:</label>
            <input type='text' name='image' value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <button type='submit'>Edit Product</button>
       </form>

    </div>
  )
}

export default UpdatePage
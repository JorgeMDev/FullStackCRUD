import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const DetailsPage = () => {
    const [product, setProduct] = useState()
    const {id} = useParams();

    const navigate = useNavigate()

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response=>{
            console.log(response.data)
            setProduct(response.data)

        })
        .catch(err=>console.log(err))
    },[])

    const handleDelete = () =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(response=>{
            navigate('/')

        })
        .catch(err=>console.log(err))
    }



  return (
    <div>
        {
            product&&
            <div>
            <h1>Title: {product.title}</h1>
            <h4>Price: {product.price}</h4>
            <h4>Description: {product.description}</h4>
            <button onClick={()=>handleDelete()}>Delete</button>
            </div>
        }

    </div>
  )
}

export default DetailsPage
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateForm = (props) => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([])


    const handleSubmit = (e) =>{
        e.preventDefault()
      
        axios.post('http://localhost:8000/api/product', {title : title, price: price, description:description}) //req.body
            .then(response=>{
                console.log(response.data)
                props.onCreate(response.data) 
                
            })
            .catch(err=>{
                console.log(err.response)
                const errorResponseDataErrors = err.response.data.errors
                const errMsgArr = []
                for (const eachKey in errorResponseDataErrors){
                    errMsgArr.push(errorResponseDataErrors[eachKey].message)
                }
                setErrors(errMsgArr)
                
            })
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
        <button type='submit'>Create</button>
       </form>
       {
        errors.map((eachErr,i)=>(
            <p key={i} style={{color: 'red'}}>{eachErr}</p>
        ))
       }


    </div>
  )
}

export default CreateForm
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const UpdatePage = () => {
    const navigate = useNavigate()
    const [location, setLocation] = useState('')
    const [rating, setRating] = useState(10)
    const [image, setImage] = useState('')
    const [season, setSeason] = useState('')

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/destinations/${id}`)
        .then(response=>{
            console.log(response.data)
            setLocation(response.data.location)
            setRating(response.data.rating)
            setImage(response.data.image)
            setSeason(response.data.season)

        })
        .catch(err=>console.log(err))


    },[])

    const handleSubmit = (e) =>{
        e.preventDefault()
        //send formData into API,if succs, redirect
        axios.put(`http://localhost:8000/api/destinations/${id}`, {location : location, rating: rating, iamge:image, seasion:season}) //req.body
            .then(response=>{
                console.log(response.data)
                navigate(`/destinations/${response.data._id}`)
            })
            .catch(err=>console.log(err))
    }

  return (
    <div>
             <form onSubmit={handleSubmit}>
        <div>
            <label>Location:</label>
            <input type='text' name='location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
        </div>
        <div>
            <label>Rating:</label>
            <input type='number' name='rating' value={rating} onChange={(e)=>setRating(e.target.value)}/>
        </div>
        <div>
            <label>Image URL:</label>
            <input type='text' name='image' value={image} onChange={(e)=>setImage(e.target.value)}/>
        </div>
        <div>
            <label>Season:</label>
            <select name='season' value={season} onChange={(e)=>setSeason(e.target.value)}>
                <option hidden>Choose a season</option>
                <option value='spring'>Spring</option>
                <option value='summer'>Summer</option>
                <option value='fall'>Fall</option>
                <option value='winter'>Winter</option>
            </select>
        </div>
        <button type='submit'>Edit a destination</button>
       </form>
    </div>
  )
}

export default UpdatePage
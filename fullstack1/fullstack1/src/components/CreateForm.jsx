import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateForm = (props) => {
    const navigate = useNavigate()
    const [location, setLocation] = useState('')
    const [rating, setRating] = useState(10)
    const [image, setImage] = useState('')
    const [season, setSeason] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
      
        axios.post('http://localhost:8000/api/destinations', {location : location, rating: rating, image:image, season:season}) //req.body
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
        <button type='submit'>Add destination</button>
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
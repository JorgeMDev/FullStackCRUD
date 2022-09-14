import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
// need to get id from params useParam
//use the id to get info from api axios
//display info on load useEffect
//variable change useState

const DetailsPage = () => {
    const [destination, setDestination] = useState()
    const {id} = useParams();

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/destinations/${id}`)
        .then(response=>{
            console.log(response.data)
            setDestination(response.data)

        })
        .catch(err=>console.log(err))
    },[])

    const handleDelete = () =>{
        axios.delete(`http://localhost:8000/api/destinations/${id}`)
        .then(response=>{
            navigate('/destinations')

        })
        .catch(err=>console.log(err))

    }

  return (
    <div>
        {
            destination&& //ternary doing if withouth else
            <div>
                <h1>{destination.location}</h1>
                <h5>Rating: {destination.rating}</h5>
                <h5>Season: {destination.season}</h5>
                <img src={destination.image}/>
                <button onClick={()=>handleDelete()}>Delete</button>
            </div>
        }
    </div>
  )
}

export default DetailsPage
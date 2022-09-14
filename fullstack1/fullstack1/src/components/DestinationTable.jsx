import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const DestinationTable = (props) => {

    const handleDelete = (deleteId) =>{
        axios.delete(`http://localhost:8000/api/destinations/${deleteId}`)
        .then(response=>{
            props.onDelete(deleteId)

        })
        .catch(err=>console.log(err))

    }



  return (
    <table>
        <thead>
            <tr>
                <th>Location</th>
                <th>Rating</th>
                <th>Season</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                props.destinations.map((eachDest, i)=>{
                    return(
                        <tr key={i}>
                            <td><Link to={`/destinations/${eachDest._id}`}>{eachDest.location}</Link></td>
                            <td>{eachDest.rating}</td>
                            <td>{eachDest.season}</td>
                            <td><Link to={`/destinations/edit/${eachDest._id}`}>Edit</Link></td>
                            <td><button onClick={()=>handleDelete(eachDest._id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default DestinationTable
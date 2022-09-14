import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ProductTable = (props) => {

    const handleDelete = (deleteId) =>{
        axios.delete(`http://localhost:8000/api/product/${deleteId}`)
        .then(response=>{
            props.onDelete(deleteId)

        })
        .catch(err=>console.log(err))

    }




  return (
    <table>
         <thead>
            <tr>
                <th>Product</th>
                <th>Actions</th>
            </tr>
        </thead>
        {
            props.products.map((eachProd, i)=>{
                return (
                    <tr key={i}>
                    <td><Link to={`/product/${eachProd._id}`}>{eachProd.title}</Link></td>
                    <td><Link to={`/product/edit/${eachProd._id}`}>Edit</Link></td>
                    <td><button onClick={()=>handleDelete(eachProd._id)}>Delete</button></td>
                    </tr>
                )
            }
            )
        }
    </table>
 
  )
}

export default ProductTable
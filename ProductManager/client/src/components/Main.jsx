import React, {useState, useEffect} from 'react'
import CreateForm from './CreateForm'
import ProductTable from './ProductTable'
import axios from 'axios'

const Main = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products`)
    .then(response=>{
        console.log(response.data)
        setProducts(response.data)

    })
    .catch(err=>console.log(err))
},[])


const addProd = (newProd) =>{   //function to add a product without refreshing the page
  setProducts([...products, newProd])
}

const filterList = (deleteId) => {
  const updatedList = products.filter((eachProd)=>deleteId!==eachProd._id) //give me a list where the id to delete is not included
  setProducts(updatedList)
}



  return (
    <div>
        <CreateForm onCreate={addProd}/>
        <ProductTable products={products} onDelete={filterList}/>
    </div>
  )
}

export default Main
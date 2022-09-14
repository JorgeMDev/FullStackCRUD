import React, {useEffect, useState} from 'react'
import CreateForm from '../components/CreateForm'
import DestinationTable from '../components/DestinationTable'
import axios from 'axios'

const Main = () => {
    const [destinations, setDestinations] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/destinations`)
        .then(response=>{
            console.log(response.data)
            setDestinations(response.data)

        })
        .catch(err=>console.log(err))
    },[])


    const addDest = (newDest) =>{
        setDestinations([...destinations, newDest])
    }

    
    const filterList = (deleteId) => {
        const updatedList = destinations.filter((eachDest)=>deleteId!==eachDest._id) //give me a list where the id to delete is not included
        setDestinations(updatedList)
    }



  return (
    <div>
        <CreateForm  onCreate={addDest}/>
        <DestinationTable destinations={destinations} onDelete={filterList} />


    </div>
  )
}

export default Main
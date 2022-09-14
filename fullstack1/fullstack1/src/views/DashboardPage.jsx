import React, {useState, useEffect} from 'react'
import DestinationTable from '../components/DestinationTable'
import axios from 'axios'
// get info from API: axios
//get info when the component is mounted: useEffect
// variable change: useState

const DashboardPage = () => {
    const [destinations, setDestinations] = useState()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/destinations')
        .then(response=>{
            console.log(response.data)
            setDestinations(response.data)
        })
        .catch(err=>console.log(err))
    },[])

    const filterList = (deleteId) => {
        const updatedList = destinations.filter((eachDest)=>deleteId!==eachDest._id) //give me a list where the id to delete is not included
        setDestinations(updatedList)
    }

  return (
    <div>
        <h1>Dashboard Table</h1>
        {
        destinations?
        <DestinationTable destinations={destinations} onDelete={filterList}/>:
        <h1>No destinations available</h1>
        }
    </div>
  )
}

export default DashboardPage
// Shree Ganeshay namah 
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function SingleUser(){

    const [user,setUser] = useState({})
    const { id } = useParams()
    console.log(id)

    useEffect(()=>{
        Show()
    },[])


   async function Show() {
        let res = await axios.get(`https://67056cf9031fd46a830febef.mockapi.io/Data/${id}`)
        console.log(res.data)
        setUser(res.data)
   }
    return(
        <>
          <div  className="shadow col-6 mx-auto p-5 mt-5">
            <ul>
                <li>{user.id}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.City}</li>
                <li>{user.Phone}</li>
            </ul>
          </div>
        </>
    )
}

export default SingleUser
// Shree Ganeshay namah 
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function SingleUser(){

     const [user,setUser] = useState({})

    const {id} = useParams() // If We Here Do not do destructuring so we can write here id.id in console
    

    async function Api(){
        let res = await axios.get(`http://localhost:5000/users/${id}`)
        setUser(res.data)
    }

    useEffect(()=>{
        Api()
        console.log(user)
    },[])

    
    return(
        <>
        
        <h1 className=" text-center">Hello I AM Single USer</h1>


        <div className="container shadow col-6 mx-auto  p-4">
            <h5>Id : {user.id}</h5>
            <h5>Username : {user.Username}</h5>
            <h5>Emiil : {user.Email}</h5>
            <h5>MobileNo : {user.MobileNo}</h5>
        </div>
        
        </>
    )
}


export default SingleUser
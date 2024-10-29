// Shree Ganehshay namah 

import { get, ref } from "firebase/database"
import db from "../firebox"
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

function SingleUSer() {
    const [user,setUser] = useState({})
    const { id } = useParams()

   async function ShowFireBase(){
        const res = await get(ref(db,`rnw/students/${id}`))
        setUser(res.val())
    }


    useEffect(()=>{
        ShowFireBase()
    })

    return (
        <>

        <div className="container p-5 m-4 shadow">
            <h4 className="my-3">Name : {user.username}</h4>
            <h4 className="my-3">MobileNo :  {user.mobile}</h4>
            <h4 className="my-3">Email : {user.email}</h4>
        </div>
        </>
    )
}


export default SingleUSer
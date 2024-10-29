import { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
// Shree Ganeshay namah 
function DeleteApi(){

    const [user,setUser] = useState([])

   async function Api(){
        let res = await axios.get('http://localhost:5000/users')
        console.log(res.data)
        setUser(res.data)
    }
    

   async function trash(id){
        if(confirm("You Really Wanted Deleter This Id")){
           await axios.delete(`http://localhost:5000/users/${id}`)
        }
        Api()

    }
    useEffect(()=>{
        Api()
    },[])

    return(
        <>
        
        <div className="container">
                <table className="table table-striped table-hover">

                    <thead className=" table-success">
                        <tr>
                            <th>Index_No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>MpbileNo</th>
                            <th>delete</th>
                            <th>SingleUser</th>
                            <th>Update</th>
                        </tr>
                    </thead>

                    <tbody className=" table-hover table-success">
                    {
                            user.map((ele, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{ele.Username}</td>
                                        <td>{ele.Email}</td>
                                        <td>{ele.MobileNo}</td>
                                        <td><button className="btn btn-danger" onClick={()=>{trash(ele.id)}} >Delete</button></td>
                                        <td><NavLink to={`/singleuser/${ele.id}`} className="btn btn-warning" >SingleView</NavLink></td>
                                        <td><NavLink to={`/updateForm/${ele.id




                                        }`} className="btn btn-secondary">Update</NavLink></td>
                                    </tr>
                                )
                            }

                            )
                        }
                    </tbody>
                </table>
            </div>
        
        </>
    )
}


export default DeleteApi
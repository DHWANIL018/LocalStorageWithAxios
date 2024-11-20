// Shree Ganeshay namah 

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addUser, viewUser,delteUser } from "../Redux/userSlice"
import { NavLink } from "react-router-dom"
function View() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewUser())
    }, [dispatch])


    const userlist = useSelector((state) => (state.user.userlist))
    console.log(userlist)

    function trash(id){
        if(confirm('Are You Want to Delete ')){

            dispatch(delteUser(id))

          
        }
    }

    return (
        <>




            <div className="container">
                <table className="table table-striped table-hover">

                    <thead className=" table-success">
                        <tr>
                            <th>Index_No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>MpbileNo</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody className=" table-hover table-success">
                        {
                            userlist.map((user, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td><button className="btn btn-danger " onClick={()=>trash(user.id)}>Delete</button></td>
                                       <td><NavLink to={`/update/${user.id}`} className='btn btn-warning'>Update</NavLink></td>
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

export default View 
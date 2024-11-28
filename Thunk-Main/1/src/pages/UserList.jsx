import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewUser,deleteUser } from "../redux/userSlice";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
function UserList(){
  
const {userList}=useSelector((state)=> state.users)
console.log(userList)
const dispatch=useDispatch()

useEffect(()=>{
  dispatch(viewUser())
},[dispatch])

function trash(id) {
  if (window.confirm('do you went to delete this item?')) {
    dispatch(deleteUser(id))
    // alert("delete")
  }
}
return(
  
   <table className='table table-striped table-hover table-success'>
      <thead className='table-dark'>
        <tr>
          <th>S.no</th>
          <th>username</th>
          <th>email</th>
          <th>mobile</th>
          <th>date</th>
          <th>action</th>
        </tr>
      </thead>

      <tbody>
        {
          userList && userList.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.date}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => trash(user.id)}><MdDelete /></button>
                <NavLink to={`/update/${user.id}`} className="btn btn-warning"><FaPencilAlt /></NavLink>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  
)

}

export default UserList
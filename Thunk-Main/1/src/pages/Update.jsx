import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser,viewUser } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

const Update = () => {
    const{id}=useParams()
    const redirect=useNavigate()
    const {register,handleSubmit,reset}=useForm()

const dispatch=useDispatch()
const{userList}=useSelector((state)=>state.users)



const singleUser=userList.find((user)=>{
    return user.id===id
})
    useEffect(()=>{
        dispatch(viewUser())
        reset(singleUser)
    },[dispatch])
    console.log(singleUser)
    function update(data){
        dispatch(updateUser(data))
        alert("updated......")
        redirect('/userlist')
    }
  return (
 <>
        <div className="container my-5 p-5 shadow">
            <form action="" method='post' onSubmit={handleSubmit(update)}>
                <div className="mt-4">
                    <input type="text" {...register('username')} className='form-control' placeholder='enter username' />
                </div>
                <div className="mt-4">
                    <input type="text" {...register('email')} className='form-control' placeholder='enter email' />
                </div>
                <div className="mt-4">
                    <button className='btn btn-warning w-100'>update</button>
                </div>
            </form>
        </div>
 </>
  )
}

export default Update
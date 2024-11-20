// Shree Ganeshay namah 
import { useEffect, useReducer, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { viewUser,updateUser } from "../Redux/userSlice"
function Update(){

    const { register, handleSubmit, formState: { errors },reset } = useForm()

    const {id}  = useParams()
    const { userlist } = useSelector((state)=>(state.user))

    const dispatch = useDispatch()
    const redirect = useNavigate()
    
    async function submitdata(data){
        await dispatch(updateUser(data))
        redirect('/view')
    }

    const singleuser = userlist.find((user)=>{
        return user.id === id
    })

    // useEffect(()=>{
    //     dispatch(viewUser())
    //     reset(singleuser)
    //   if(!singleuser){
    //     dispatch(viewUser())
    //     reset(singleuser)
    //   }
    // },[dispatch])


    useEffect(() => {
        // Fetch user list
        dispatch(viewUser());
        
    }, [dispatch]);

    useEffect(() => {
        // Reset form with fetched user data
        if (singleuser) {
            reset(singleuser);
        }
    }, [singleuser]);


 
   
    // const singleuser = userlis

    return(
        <>
        
<form action="" method="post" onSubmit={handleSubmit(submitdata)}
                className="col-6 mx-auto shadow my-5 p-5">
                <div className="mt-4">
                    <input type="text"{...register('username')}
                        className="form-control" placeholder="enter username" />
                    <p className='text-red'>{errors?.username?.message}</p>

                </div>
                <div className="mt-4">
                    <input type="text"{...register('email')}
                        className="form-control" placeholder="enter email" />
                    <p className='text-red'>{errors?.email?.message}</p>

                </div>
                <div className="mt-4">
                    <input type="text"{...register('mobile')}
                        className="form-control" placeholder="enter mobile" />
                </div>
                <div className="mt-4">
                    <button className="btn btn-success">submit</button>
                </div>
            </form>
        </>
    )
}

export default Update
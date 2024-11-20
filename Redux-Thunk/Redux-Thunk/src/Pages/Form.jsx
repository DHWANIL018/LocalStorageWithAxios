// Shree Ganeshay namah 
import { useState } from "react"
import { useForm } from "react-hook-form"
import {  useDispatch } from "react-redux"
import { addUser } from "../Redux/userSlice"
import { useSelector } from "react-redux"
import dbFireStore from "../Redux/FireStore"
import { useEffect } from "react"
import { viewUser   } from "../Redux/userSlice"
function Form(){


    const [user, setUser] = useState([])
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewUser());  // Fetch users on mount
    }, [dispatch]);

    function submitdata(data){
        dispatch(addUser(data))
    }

    // const userdata = useSelector((state)=>(state))
    const userdata = useSelector((state) => state.user.userlist);
    console.log(userdata)
    // console.log(userdata)
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

export default Form
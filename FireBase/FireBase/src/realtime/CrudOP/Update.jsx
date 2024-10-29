// Shree Ganeshay namah 
import { useForm } from "react-hook-form"
import { push,ref,get,set } from "firebase/database"
import { redirect, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import db from "../firebox"
function Update(){
    const { id } = useParams()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const redirect = useNavigate()
   async function submitdata(data) {
        const res = await set(ref(db,`rnw/students/${id}`),data)
        .then(()=>{
            alert('data update')
            redirect('/Create')
        })
        
    }


   async function Single(){
        const res = await get(ref(db,`rnw/students/${id}`))
        reset(res.val())


        // if (res.exists()) {  // Checking if data exists
        //     const userData = res.val()
        //     console.log(userData)
        //     reset(userData)  // Form fields ko populate karne ke liye reset() function ka use
        // } else {
        //     console.log("No data available for this ID")
        // }
    //     console.log(res.val())
    //    reset(res.val)
    }

    useEffect(()=>{
        Single()
    },[])


    return(
        <>
                <form action="" method="post" onSubmit={handleSubmit(submitdata)}
                className="col-6 mx-auto shadow my-5 p-5">
                <div className="mt-4">
                    <input type="text"{...register('username',

                        {
                            required: {
                                value: true,
                                message: ' enter username'
                            },
                            minLength: {
                                value: 4,
                                message: 'minimum 4 character'
                            },
                            maxLength: {
                                value: 18,
                                message: 'maximum  must 10 character'
                            },
                            pattern: {
                                value: /[A-Za-z]/,
                                message: "only string"
                            }
                        }
                    )}
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
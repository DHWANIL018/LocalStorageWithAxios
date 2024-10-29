// Shree Ganeshay namah 
import axios from "axios"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import {  useParams,useNavigate } from "react-router-dom"
function UpdateApi() {

    const {id} = useParams()

    const redirect = useNavigate()
    async function show(){
        let res = await axios.get(`http://localhost:5000/users/${id}`)
        reset(res.data)
    }

    useEffect(()=>{
        show()
        
    },[])

   async function editdata(data){
        await axios.put(`http://localhost:5000/users/${id}`,data)
        redirect('/userApi')
   }


    const { register, handleSubmit, formState: { errors },reset } = useForm()
    return (
        <>


            <form action="" className="col-6 mx-auto mt-5 p-5 shadow" onSubmit={handleSubmit(editdata)}>
                <div>
                    <input type="text" className="form-control mb-4" {...register('Username')} placeholder="Enter Your Name" />
                </div>

                <div>
                    <input type="text" className="form-control mb-4" {...register('Email')} placeholder="Enter Your Email" />
                </div>

                <div>
                    <input type="text" className="form-control mb-4" {...register('MobileNo')} placeholder="Enter Your PhoneNo " />
                </div>

                <button className="btn btn-success">Submite</button>
            </form>
            <h4>Your Update Form</h4>
        </>
    )
}

export default UpdateApi
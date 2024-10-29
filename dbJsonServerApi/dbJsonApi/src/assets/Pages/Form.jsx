// Shree Ganeshay namah 
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"

function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [user, setUser] = useState([])

   async function userdata(data) {
        let res1 = await axios.post('http://localhost:5000/users',data)
        if(res1){
            alert('Insertion Is Successful')
        }
            setUser([...user, data])
    }

    useEffect(() => {
        console.log(user)
    }, [userdata])
    return (
        <>
            <form action="" className="col-6 mx-auto mt-5 p-5 shadow" onSubmit={handleSubmit(userdata)}>
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
        </>
    )
}

export default Form
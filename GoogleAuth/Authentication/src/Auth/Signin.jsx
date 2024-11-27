// Shree Ganeshay namah 

import { useForm } from "react-hook-form"
import { getAuth } from "@firebase/auth"
import { signInWithEmailAndPassword } from "@firebase/auth"
import auth from "./Firebase"
function Signin(){
    const { register, handleSubmit,reset } = useForm()

   async function signin(data){
        const {email,password} = data

        await signInWithEmailAndPassword(auth,email,password)
        
        .then((res)=>{
            console.log(res)
            console.log(res.user)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
             <div>
            <h1>signup</h1>
            <form action="" method="post" onSubmit={handleSubmit(signin)} className='col-4 mx-auto my-5 p-5 shadow'  >
                <div className="my-3">
                    <input type="text" {...register('email')} placeholder='enter email' className='form-control' />
                </div>
                <div className="my-3">
                    <input type="password" {...register('password')} placeholder='enter password' className='form-control' />
                </div>
                {/* <div className="my-3">
                    <button className='btn btn-danger'>signup</button>
                    <NavLink to="/login">
                        <button className='btn btn-success mx-2'>Login</button>
                    </NavLink>

                </div> */}
                <button>submite</button>
            </form>
        </div>
        </>
    )
}

export default Signin
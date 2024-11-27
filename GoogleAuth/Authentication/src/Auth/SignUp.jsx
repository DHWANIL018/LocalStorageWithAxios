// Shree Ganeshay namah 
import { getAuth } from "@firebase/auth"
import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword } from "@firebase/auth"
import auth from "./Firebase"
function Singup(){

    const { register, handleSubmit } = useForm()

    function signup(data){
        const {email , password } = data

        createUserWithEmailAndPassword(auth,email,password)
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
            <form action="" method="post" onSubmit={handleSubmit(signup)} className='col-4 mx-auto my-5 p-5 shadow'  >
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

export default Singup
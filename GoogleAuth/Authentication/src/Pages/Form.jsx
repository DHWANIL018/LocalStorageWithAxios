// Shree Ganeshay namah 
import { useForm } from "react-hook-form"

function Form(){

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    function submitdata(data){
        console.log(data)
    }

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
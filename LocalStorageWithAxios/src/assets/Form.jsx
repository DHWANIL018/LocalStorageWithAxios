// Shree Ganeshay namah 
// Shree Ganeshay namah 
import { useState,useEffect } from "react"
import { useForm } from "react-hook-form"

function Form(){

    const { register,handleSubmit,formState:errors,reset} = useForm()
    const [user,setUser] =useState([])
    const [editIndex,setIndex] = useState(null)

    function savedata(data){

        if(editIndex != null){
            let updateUser = [...user]
            updateUser[editIndex] = data
            setUser(updateUser)
            setIndex(null)
            // reset()
        }else{
            setUser([...user, data])
            // reset()
        }

        
        // console.log(data)
        
        // console.log(user) // Aa Asyncronous 6
        
    }

    useEffect(()=>{
        const get = localStorage.getItem('userlist')
        console.log(get)
        if(get){
            setUser(JSON.parse(get))
        }
    },[])   

    useEffect(()=>{
        if(user.length > 0){
            localStorage.setItem('userlist',JSON.stringify(user))

            // let filterdata = user.filter((ele.index))
        }
    },[user])


    function trash(data){
        console.log(data)
        const filterData = user.filter((ele,index)=>{
            return data != index
        })
        setUser(filterData)

        if(data == 0){
            localStorage.removeItem('userlist')
        }

    }

    function update(index){
        console.log(user[index])
        reset(user[index])
        setIndex(index)
    }
   

    return(
        <>
                    <form action="" method="post" className="col-6 mx-auto shadow my-5 p-5 bg-primary" onSubmit={handleSubmit(savedata)}>
                <div className="mt-4">
                    <input type="text" className="form-control" {...register('username',
                        // {
                        //     required: {
                        //         value: true,
                        //         message: "enter user name"
                        //     },
                        //     maxLength: {
                        //         value: 10,
                        //         message: "max 10 character"
                        //     },
                        //     minLength: {
                        //         value: 4,
                        //         message: "must be 4 character"
                        //     },
                        //     pattern: {
                        //         value: /[A-Za-z]/,
                        //         message: "only string"
                        //     }
                        // }
                    )}
                        placeholder='enter your username' />
                    <p>{errors?.username?.message}</p>
                </div>
                <div className="mt-4">
                    <input type="text" className="form-control" {...register('email',
                        {
                            required: {
                                value: true,
                                message: "enter email"
                            },
                            maxLength: {
                                value: 100,
                                message: "max 10 character"
                            },
                            minLength: {
                                value: 4,
                                message: "must be 4 character"
                            },
                        }
                    )}
                        placeholder='enter your email' />
                    <p>{errors?.email?.message}</p>
                </div>
                <div className='mt-4'>

                    {
                        editIndex == null   
                        ?
                        <button className='btn btn-success'>Submit</button> 
                        :
                        <button className='btn btn-warning'>Update</button> 
                    }

                    {/* <button className='btn btn-success'>Submit</button> */}
                </div>
            </form>
        <div className="container">

            <table className="table table-hover table-success">
            <thead className='table-dark'>
                        <tr>
                            <th>S.no</th>
                            <th>username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    
                    {user.map((ele,index)=>{
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>trash(index)}>Trash</button>
                                    <button className="btn btn-warning" onClick={()=>update(index)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
            </table>
        </div>
        </>
    )
}

export default Form
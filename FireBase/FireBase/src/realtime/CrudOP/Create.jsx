// Shree Ganeshay namah 

import { ref, set, push, get, remove } from 'firebase/database'
import db from '../firebox'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Create() {
    const [user, setUser] = useState([])
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    function submitdata(data) {
        set(push(ref(db, 'rnw/students')), data)
        alert('data Has Been Inserted')
        reset()
        
        ShowFireBase() 
    }

   async function trash(id){
        if(confirm('Do You Want to delete This Item?')){
            const singleUser = ref(db,`rnw/students/${id}`)
            await remove (singleUser)
            ShowFireBase()
        }
    }

    async function ShowFireBase() {
        const res = await get(ref(db, 'rnw/students'))
        // console.log(res.val())


        const obj = res.val()


        var arr = []


        for (var key in obj) {
            // console.log(key);

            const users = obj[key]
            // console.log(users)
            const newUser = {
                id: key,
                ...users
            }
            arr.push(newUser)
            // console.log(newUser);


        }
        console.log("final arr.....");
        console.log(arr);
        setUser(arr)
    }
    
    useEffect(()=>{
        ShowFireBase()
    },[])

    return (
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



            <div className="container table-responsive">
                <table className='table table-striped table-hover table-success table-responsive'>
                    <thead className='table-dark'>
                        <tr>
                            <td>s.no</td>
                            <td>id</td>
                            <td>username</td>
                            <td>email</td>
                            <td>mobile</td>                    
                            <td>Delete</td>
                            <td>SinglUser</td>
                            <td>Update</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            user.map((ele,index)=>{
                                return(
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.mobile}</td>
                                    <td><button className='btn btn-danger' onClick={()=>{trash(ele.id)}}>Delete</button></td>
                                    <td><NavLink to={ `/SingleUser/${ele.id}`} className='btn btn-warning'>SingleUser</NavLink ></td>
                                    <td><NavLink to={`/Update/${ele.id}`} className='btn btn-secondary'> Update</NavLink></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

                </>
                )
}

                export default Create
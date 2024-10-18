// Shree Ganeshay namah 
import axios from "axios"
import { set, useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import SingleUser from "./SingleUser"


function Axios() {


    const [user, setUser] = useState([])
    const { register, handleSubmit, reset } = useForm()
    const [sorted, SetSorted] = useState("")
    const [search, SetSearch] = useState('')
    const [selectCity,setCity] = useState('')

   const citits = user.map((ele)=>{
    return ele.City
   })

   const uniqueCity = new Set(citits)
   const FinalCity = [...uniqueCity]
   
   

    async function Api() {
        let res = await axios.get('https://67056cf9031fd46a830febef.mockapi.io/Data')
        setUser(res.data)
      
        reset()
    }
    useEffect(() => {
        Api()
       
    }, [])


    // useEffect(()=>{
    //     console.log(search)
    // },[SetSearch])


    // useEffect(()=>{
    //     console.log(selectCity)
    // })

    async function Save(data) {
        // console.log(data)
        console.log(data)
        let res1 = await axios.post('https://67056cf9031fd46a830febef.mockapi.io/Data', data)
        if (res1) {
            Api()
            alert('Insertion Is Successful')
        }


    }



    // INSERTION PART ADDING 

    // function post



    async function trash(id) {
        console.log(id)
        if (confirm('Delete Confirm')) {
            await axios.delete(`https://67056cf9031fd46a830febef.mockapi.io/Data/${id}`)
            Api()
        }
    }

  
    const fiterData =  user
   
    .sort((a,b)=>{
        if(sorted == 'asc'){
            return a.email.localeCompare(b.email);
        } else if(sorted == 'desc'){
            return b.email.localeCompare(a.email);
        }
        return 0;
    })
    .filter((user)=>{
        const searched = search.toUpperCase()
        const UserName = user.username.toUpperCase()
        return UserName.includes(searched)
    })
    .filter((user)=>{
        return user.City.includes(selectCity)
    })
    




    // useEffect(()=>{
    //     console.log(sorted)
    //     console.log(user)
    // })
    // user.sort((a, b) => {
    //     if (sorted === 'asc') {
    //         return a.username.localeCompare(b.username); // Correct method: localeCompare
    //     } else if (sorted === 'desc') {
    //         return b.username.localeCompare(a.username);
    //     }
    //     return 0; // Ensure a default return value
    // });


    

    return (
        <>
            <h2>Hello I Am Crud Operation</h2>

            <form action="" method="post" className="col-6 shadow mx-auto p-5 mt-5" onSubmit={handleSubmit(Save)}>
                <div className="">
                    <input type="text" className="form-control" {...register('username')} placeholder="Enter UserName" />
                </div>

                <div className="mt-4">
                    <input type="text" className="form-control" {...register('email')} placeholder="Enter Email" />
                </div>


                <div className="mt-4">
                    <input type="text" className="form-control" {...register('Phone')} placeholder="Enter Phone" />
                </div>

                <div className="mt-4">
                    <input type="text" className="form-control"{...register('City')} placeholder="Enter City" />
                </div>

                <button className="btn btn-success mt-3">Submit</button>


            </form>


            <h2 className="text-center mt-5">View Api</h2>
            <div className="container">


                <div className="row col-12">


                    <div className="col-4 my-4">
                       <input type="text" className="form-control" placeholder="Enter Your Name" onChange={(e)=>SetSearch(e.target.value)}/>
                    </div>

                    <div className="col-4 my-4">
                        <select className="form-select" onChange={(e) => { SetSorted(e.target.value) }}>
                            <option value="" disabled selected>--Select Sorting </option>
                            <option value="asc">A-Z</option>
                            <option value="desc">Z-A</option>
                        </select>
                    </div>

                    <div className="col-4 my-4">
                        <select className="form-select" onChange={(e)=>{setCity(e.target.value)}}>
                            <option value="" disabled selected>-- Select City --</option>
                            {
                              FinalCity.map((city)=>{
                                return <option>{city}</option>
                              })
                            }
                        </select>
                    </div>

                    </div>
            </div>
            <div className="container mt-4">

                <table className="table table-stripped table-hover">
                    <thead className="table-success">
                        <tr>
                            <th>Sr.No</th>
                            <th>UserName</th>
                            <th>phone</th>
                            <th>City</th>
                            <th>Email   </th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody className="table-hover table-success">
                        {
                            fiterData.map((ele, ind) => {
                                return (

                                    <tr key={ind}>
                                        <td>{ele.id}</td>
                                        <td>{ele.username}</td>
                                        <td>{ele.Phone}</td>
                                        <td>{ele.City}</td>
                                        <td>{ele.email}</td>
                                        <td><button className="btn btn-danger" onClick={() => { trash(ele.id) }}>Deleate</button></td>
                                        <NavLink to={`/SingleUser/${ele.id}`} className="btn btn- warning">
                                            View
                                        </NavLink>
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

export default Axios
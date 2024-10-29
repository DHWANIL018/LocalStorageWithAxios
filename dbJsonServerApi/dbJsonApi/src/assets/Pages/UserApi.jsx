// Shree Ganeshay namah 
import axios from "axios"
import { useEffect, useState } from "react"
function UserApi() {

    const [user, setUser] = useState([])

    useEffect(() => {

        async function main() {

            let responce = await axios.get('http://localhost:5000/users')
            setUser(responce.data)
            
        }
        main()
    },[])

    console.log(user)


    return (
        <>
            <div className="container">
                <table className="table table-striped table-hover">

                    <thead className=" table-success">
                        <tr>
                            <th>Index_No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>MpbileNo</th>
                        </tr>
                    </thead>

                    <tbody className=" table-hover table-success">
                        {
                            user.map((ele, index) => {
                                return (

                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{ele.Username}</td>
                                        <td>{ele.Email}</td>
                                        <td>{ele.MobileNo}</td>
                                    </tr>
                                )
                            }

                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserApi
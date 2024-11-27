// Shree Ganeshay namah 
import { useEffect, useState } from "react";
import auth from "./Firebase"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
function PerfectGoogle() {

    const [user, setUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            console.log(user.email)
            console.log(user.photoURL)
            setUser(user)
        })
    })

    function googlelogin() {
        const Provider = new GoogleAuthProvider()
        signInWithPopup(auth, Provider)
            .then((res) => {
                const result = GoogleAuthProvider.credentialFromResult(res)
                console.log(result)
                console.log(result.accessToken)
                console.log(res.user)
            
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function Signout(){
        signOut(auth)
        .then(()=>{
            alert('logout')
        }).then((err)=>{
            console.log(err)
        })
    }

    const Provider = new GoogleAuthProvider()
    return (
        <>

            {
                user ?
                    <div>
                        <h3>Hello ,{user.displayName}</h3>
                        <p>{user.email}</p>
                        <img
                        src={user.photoURL}
                        alt="User Profile"
                    />
                        <button className="btn btn-danger" onClick={Signout}>SignOut</button>
                    </div>
                    :
                    <div>
                        <button className="btn btn-danger" onClick={googlelogin}>Login With Google</button>
                    </div>
            }

        </>
    )
}

export default PerfectGoogle
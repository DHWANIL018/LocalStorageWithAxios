// Shree Ganeshay namah 
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth"
import auth from "./Firebase"
function WithGoogle(){

    function googleAuth(){
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        .then((res)=>{
            const result = GoogleAuthProvider.credentialFromResult(res)
            console.log(result)
            console.log(result.accessToken)
            console.log(res.user)  
        })
        .catch((err)=>{
            console.log(err)
            console.log(err.message)
        })
    }

    return(
        <>

        <div>
            <button onClick={googleAuth}>signin with google</button>
        </div>

        </>
    )
}

export default WithGoogle
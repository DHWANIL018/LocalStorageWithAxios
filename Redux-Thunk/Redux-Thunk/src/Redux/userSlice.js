        // Shree Ganeshay namah 
        import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
        import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
        import dbFireStore from "./FireStore";
        const initialState ={
            userlist : [],
        }


        export  const addUser = createAsyncThunk('user/Adduser',async (data)=>{
            
            const res = await addDoc(collection(dbFireStore, 'users'), data);
            console.log(res)

            return data
        })
        export  const viewUser = createAsyncThunk('user/Viewuser',async (data)=>{
            // const res = await getDocs(collection,(dbFireStore,'users'))
            // console.log(res)
            // return res


            const res = await getDocs(collection(dbFireStore, 'users'));
                
            // Check if res has documents
            const users = res.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            console.log("Fetched users:", users); // Step 2: Confirm data is fetched and mapped
            return users;
        })
        export const delteUser = createAsyncThunk('user/Deleteuser',async(id)=>{
            await deleteDoc(doc(dbFireStore,'users',id))
            return id
        })

        export const updateUser = createAsyncThunk('user/Updateuser',async(data)=>{
            const { id } = data 
            await setDoc(doc(dbFireStore, 'users', id), data);

            return data
        })
        const userslice = createSlice({
            name:"user",
            initialState,
            reducers:{},
            extraReducers:(builder)=>{
                builder
                .addCase(addUser.fulfilled,(state,action)=>{
                    state.userlist.push(action.payload);
                    
                    // console.log(state)
                })
                .addCase(viewUser.fulfilled,(state,action)=>{
                    console.log(action.payload)
                    state.userlist = action.payload
                })
                .addCase(delteUser.fulfilled,(state,action)=>{
                    // console.log(action)
                    // console.log(action.payload)

                    const id = action.payload
                    console.log(id)

                    const filterData = state.userlist.filter((user)=>{
                        return user.id !== id
                    })

                    state.userlist = filterData
                })
                .addCase(updateUser.fulfilled,(state,action)=>{
                    const { id } = action.payload

                    const indexNumber = state.userlist.findIndex((user)=>{
                        return user.id == id
                    }) 

                    if(indexNumber != -1){
                        console.log(state.userlist[indexNumber] )
                        console.log(action.payload)
                        state.userlist[indexNumber] = action.payload
                    }

                    // console.log(indexNumber)
                })
            }
        })

        export default userslice.reducer

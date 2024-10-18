import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom'
import Header from './assets/Header'
import Home from './assets/Home'
import Form from './assets/Form'
import ViewData from './assets/Pages/ViewData'
import SingleUser from './assets/CRUD-Operation/SingleUser'

// CRUD 
import Axios from './assets/CRUD-Operation/axios'



function App() {
  const [count, setCount] = useState()

  return (
    <>
      <Routers>
        <Header/> 
          <Routes>
            <Route path='/Main' element={<Header/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Form' element={<Form/>}/>                                 
            <Route path='/ViewData' element={<ViewData/>}/>
            <Route path='/Axios' element={<Axios/>}/>
            <Route path='/SingleUser/:id' element={<SingleUser/>}/>
          </Routes>
      </Routers>
    </>
      
  )
}

export default App

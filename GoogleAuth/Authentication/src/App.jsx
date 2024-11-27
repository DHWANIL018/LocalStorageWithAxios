import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './Auth/SignUp'
import Header from './Pages/Header'
import Signin from './auth/Signin'
import WithGoogle from './Auth/WithGoogle'
import PerfectGoogle from './Auth/PerfectGoogle'
function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/WithGoogle' element={<WithGoogle/>}></Route>
        <Route path='/PerfectGoogle' element={<PerfectGoogle/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
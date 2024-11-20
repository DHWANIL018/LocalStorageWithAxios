import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Layout/Header'
import Form from './Pages/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import View from './Pages/View'
import Update from './Pages/Update'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/Form' element={<Form/>}></Route>
            <Route path='/View' element={<View/>}></Route>
            <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

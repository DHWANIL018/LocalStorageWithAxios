import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Create from './realtime/CrudOP/Create'
import Header from './assets/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SingleUSer from './realtime/CrudOP/SingleUser'
import Update from './realtime/CrudOP/Update'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/SingleUser/:id' element={<SingleUSer/>}></Route>
          <Route path='/Update/:id' element={<Update/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

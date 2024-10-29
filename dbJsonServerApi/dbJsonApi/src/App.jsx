import Header from './assets/Pages/Header'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Form from './assets/Pages/Form'
import UserApi from './assets/Pages/UserApi'
import DeleteApi from './assets/Pages/DeleteApi'
import SingleUser from './assets/Pages/SingleUser'
import UpdateApi from './assets/Pages/UpdateApi'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/Form' element={<Form/>}></Route>
        <Route path='/UserApi' element={<UserApi/>}></Route>
        <Route path='/DeleteApi' element={<DeleteApi/>}></Route>
        <Route path='/singleuser/:id' element={<SingleUser/>}></Route>
        <Route path='/updateForm/:id' element={<UpdateApi/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

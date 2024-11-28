import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Routers, Routes, Route  } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import UserForm from './pages/UserForm';
import SingleUser from './pages/SingleUser';
import UserList from './pages/UserList';
import Update from './pages/Update';

const App=()=>{
return(
  <>
<Routers>
  <Header/>
  <Routes>
    <Route path='/' element={<UserForm/>}></Route>
    <Route path= '/userList'element={<UserList/>}></Route>
    <Route path='User/:id' element={<SingleUser/>}></Route>
  <Route path='update/:id' element={<Update/>}></Route>
  </Routes>
  <Footer/>
</Routers>
  </>
)
}
export default App
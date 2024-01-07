import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import Foods from '../components/Foods'
import Detail from '../components/Detail'
import Nav from '../components/Nav'
import SignUp from '../components/Sign-up'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import CartComponent from '../components/CartComponent'
import Profile from '../components/Profile'
import Contact from '../components/Contact'
const App = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  })
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/foods' element={<Foods/>}></Route>
        <Route path='/foods/:name' element={<Detail/>} ></Route>
        <Route path='/user/signup' element={<SignUp/>}></Route>
        <Route path='/cart' element={<CartComponent/>}></Route>
        <Route path='/user/profile' element={<Profile/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
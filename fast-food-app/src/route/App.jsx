import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import Foods from '../components/Foods'
import Detail from '../components/Detail'
import Nav from '../components/Nav'
import SignUp from '../components/Sign-up'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import CartComponent from '../components/CartComponent'
import Profile from '../components/Profile'
import Contact from '../components/Contact'
import MobileNav from '../components/MobileNav'
const App = () => {
  const [body, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    AOS.init({duration:1000})
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  })

  return (
    <>
    <BrowserRouter>
    {body>=740?<Nav/>:<MobileNav/>}
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
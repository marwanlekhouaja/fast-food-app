import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from '../components/Home'
import React, { useEffect, useState,Suspense } from 'react'
const Home=React.lazy(()=>import('../components/Home'))
const Foods=React.lazy(()=>import('../components/Foods'))
const Detail=React.lazy(()=>import('../components/Detail'))
const Nav=React.lazy(()=>import('../components/Nav'))
const SignUp=React.lazy(()=>import('../components/Sign-up'))
const CartComponent=React.lazy(()=>import('../components/CartComponent'))

const Profile=React.lazy(()=>import('../components/Profile'))
const Contact=React.lazy(()=>import('../components/Contact'))
const MobileNav=React.lazy(()=>import('../components/MobileNav'))
// const Subscribe=React.lazy(()=>{import('../components/Subscribe')})
import Subscribe from '../components/Subscribe'
const Notfound=React.lazy(()=>import('../components/Notfound'))
import { Audio} from 'react-loader-spinner'


import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


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
  
  const loader=<div style={{height:'100dvh',display:'flex',justifyContent:'center',alignItems:'center'}}><Audio ight="80" width="80"  radius="9" color="red" ariaLabel="loading" wrapperStyle wrapperClass /></div>
  return (
    <div style={{overflow:'hidden'}}>
    <BrowserRouter>
    {body>=740?<Nav/>:<MobileNav/>}
    <Routes>
        <Route path='/' element={<Suspense fallback={loader}><Home/></Suspense>}></Route>
        <Route path='/foods' element={<Suspense fallback={loader}><Foods/></Suspense>}></Route>
        <Route path='/foods/:name' element={<Suspense fallback={loader}><Detail/></Suspense>} ></Route>
        <Route path='/user/signup' element={<Suspense fallback={loader}><SignUp/></Suspense>}></Route>
        <Route path='/cart' element={<Suspense fallback={loader}><CartComponent/></Suspense>}></Route>
        <Route path='/user/profile' element={<Suspense fallback={loader}><Profile/></Suspense>}></Route>
        <Route path='/contact' element={<Suspense fallback={loader}><Contact/></Suspense>}></Route>
        <Route path='/user/subscribe' element={<Subscribe/>}></Route>
        <Route path='*' element={<Suspense fallback={loader}><Notfound/></Suspense>} ></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
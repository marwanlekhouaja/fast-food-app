import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import Foods from '../components/Foods'
import Detail from '../components/Detail'
import Nav from '../components/Nav'
import SignUp from '../components/Sign-up'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/foods' element={<Foods/>}></Route>
        <Route path='/foods/:name' element={<Detail/>} ></Route>
        <Route path='/user/signup' element={<SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
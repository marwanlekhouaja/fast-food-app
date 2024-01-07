import { useRef } from 'react';
import styling from '../style/signup.module.css'
import { useDispatch,  } from 'react-redux';
import { createAccount } from '../stateMangement/slice';
function SignUp() {
  const refFullname=useRef()
  const refEmail=useRef()
  const refPassword=useRef()
  const refPhone=useRef()  
  
  
  const currentDate = new Date();

// Get individual date components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Note: months are zero-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();


  const dispatch=useDispatch()
  const saveData=()=>{
    const data={
        fullname:refFullname.current.value,
        email:refEmail.current.value,
        password:refPassword.current.value,
        number:refPhone.current.value,
        id:Date.now(),
        date:<div>{year} / {month} / {day} : {hours} : {minutes} : {seconds}</div>
    }
    dispatch(createAccount(data))
    window.history.back()
  }

  return (
    <div  className={`${styling.body}`}>
      <h1 data-aos='fade-left' className={`${styling.title}`}>Sign up in marwan food </h1>
      <form action="" data-aos='fade-up' className="rounded bg-light shadow d-flex flex-column justify-content-center w-50 p-2">
        <span className='ms-2 mb-1'>Fullname</span>
        <input ref={refFullname} className={`${styling.input}`} placeholder='type your fullname here !' type="text" />
        <span  className='ms-2 mb-1'>Email</span>
        <input ref={refEmail} className={`${styling.input}`} placeholder='type your email here !' type="email" />
        <span  className='ms-2 mb-1'>Mobile Phone</span>
        <input ref={refPhone} className={`${styling.input}`} placeholder='type your number here !' type="tel" />
        <span  className='ms-2 mb-1'>Password</span>
        <input ref={refPassword} className={`${styling.input}`} placeholder='create a password and type here !' type="text" />
        <input type="button" className={`${styling.button} btn btn-danger`} onClick={saveData} value="create Account" />
      </form>
    </div>
  );
}

export default SignUp;

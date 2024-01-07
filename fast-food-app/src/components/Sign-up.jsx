import { useRef } from 'react';
import styling from '../style/signup.module.css'
function SignUp() {
  const refFullname=useRef()
  const refEmail=useRef()
  const refPassword=useRef()
  const refPhone=useRef()  
  return (
    <div className={`${styling.body}`}>
      <h1 className={`${styling.title}`}>Sign up in marwan food </h1>
      <form action="" className="rounded bg-light shadow d-flex flex-column justify-content-center w-50 p-2">
        <span className='ms-2 mb-1'>Fullname</span>
        <input ref={refFullname} className={`${styling.input}`} placeholder='type your fullname here !' type="text" />
        <span  className='ms-2 mb-1'>Email</span>
        <input ref={refEmail} className={`${styling.input}`} placeholder='type your email here !' type="email" />
        <span  className='ms-2 mb-1'>Mobile Phone</span>
        <input ref={refPhone} className={`${styling.input}`} placeholder='type your number here !' type="tel" />
        <span  className='ms-2 mb-1'>Password</span>
        <input ref={refPassword} className={`${styling.input}`} placeholder='create a password and type here !' type="text" />
        <input type="button" className={`${styling.button} btn btn-danger`} value="create Account" />
      </form>
    </div>
  );
}

export default SignUp;

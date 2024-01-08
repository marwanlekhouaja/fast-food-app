import { useEffect, useRef, useState } from "react";
import styling from "../style/signup.module.css";
import { useDispatch } from "react-redux";
import { createAccount } from "../stateMangement/slice";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const refFullname = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  const refPhone = useRef();
  const navigate = useNavigate();

  const currentDate = new Date();

  // Get individual date components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Note: months are zero-based, so add 1
  const day = currentDate.getDate();

  const [body, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const dispatch = useDispatch();
  const saveData = () => {
    const data = {
      fullname: refFullname.current.value,
      email: refEmail.current.value,
      password: refPassword.current.value,
      number: refPhone.current.value,
      id: Date.now(),
      date: (
        <div>
          {year} year / {month} month / {day} day
        </div>
      ),
    };
    dispatch(createAccount(data));
    navigate("/user/profile");
  };

  return (
    <div className={`${styling.body}`}>
      <h1 data-aos="fade-left" className={`${styling.title}`}>
        Create Account in marwan food{" "}
      </h1>
      <form
        action=""
        data-aos="fade-up"
        className={`rounded bg-light shadow d-flex flex-column justify-content-center ${body>750?'w-50':'w-75'} p-2`}
      >
        <span className="ms-2 mb-1">Fullname</span>
        <input
          ref={refFullname}
          className={`${styling.input}`}
          placeholder="type your fullname here !"
          type="text"
        />
        <span className="ms-2 mb-1">Email</span>
        <input
          ref={refEmail}
          className={`${styling.input}`}
          placeholder="type your email here !"
          type="email"
        />
        <span className="ms-2 mb-1">Mobile Phone</span>
        <input
          ref={refPhone}
          className={`${styling.input}`}
          placeholder="type your number here !"
          type="tel"
        />
        <span className="ms-2 mb-1">Password</span>
        <input
          ref={refPassword}
          className={`${styling.input}`}
          placeholder="create a password and type here !"
          type="text"
        />
        <input
          type="button"
          className={`${styling.button} btn btn-danger`}
          onClick={saveData}
          value="create Account"
        />
      </form>
    </div>
  );
}

export default SignUp;

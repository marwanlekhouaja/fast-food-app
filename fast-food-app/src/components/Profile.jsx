import { useDispatch, useSelector } from "react-redux";
import styling from "../style/profile.module.css";
import EditProfile from "./EditProfile";
import { deleteAccount } from "../stateMangement/slice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Profile = () => {
  const datauser = useSelector((state) => state.actionsApp.user);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const alert=useSelector(state=>state.actionsApp.showAlert)

  // get data from form  by using ref
 
  const removeAccount = (id) => {
    const confirm = window.confirm(
      "do you realy want to delete your account !"
    );
    if (confirm) {
      dispatch(deleteAccount(id));
      navigate('/user/signup')

    }
  };
  const [hide,setHide]=useState(false)
  useEffect(() => {
    if (hide) {
      const timeout = setTimeout(() => {
        setHide(false);
      }, 5000); // Adjust the timeout value as needed

      return () => clearTimeout(timeout);
    }
  }, [hide]);
  const hideMessage=()=>{
    setHide(true)
  } 
  return (
    <>
      <h1 className="text-center">Profile</h1>
     
      <div data-aos='fade-up' className=" shadow  p-2 card w-50 d-flex flex-column justify-content-center m-auto ">
        {datauser.map((user) => (
          <div key={user.id}>
            {alert&&<div style={{opacity:hide?'none':'flex'}} className="alert alert-success d-flex justify-content-between">your informations has been update succefully ! <button onClick={hideMessage} className="btn btn-close"></button></div>}
            <h2 className="text-center">Hi {user.fullname}</h2>
            <p className="rounded alert alert-light ">Your informations</p>
            <div className={`card p-2 bg-light  ${styling.info}`}>
              <h4 className="card d-flex flex-row p-2 fs-5">
                <span className="text-danger">Email</span> : {user.email}
              </h4>
              <h4 className="card d-flex flex-row p-2 fs-5">
                <span className="text-danger">number phone</span> 
                {user.number}
              </h4>
              <h4 className="fs-5 d-flex card flex-row p-2 justify-content-between">
                <span className="text-danger">date of create your account</span>
                : {user.date}
              </h4>
              <div className="actions  d-flex mt-3">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  className="btn btn-success me-3 "
                >
                  edit profile
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeAccount(user.id)}
                >
                  delete Account
                </button>
              </div>
            </div>
          </div>
        ))}
        <EditProfile />
      </div>
    </>
  );
};

export default Profile;

import { useDispatch, useSelector } from "react-redux";
import styling from "../style/profile.module.css";
import EditProfile from "./EditProfile";
import { deleteAccount } from "../stateMangement/slice";
import { Link, useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";
const Profile = () => {
  const datauser = useSelector((state) => state.actionsApp.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alert = useSelector((state) => state.actionsApp.showAlert);

  // get data from form  by using ref

  const removeAccount = (id) => {
    const confirm = window.confirm(
      "do you realy want to delete your account !"
    );
    if (confirm) {
      dispatch(deleteAccount(id));
      navigate("/user/signup");
    }
  };
  const [hide, setHide] = useState(false);
  
  useEffect(()=>{
    alert?setHide(false):setHide(true)  
  },[alert])
  const hideMessage = () => {
    setHide(true);
  };
  return (
    <div className="mt-5">
      {datauser.length ? (
        datauser.map((user) => (
          <div
            data-aos="fade-up"
            key={user.id}
            className=" shadow  p-2 card w-50 d-flex flex-column justify-content-center m-auto "
          >
            {alert && (
                <div
                  className={`alert alert-success text-center ${hide?'d-none':'d-flex'} justify-content-between`}
                >
                  your informations has been update succefully !
                  <button
                    onClick={hideMessage}
                    className="btn btn-close"
                  ></button>
                </div>
              )}
            <div>
              
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
                  <span className="text-danger">
                    date of create your account
                  </span>
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
          </div>
        ))
      ) : (
        <span className={`${styling.notfound}`}>User not found ! <br /> <span>404</span><Link to='/' className="btn btn-primary">back to the home page</Link></span>
      )}

      <EditProfile />
    </div>
  );
};

export default Profile;

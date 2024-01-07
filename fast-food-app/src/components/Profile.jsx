import { useSelector } from "react-redux";
import styling from "../style/profile.module.css";
import EditProfile from "./EditProfile";
const Profile = () => {
  const datauser = useSelector((state) => state.actionsApp.user);

  console.log(datauser);
  return (
    <>
      <h1 className="text-center">Profile</h1>
      <div className=" shadow  p-2 card w-50 d-flex flex-column justify-content-center m-auto ">
        {datauser.map((user) => (
          <div key={user.id}>
            <h2 className="text-center">Hi {user.fullname}</h2>
            <p className="rounded alert alert-light ">Your informations</p>
            <div className={`card p-2 bg-light  ${styling.info}`}>
              <h4 className="card d-flex flex-row p-2">
                <span className="text-danger">Email</span> : {user.email}
              </h4>
              <h4 className="card d-flex flex-row p-2">
                <span className="text-danger">number phone</span> :{" "}
                {user.number}
              </h4>
              <h4 className="d-flex card flex-row p-2 justify-content-between">
                <span className="text-danger">date of create your account</span>{" "}
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
                <button className="btn btn-danger">delete Account</button>
              </div>
            </div>
          </div>
        ))}
        <EditProfile/>
      </div>
    </>
  );
};

export default Profile;

import "bootstrap/dist/js/bootstrap";
import { useRef } from "react";
import styling from "../style/signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../stateMangement/slice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const refFullname = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  const refPhone = useRef();

  const datauser = useSelector((state) => state.actionsApp.user);

  // action to update the data of the user
  const saveEdit = (id) => {
    const data={
      id:id,
      fullname:refFullname.current.value,
      email:refEmail.current.value,
      password:refPassword.current.value,
      number:refPhone.current.value,
  }
    dispatch(updateUser(data));
  };
  
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {datauser.map((user) => (
                <form
                  data-aos="fade-up"
                  key={user.id}
                  className="rounded d-flex flex-column justify-content-center"
                >
                  <span className="ms-2 mb-1">Fullname</span>
                  <input
                    ref={refFullname}
                    defaultValue={user.fullname}
                    className={`${styling.input}`}
                    placeholder="type your fullname here !"
                    type="text"
                  />
                  <span className="ms-2 mb-1">Email</span>
                  <input
                    ref={refEmail}
                    defaultValue={user.email}
                    className={`${styling.input}`}
                    placeholder="type your email here !"
                    type="email"
                  />
                  <span className="ms-2 mb-1">Mobile Phone</span>
                  <input
                    ref={refPhone}
                    defaultValue={user.number}
                    className={`${styling.input}`}
                    placeholder="type your number here !"
                    type="tel"
                  />
                  <span className="ms-2 mb-1">Password</span>
                  <input
                    ref={refPassword}
                    defaultValue={user.password}
                    className={`${styling.input}`}
                    placeholder="create a password and type here !"
                    type="text"
                  />
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={()=>saveEdit(user.id)}
                      data-bs-dismiss="modal"
                      className="btn btn-success ms-3"
                    >
                      save
                    </button>
                  </div>
                </form>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

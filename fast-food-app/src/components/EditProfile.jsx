import "bootstrap/dist/js/bootstrap";
import { useRef } from "react";
import styling from "../style/signup.module.css";

const EditProfile = () => {
  const refFullname = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  const refPhone = useRef();
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
              <form
                action=""
                data-aos="fade-up"
                className="rounded d-flex flex-column justify-content-center"
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
                
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                save 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

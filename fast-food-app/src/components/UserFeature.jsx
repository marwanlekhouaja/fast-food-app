import { IoMdPerson } from "react-icons/io";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import {  useState } from "react";
import { Link } from "react-router-dom";


const UserFeature = () => {
  const [show, setShow] = useState(false);
 

  
  const showMenu = () => {
    setShow(!show);
  };


  
  return (
    <>
      <span onClick={showMenu}>
        <IoMdPerson />
      </span>

      <div
      style={{position:'absolute',textAlign:'left',fontSize:'14px',opacity:show?'1':'0',top:'100%',right:'20%',gap:'0.5rem',backgroundColor:'#eee',width:'110px'}} className="menuList shadow p-2 rounded d-flex flex-column">
        <Link to='/user/profile' className="text-decoration-none ">Profile</Link>
        <a href="" className="text-decoration-none">log out</a>
      </div>
    </>
  );
};

export default UserFeature;

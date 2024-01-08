import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styling from "../style/nav.module.css";
import { IoMenu } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { useSelector } from "react-redux";
import UserFeature from "./UserFeature";
const MobileNav = () => {
  const [listLinks, setListLinks] = useState([
    { id: 1, name: "Home", active: true, path: "/" },
    { id: 2, name: "Foods", active: false, path: "/foods" },
    { id: 3, name: "Cart", active: false, path: "/cart" },
    { id: 4, name: "Contact", active: false, path: "/contact" },
  ]);
  const userdata = useSelector((state) => state.actionsApp.user);
  const selector = useSelector((state) => state.actionsApp.cart);

  const styleLink = {
    textDecoration: "none",
    fontFamily: "arial",
    fontSize: "19px",
    margin: "6px",
  };
  const activeLink = (id) => {
    setListLinks((prev) =>
      prev.map((link) =>
        link.id === id ? { ...link, active: true } : { ...link, active: false }
      )
    );
  };
  return (
    <div>
      <button
        style={{backgroundColor:'#eee',borderRadius:'50%',display:'flex',alignItems:'center',border:'none',cursor:'pointer',fontSize:'33px',padding:'4px',position:'absolute',right:'2%',top:'2%'}}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight2"
        aria-controls="offcanvasRight"
      >
        <IoMenu />
      </button>

      <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight2"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" style={{height:'100dvh',display:'flex',justifyContent:'center',flexDirection:'column'}}>
          {listLinks.map((link) => (
            <div key={link.id} style={{display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center'}}>
              <NavLink
                style={styleLink}
                className={`${link.active && styling.active} me-4`}
                to={link.path}
                onClick={() => activeLink(link.id)}
              >
                {link.name}
              </NavLink>
            
            </div>
                       
          ))}
            <div className="fs-3" style={{ position: "relative", display: "flex",flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}>
          <Link
            className="me-2 "
            style={{ cursor: "pointer" }}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <FaCartShopping />
          </Link>
          <span
            style={{
              width: "20px",
              height: "20px",
              fontSize: "15px",
              borderRadius: "50%",
              backgroundColor: "red",
              padding: "2px",
              position: "absolute",
              left:'50%',
              top: "5%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selector.length}
          </span>
          {userdata.length == 0 ? (
            <Link
              to="/user/signup"
              style={{ cursor: "pointer",marginRight:'6px'}} >
              <IoMdPerson />
            </Link>
          ) : (
            <span style={{ cursor: "pointer", marginLeft: "10px" }}><UserFeature/></span>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

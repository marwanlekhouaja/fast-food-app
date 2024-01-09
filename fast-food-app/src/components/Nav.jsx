import "bootstrap/dist/css/bootstrap.css";
import { FaCartShopping } from "react-icons/fa6";
import React from "react";
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styling from "../style/nav.module.css";
const Cart =React.lazy(()=>import("./Cart"))
import { useSelector } from "react-redux";
import UserFeature from "./UserFeature";
import "bootstrap/dist/js/bootstrap";
function Nav() {
  const styleImg = { width: "50px", height: "50px" };
  const selector = useSelector((state) => state.actionsApp.cart);
  const userdata = useSelector((state) => state.actionsApp.user);
  const [listLinks, setListLinks] = useState([
    { id: 1, name: "Home", active: true, path: "/" },
    { id: 2, name: "Foods", active: false, path: "/foods" },
    { id: 3, name: "Cart", active: false, path: "/cart" },
    { id: 4, name: "Contact", active: false, path: "/contact" },
  ]);

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
      <nav className={`d-flex p-2 align-items-center shadow justify-content-between ${styling.nav} `}>
        <div className="logo d-flex align-items-center">
          <img
            style={styleImg}
            src="https://food-delivery-ecommerce-app.netlify.app/static/media/res-logo.2f9021c4.png"
            alt=""
          />
          <h4 className="ms-1 mt-2" style={{fontFamily:'monospace'}}>marwan food</h4>
          
        </div>
        <div className="links d-flex">
          {listLinks.map((link) => (
            <div key={link.id}>
              <NavLink
                style={styleLink}
                className={`${link.active&&styling.active} me-4`}
                to={link.path}
                onClick={() => activeLink(link.id)}
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="fs-3" style={{ position: "relative", display: "flex" }}>
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
              right: "52%",
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
              style={{ cursor: "pointer", marginLeft: "10px" }} >
              <IoMdPerson />
            </Link>
          ) : (
            <span style={{ cursor: "pointer", marginLeft: "10px" }}><UserFeature/></span>
          )}
        </div>
      </nav>
      <Cart/>
    </div>
  );
}

export default Nav;

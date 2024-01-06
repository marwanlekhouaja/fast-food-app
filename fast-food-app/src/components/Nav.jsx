import "bootstrap/dist/css/bootstrap.css";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styling from "../style/nav.module.css";
function Nav() {
  const styleImg = { width: "50px", height: "50px" };
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
      <nav className="d-flex p-2 align-items-center shadow justify-content-between">
        <div className="logo d-flex align-items-center">
          <img
            style={styleImg}
            src="https://food-delivery-ecommerce-app.netlify.app/static/media/res-logo.2f9021c4.png"
            alt=""
          />
          <h3>marwan</h3>
        </div>
        <div className="links d-flex">
          {listLinks.map((link) => (
            <div key={link.id}>
              <NavLink
                style={styleLink}
                className={`${styling}`}
                href={"/test"}
                onClick={() => activeLink(link.id)}
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="fs-3">
          <span
            className="me-2"
            style={{ cursor: "pointer" }}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <FaCartShopping />
          </span>
          <span style={{ cursor: "pointer" }}>
            <IoMdPerson />
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

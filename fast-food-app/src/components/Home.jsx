import styling from "../style/home.module.css";
import { Link } from "react-router-dom";
import React from "react";
import Service from "./HomeComponents/Service";
import Footer from "./Footer";
const Why=React.lazy(()=>import("./HomeComponents/Why"))
const PopularFood=React.lazy(()=>import("./PopularFood"))
const Home = () => {
  return (
    <>
      <div data-aos='fade-up' className="row d-flex justify-content-around mt-4 align-items-center">
        <div className="content col-sm-10 col-md-5 text-center mt-5 pt-4">
          <h5 className={styling.h5}>Easy way to make an order</h5>
          <h1 className={`${styling.title}`}>
            <span className="text-danger text-center">HUNGRY?</span> Just wait <br /> food
            at your door
          </h1>
          <div>
            <Link to="/foods" className="btn btn-outline-danger">
              see all foods
            </Link>
          </div>
        </div>
        <div className="col-sm-10 col-md-5 d-flex align-items-center justify-content-center">
          <img className={`${styling.img}`} src="firstimg.png" alt="" />
        </div>
      </div>

      <PopularFood/>
      <Service/>
      <Why/>
      <Footer/>
     
      
    </>
  );
};

export default Home;

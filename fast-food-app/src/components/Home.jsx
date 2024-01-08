import styling from "../style/home.module.css";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { PiBowlFoodBold } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
import Why from "./Why";
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

      <div style={{flexWrap:'wrap'}} data-aos='fade-left' className="types d-flex align-items-center justify-content-evenly m-auto">
        <div className={`${styling.container} p-3 m-2 d-flex align-items-center rounded shadow`}>
          <div className={`${styling.icon} p-3 fs-3 rounded-pill bg-danger`}>
            <FaHamburger />
          </div>
          <span className="ms-3 fs-5">Fastfood</span>
        </div>
        <div className={`${styling.container} p-3 m-2 d-flex align-items-center rounded shadow`}>
          <div className={`${styling.icon} p-3 fs-3 rounded-pill bg-danger`}>
            <FaPizzaSlice />
          </div>
          <span className="ms-3 fs-5">Pizza</span>
        </div>
        <div className={`${styling.container} p-3 m-2 d-flex align-items-center rounded shadow`}>
          <div className={`${styling.icon} p-3 fs-3 rounded-pill bg-danger`}>
            <PiBowlFoodBold />
          </div>
          <span className="ms-3 fs-5">Asian food</span>
        </div>
        <div className={`${styling.container} p-3 m-2 d-flex align-items-center rounded shadow`}>
          <div className={`${styling.icon} p-3 fs-3 rounded-pill bg-danger `}>
            <TbMeat />
          </div>
          <span className="ms-3 fs-5">Row Meat</span>
        </div>
      </div>

      <Why/>
      
    </>
  );
};

export default Home;

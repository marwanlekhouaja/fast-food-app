import styling from "../style/home.module.css";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { PiBowlFoodBold } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
const Home = () => {
  return (
    <>
      <div data-aos='fade-up' className="d-flex justify-content-around mt-4 align-items-center">
        <div className="content">
          <h5 className={styling.h5}>Easy way to make an order</h5>
          <h1 className={`${styling.title}`}>
            <span className="text-danger">HUNGRY?</span> Just wait <br /> food
            at your door
          </h1>
          <div>
            <Link to="/foods" className="btn btn-outline-danger">
              see all foods
            </Link>
          </div>
        </div>
        <div>
          <img className={`${styling.img}`} src="firstimg.png" alt="" />
        </div>
      </div>

      <div data-aos='fade-left' className="types d-flex align-items-center justify-content-evenly">
        <div className={`${styling.container} p-4 d-flex align-items-center rounded shadow`}>
          <div className={`${styling.icon} p-3 fs-3 rounded-pill bg-danger`}>
            <FaHamburger />
          </div>
          <span className="ms-3 fs-3">Fastfood</span>
        </div>
        <div className={`${styling.container} p-3 d-flex align-items-center rounded shadow`}>
          <div className={`${styling.icon} p-3 fs-3 rounded-pill bg-danger`}>
            <FaPizzaSlice />
          </div>
          <span className="ms-3 fs-3">Pizza</span>
        </div>
        <div className={`${styling.container} p-3 d-flex align-items-center rounded shadow`}>
          <div className={`${styling.icon} p-3 fs-3 rounded-pill bg-danger`}>
            <PiBowlFoodBold />
          </div>
          <span className="ms-3 fs-3">Asian food</span>
        </div>
        <div className={`${styling.container} p-3 d-flex align-items-center rounded shadow`}>
          <div className={`${styling.icon} p-3 fs-3 rounded-pill bg-danger `}>
            <TbMeat />
          </div>
          <span className="ms-3 fs-3">Row Meat</span>
        </div>
      </div>
      
    </>
  );
};

export default Home;

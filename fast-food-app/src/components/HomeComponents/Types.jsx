import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { PiBowlFoodBold } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
const Types = (styleIcon,styleContainer) => {
  return (
    <>
      <div
        style={{ flexWrap: "wrap" }}
        data-aos="fade-left"
        className="types d-flex align-items-center justify-content-evenly m-auto"
      >
        <div
          className={`${styleContainer} p-3 m-2 d-flex align-items-center rounded shadow`}
        >
          <div className={`${styleIcon} p-3 fs-3 rounded-pill bg-danger`}>
            <FaHamburger />
          </div>
          <span className="ms-3 fs-5">Fastfood</span>
        </div>
        <div
          className={`${styleContainer} p-3 m-2 d-flex align-items-center rounded shadow`}
        >
          <div className={`${styleIcon} p-3 fs-3 rounded-pill bg-danger`}>
            <FaPizzaSlice />
          </div>
          <span className="ms-3 fs-5">Pizza</span>
        </div>
        <div
          className={`${styleContainer} p-3 m-2 d-flex align-items-center rounded shadow`}
        >
          <div className={`${styleIcon} p-3 fs-3 rounded-pill bg-danger`}>
            <PiBowlFoodBold />
          </div>
          <span className="ms-3 fs-5">Asian food</span>
        </div>
        <div
          className={`${styleContainer} p-3 m-2 d-flex align-items-center rounded shadow`}
        >
          <div className={`${styleIcon} p-3 fs-3 rounded-pill bg-danger `}>
            <TbMeat />
          </div>
          <span className="ms-3 fs-5">Row Meat</span>
        </div>
      </div>
    </>
  );
};

export default Types;

import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { PiBowlFoodBold } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
const Types = (styleIcon,styleContainer) => {
  const typesList=[
    {id:1,name:'Fastfood',icon:<FaHamburger />},
    {id:2,name:'Pizza',icon:<FaPizzaSlice />},
    {id:3,name:'Asian food',icon:<PiBowlFoodBold />},
    {id:4,name:'Row Meat',icon: <TbMeat />}
  ]
  return (
    <>
      <div
        style={{ flexWrap: "wrap" }}
        data-aos="fade-left"
        className="types d-flex align-items-center justify-content-evenly m-auto"
      >
        {typesList.map((type)=>(
          <div key={type.id} className={`${styleContainer} p-3 m-2 d-flex align-items-center rounded shadow`}>
            <div className={`${styleIcon} p-3 fs-3 rounded-pill bg-danger`}>
              {type.icon}
            </div>
            <span className="ms-3 fs-5">{type.name}</span>
          </div>
        ))}
       </div>
    </>
  );
};

export default Types;

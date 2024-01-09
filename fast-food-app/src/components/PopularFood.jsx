import { products } from "../assets/fake-data/products";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import {addtocart} from '../stateMangement/slice'
import { useEffect, useState } from "react";
const PopularFood = () => {
  const styleImg = { width: "150px", height: "150px" };
  const dispatch=useDispatch()
  const addToCart=(product)=>{
    dispatch(addtocart(product))
  }
  const [body, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  })
  return (
    <div
      style={{ flexWrap: "wrap" }}
      className="d-flex mt-5 p-4 align-items-center m-auto justify-content-around"
    >
      {products.slice(0, 3).map((product) => (
        <div
         data-aos='fade-left'
         key={product.id} 
         className={`${body<600?'w-100':'w-25'} card m-2 d-flex flex-column justify-content-center`}>
          <Link className="justify-content-center align-items-center d-flex " to={`/foods/${product.title}`}>
            <img
              className="p-3"
              src={product.image01}
              style={styleImg}
              alt=""
            />
          </Link>
          <h5 className="p-3 text-center m-auto " style={{fontFamily:'monospace',fontSize:'1rem'}}>{product.title}</h5>
          <div className="d-flex justify-content-around mt-2 fs-3">
            <p className="text-start">{product.price} $</p>
            <span style={{cursor:'pointer'}} onClick={()=>addToCart(product)} className="mb-3"><FaCartPlus /></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularFood;

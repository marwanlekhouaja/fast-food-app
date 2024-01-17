import { products } from "../assets/fake-data/products";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import {addtocart} from '../stateMangement/slice'
import { useEffect, useState } from "react";
import styling from "../style/foods.module.css";

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

    <>
    <h1 style={{fontFamily:'monospace'}} className="text-center mt-5  text-danger">Populer foods</h1>
    <div
      style={{ flexWrap: "wrap" }}
      className="d-flex mt-5 p-4 align-items-center m-auto justify-content-around"
    >
      {products.slice(0, 3).map((product) => (
        <div
         data-aos='fade-left'
         key={product.id} 
         className={`${body<600?'w-100':'w-25'} rounded m-2 d-flex flex-column shadow justify-content-center`}>
          <Link className="justify-content-center align-items-center d-flex " to={`/foods/${product.title}`}>
            <img
              className={`p-3 ${styling.productImg}`}
              src={product.image01}
              style={styleImg}
              alt=""
            />
          </Link>
          <h5 className="p-3 text-center m-auto " style={{fontFamily:'monospace',fontSize:'1rem'}}>{product.title}</h5>
          <div className="d-flex align-items-center justify-content-evenly mt-2 ">
            <div className="mb-3" style={{textDecoration:'line-through'}}>{product.old_price&&<span>{product.old_price} $</span>}</div>
            <p className="text-start">{product.price} $</p>
            <button className='btn btn-outline-danger mb-2 align-items-center d-flex' style={{cursor:'pointer'}} onClick={()=>addToCart(product)} ><span className="me-2">add to cart</span><FaCartPlus/></button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default PopularFood;

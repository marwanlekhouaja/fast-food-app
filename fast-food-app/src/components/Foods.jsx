import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../assets/fake-data/products";
import {useDispatch} from 'react-redux'
import Cart from "./Cart";
import addtocart from '../stateMangement/slice'
import styling from '../style/foods.module.css'
const Foods = () => {
  const [listProducts, setListProducts] = useState([]);
  const styleImg = { width: "100px", height: "100px" };
 
  const dispatch=useDispatch()

  useEffect(() => {
    const fetchData = () => {
      setListProducts(products);
    };
    fetchData();
  }, []);

  const addToCart=(product)=>{
    dispatch(addtocart(product))
  }
  return (
    <>
      <header style={{ position: "relative", overflow: "hidden" }}>
        <img
          style={{ height: "200px", width: "100%", backgroundSize: "cover" }}
          src="https://www.herofincorp.com/public/admin_assets/upload/blog/64b91a06ab1c8_food%20business%20ideas.webp"
          alt=""
        />
        <h1
          style={{
            position: "absolute",
            top: "30%",
            color: "white",
            left: "5%",
          }}
        >
          All foods
        </h1>
      </header>
      <section className="container position-relative mt-4">
        <div className="searchBar w-50 d-flex m-auto justify-content-center m-2 align-items-center">
          <input
            className="form-control"
            type="search"
            placeholder="i'm looking for ...."
            name=""
            id=""
          />
        </div>
        <div
          style={{ flexWrap: "wrap" }}
          className="mt-5 products d-flex align-items-center justify-content-around"
        >
          {listProducts.map((product) => (
            <div
              style={{ width: "250px" }}
              className="d-flex flex-column text-center m-2 p-3 card"
              key={product.id}
            >
              <div className="img align-items-center d-flex justify-content-center">
                <Link to={`/foods/${product.title}`}>
                  <img className={`${styling.productImg}`} style={styleImg} src={product.image01} alt="" />
                </Link>
              </div>
              <span className="m-2">{product.title}</span>
              <div className="d-flex align-items-center justify-content-between">
                <span className="text-start">{product.price} $</span>
                <button
                  className="btn btn-danger"
                  onClick={()=>addToCart(product)}
                >
                  Add To Cart
                </button>
                <Cart/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Foods;

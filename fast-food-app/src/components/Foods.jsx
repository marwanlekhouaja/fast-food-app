import React ,{ useEffect, useRef, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { products } from "../assets/fake-data/products";
import {useDispatch, useSelector} from 'react-redux'
import Cart from "./Cart";
import { addtocart, notificationToast } from "../stateMangement/slice";
import styling from '../style/foods.module.css'
const Category=React.lazy(()=>import("./Category"))
import { Audio } from 'react-loader-spinner'
import Toast from "./notification/Toast";
// import Toast from "./notification/Toast";

const Foods = () => {
  const [listProducts, setListProducts] = useState([]);
  const notification=useSelector(state=>state.actionsApp.showToast)
  const styleImg = { width: "100px", height: "100px" };
 
  const dispatch=useDispatch()
  

  useEffect(() => {
    const fetchData = () => {
      setListProducts(products);
    };
    fetchData();
  }, []);

  const addToCart=(product)=>{
    const data={...product,quantite:1,idOrder:Date.now()}
    dispatch(addtocart(data))
    dispatch(notificationToast(true))
  }

  const refSearch=useRef()
  const searchBar=()=>{
  const searchValue = refSearch.current.value.toLowerCase();

  // Check if the searchValue is empty
  if (searchValue.length === "") {
    // If empty, show all products
    setListProducts(products);
  } else {
    // If not empty, filter the products based on the searchValue
    const filterSearch = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
    setListProducts(filterSearch);
}

  }
  const loader=<div style={{height:'100dvh',display:'flex',justifyContent:'center',alignItems:'center'}}><Audio height="80" width="80"  radius="9" color="red" ariaLabel="loading" wrapperStyle wrapperClass /></div>

  return (
    <>
      <header style={{ position: "relative", overflow: "hidden" }}>
        <img
          style={{filter:'blur(2px)', height: "200px", width: "100%", backgroundSize: "cover" }}
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
        <Suspense fallback={loader}><Category/></Suspense>
        <div className="searchBar w-50 d-flex m-auto justify-content-center m-2 align-items-center">
          <input
            className="form-control"
            type="search"
            ref={refSearch}
            onChange={searchBar}
            placeholder="i'm looking for ...."
            name=""
            id=""
          />
        </div>
        <div
          style={{ flexWrap: "wrap" }}
          className="mt-5 products d-flex align-items-center justify-content-around"
        >
          {listProducts.length!==0? 
          listProducts.map((product) => (
            <div 
              data-aos='fade-up'
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
          )) : <span>no foods found !</span> }
        </div>
      </section>
      {notification&&<Toast/>}
    </>
  );
};

export default Foods;

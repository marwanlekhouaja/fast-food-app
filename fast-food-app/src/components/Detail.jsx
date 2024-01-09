import { Link, useParams } from "react-router-dom";
import { products } from "../assets/fake-data/products";
import styling from "../style/foods.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../stateMangement/slice";
import { motion } from "framer-motion";
function Detail() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [quantite, setQuantite] = useState(1);
  const refImg = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [body, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const increment = () => {
    setQuantite((prev) => prev + 1);
  };
  const decrement = () => {
    setQuantite((prev) => prev - 1);
    quantite <= 1 && setQuantite(1);
  };
  const changeImg = (src) => {
    setSelectedImage(src);
  };

  const addToCart = (product) => {
    const data = { ...product, quantite: quantite, idOrder: Date.now() };
    dispatch(addtocart(data));
  };

  // functiion that have the access of show the description of the product or food
  const [show, setShow] = useState(false);
  const showDesc = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="container m-auto d-flex justify-content-center">
        <Link to='/foods' className="btn btn-danger mt-5">← back to shop</Link>
      </div>
      <div
        className={`${
          body < 750 ? "d-flex flex-column " : "d-flex"
        } mt-5 justify-content-around align-items-center`}
      >
        <div>
          {products.map(
            (product) =>
              product.title == name && (
                <div
                  key={product.id}
                  className={`d-flex ${
                    body < 750 ? "flex-row" : "flex-column"
                  }`}
                >
                  <img
                    onClick={() => changeImg(product.image01)}
                    className={`${styling.smallImg}`}
                    src={product.image01}
                    alt=""
                  />
                  <img
                    onClick={() => changeImg(product.image02)}
                    className={`${styling.smallImg}`}
                    src={product.image02}
                    alt=""
                  />
                  <img
                    onClick={() => changeImg(product.image03)}
                    className={`${styling.smallImg}`}
                    src={product.image03}
                    alt=""
                  />
                </div>
              )
          )}
        </div>
        <div>
          {products.map(
            (product) =>
              product.title == name && (
                <div key={product.id} className="p-4 card">
                  <img
                    style={{ maxWidth: "300px", maxHeight: "300px" }}
                    ref={refImg}
                    src={selectedImage || product.image01}
                    className="test"
                    alt=""
                  />
                </div>
              )
          )}
        </div>
        <div className="d-flex justify-content-end">
          {products.map(
            (product) =>
              product.title == name && (
                <div
                  key={product.id}
                  className={`p-2 w-100 d-flex flex-column ${
                    body < 750 ? "m-auto" : ""
                  }`}
                >
                  <h2>{product.title}</h2>
                  <p className="text-danger mt-3 fs-4">
                    <span className="text-dark">Price</span> : {product.price} $
                  </p>
                  <h4 className="d-flex align-items-center">
                    Category :{" "}
                    <p className="mt-3 ms-3 bg-danger rounded text-light p-1">
                      {product.category}
                    </p>
                  </h4>
                  <div
                    className={`${
                      body < 750 ? "w-100" : "w-50"
                    } quantite card shadow rounded d-flex align-items-center flex-row justify-content-around  mb-3 mt-2`}
                  >
                    <button onClick={increment} className={`${styling.button}`}>
                      +
                    </button>
                    <span>{quantite}</span>
                    <button onClick={decrement} className={`${styling.button}`}>
                      -
                    </button>
                  </div>
                  <button
                    className={`btn btn-danger ${
                      body < 750 ? "w-100" : "w-50"
                    }`}
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              )
          )}
        </div>
      </div>

      <div className="description container mt-4">
        <h4
          onClick={showDesc}
          style={{ cursor: "pointer", color: "red", fontFamily: "monospace" }}
        >
          description
        </h4>
        <div style={{ display: show ? "flex" : "none" }}>
          {products.map(
            (food) =>
              food.title == name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  key={food.id}
                  className="card p-2 w-75"
                >
                  {food.desc}
                </motion.p>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Detail;

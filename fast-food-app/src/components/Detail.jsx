import { useParams } from "react-router-dom";
import { products } from "../assets/fake-data/products";
import styling from '../style/foods.module.css'
import { useRef,useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../stateMangement/slice";
function Detail() {
  const { name } = useParams();
  const dispatch=useDispatch()
  const [quantite,setQuantite]=useState(1)
  const refImg=useRef()
  const [selectedImage, setSelectedImage] = useState(null);

  const increment=()=>{
    setQuantite(prev=>prev+1)
  }
  const decrement=()=>{
    setQuantite(prev=>prev-1)
    quantite<=1&&setQuantite(1)
  }
  const changeImg=(src)=>{
    setSelectedImage(src);
  }

  const addToCart=(product)=>{
    const data={...product,quantite:quantite,idOrder:Date.now()}
    dispatch(addtocart(data))
  }
  return (
    <div className="d-flex mt-5 justify-content-evenly align-items-center">
      <div>
        {products.map(
          (product) =>
            product.title == name && (
              <div key={product.id} className="d-flex flex-column">
                <img onClick={()=>changeImg(product.image01)} className={`${styling.smallImg}`}  src={product.image01} alt="" />
                <img onClick={()=>changeImg(product.image02)} className={`${styling.smallImg}`} src={product.image02} alt="" />
                <img onClick={()=>changeImg(product.image03)} className={`${styling.smallImg}`} src={product.image03} alt="" />
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
                  style={{ width: "300px", height: "300px" }}
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
              <div key={product.id} className="p-2 w-100 d-flex flex-column ">
                <h2>{product.title}</h2>
                <p className="text-danger">Price : {product.price} $</p>
                <h4 className="d-flex align-items-center">
                  Category : <p className="mt-3 ms-3 bg-danger rounded text-light p-1">{product.category}</p>
                </h4>
                <p style={{flexWrap:'wrap',width:'45%'}}>
                  <span className="text-secondary">description</span> <br />
                  {/* {product.desc} */}
                </p>
                <div className="quantite card shadow rounded d-flex align-items-center flex-row justify-content-around w-50 mb-3 mt-2">
                  <button onClick={increment} className={`${styling.button}`}>+</button>
                   <span>{quantite}</span>
                  <button onClick={decrement} className={`${styling.button}`}>-</button>
                </div>
                <button className="btn btn-danger w-50" onClick={()=>addToCart(product)} >Add To Cart</button>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Detail;

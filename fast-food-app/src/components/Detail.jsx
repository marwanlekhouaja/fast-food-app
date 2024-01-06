import { useParams } from "react-router-dom"
import { products } from "../assets/fake-data/products"
function Detail() {
  const {name}=useParams()  
  return (
    <>
    {products.map((product)=>
    product.title==name&&
    <div key={product.id}>
        <img style={{width:'200px',height:'200px'}} src={product.image01} alt="" />
    </div>
    )}
    </>
  )
}

export default Detail
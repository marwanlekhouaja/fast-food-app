import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { removeOrder } from "../stateMangement/slice";
import {motion} from 'framer-motion' 
function CartComponent() {
    const orders = useSelector((state) => state.actionsApp.cart);
    const dispatch=useDispatch()
    const remove=(id)=>{
      dispatch(removeOrder(id))
    }  
  return (
    <>
    <table style={{overflow:'scrollX'}} data-aos='fade-right' className="text-center w-75 table table-light container mt-3 shadow">
        <thead>
            <tr>
                <th>picture</th>
                <th>quantite</th>
                <th>category</th>
                <th>price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {orders.length !== 0 ? (
            orders.map((order) => (
              <motion.tr 
                 layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,backgroundColor:'gray'}} transition={{duration:.4}} key={order.idOrder}>
                 <td><img src={order.image01} style={{width:'50px',height:'50px'}} alt="" /></td>
                 <td>{order.quantite}</td>
                 <td>{order.category}</td>
                 <td>{order.price}</td>
                 <td><button className="btn btn-danger" onClick={()=>remove(order.idOrder)}><AiOutlineDelete/></button></td>
              </motion.tr>
            ))
          ) : (
            <tr><td colSpan={7} className="text-center">no orders in the right now !</td></tr>
          )}
        </tbody>
    </table>
    </>
  )
}

export default CartComponent
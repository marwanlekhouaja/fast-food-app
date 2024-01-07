import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { removeOrder } from "../stateMangement/slice";
function CartComponent() {
    const orders = useSelector((state) => state.actionsApp.cart);
    const dispatch=useDispatch()
    const remove=(id)=>{
      dispatch(removeOrder(id))
    }  
  return (
    <>
    <table data-aos='fade-right' className="text-center table table-light container mt-3 shadow">
        <thead>
            <tr>
                <th>id order</th>
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
              <tr  key={order.idOrder}>
                 <td>{order.idOrder}</td>
                 <td><img src={order.image01} style={{width:'50px',height:'50px'}} alt="" /></td>
                 <td>{order.quantite}</td>
                 <td>{order.category}</td>
                 <td>{order.price}</td>
                 <td><button className="btn btn-danger" onClick={()=>remove(order.idOrder)}><AiOutlineDelete/></button></td>
              </tr>
            ))
          ) : (
            <td colSpan={7} className="text-center">no orders in the right now !</td>
          )}
        </tbody>
    </table>
    </>
  )
}

export default CartComponent
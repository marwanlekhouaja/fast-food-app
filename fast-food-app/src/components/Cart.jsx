import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import styling from '../style/foods.module.css'
import { removeOrder } from "../stateMangement/slice";
import {motion} from 'framer-motion'
const Cart = () => {
  const orders = useSelector((state) => state.actionsApp.cart);
  const dispatch=useDispatch()
  const remove=(id)=>{
    dispatch(removeOrder(id))
  }
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Your orders</h5>
          <button
            type="button"
            className="btn-close "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" data-aos='fade-right'>
          {orders.length !== 0 ? (
            orders.map((order) => (
              <motion.div 
              layout
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              transition={{duration:.4}}
              key={order.idOrder}>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <img
                      src={order.image01}
                      style={{ width: "40px", height: "40px" }}
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column" style={{fontSize:'15px'}}>
                    <span>{order.title}</span>
                    <span>
                      {order.quantite} x {order.price} $
                    </span>
                  </div>
                  <div>
                    <button onClick={()=>remove(order.idOrder)} className={`${styling.button}`} >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
                <hr />
              </motion.div>
            ))
          ) : (
            <div>no orders in the right now !</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

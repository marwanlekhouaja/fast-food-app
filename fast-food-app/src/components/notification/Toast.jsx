import { motion } from "framer-motion";
import { useState } from "react";

const Toast = () => {
  const [hide,setHide]=useState(false)
  const hideToast=()=>{
    setHide(true)
  }
  return (
    <>
      {hide?'':
      <motion.div
      layout
      initial={{ y: "-50vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, y: "-50vh" }}
      transition={{ duration: 1 }}
      className="toast-container rounded bg-success text-light top-0 m-3 start-0"
    >
      <div id="toastAlert" className="toast d-flex justify-content-between align-items-center bg-success p-2 border-0">
        <div className="toast-body">
          <strong className="me-2">Success !</strong>
          food add succefully to your cart 
        </div>
        <button
          type="button"
          data-bs-dismiss="toast"
          onClick={hideToast}
          className="ms-3 btn-close-white btn-close "
        ></button>
      </div>
    </motion.div>}
    </>
  );
};

export default Toast;

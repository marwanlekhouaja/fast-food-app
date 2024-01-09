import { Link } from "react-router-dom";

const MsgAddToCart = () => {
  return (
    <div>
      <div
        className="modal fade "
        id="staticBackdrop3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog bg-success">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center m-auto">
              <p className="fs-5">Product add succefully to your cart !</p>
              <Link
                to=""
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                show the cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MsgAddToCart;

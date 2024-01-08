import { useEffect, useState } from "react";
import { MdOutlineDone } from "react-icons/md";

const Why = () => {
  const img = { maxWidth: "460px", maxHeight: "430px" };
  const [body, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  })
  const styleP = { fontSize: "14px", fontFamily: "arial" };
  return (
    <div className="row mt-5 d-flex align-items-center justify-content-around">
      <img
        data-aos="fade-right"
        style={img}
        className="col-sm-11 col-md-4"
        src="deliver.png"
        alt=""
      />
      <div
        data-aos="fade-left"
        className={`content ${body>750?'w-50':'w-75'} d-flex flex-column justify-content-center align-items-center`}
      >
        <h4>Why Tasty Treat?</h4>
        <div style={styleP} className="col-12 col-md-10">
          Indulge in a culinary experience like no other with our food
          service.we are not just about meals; we are about crafting flavors
          that linger in your memory . Our dedicated team of chefs uses the
          freshest ingredients to ensure each bite is a celebration of taste.
          Choose us for a seamless dining experience that s all about your
          satisfaction. Opt for the best – savor our food service, where every
          dish is a delightful journey for your taste buds.
          <div className="advantages mt-3">
            <h5><span className="p-1 bg-light rounded-pill text-danger me-1"><MdOutlineDone/></span>Fresh and tasty foods</h5>
            <p>Lorem, ipsum dolor non vel excepturi voluptas veniam</p>
            <h5><span className="p-1 bg-light rounded-pill text-danger me-1"><MdOutlineDone/></span>Quality support</h5>
            <p>Lorem, ipsum dolor non vel excepturi voluptas veniam</p>
            <h5><span className="p-1 bg-light rounded-pill text-danger me-1"><MdOutlineDone/></span>Order from any location</h5>
            <p>Lorem, ipsum dolor non vel excepturi voluptas veniam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;

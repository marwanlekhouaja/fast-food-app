import { Link } from "react-router-dom";

const Subscribe = () => {
  const styleContainer={height: "86vh",flexDirection: "column",display: "flex",justifyContent: "center",alignItems: "center",fontFamily: "monospace",}  
  return (
    <div
      style={styleContainer}
    >
      <h4 data-aos="fade-up" className="w-50">
        Thank you for your subscribe the new offers and news will automatically
        send to you email !
      </h4>
      <img
        data-aos="fade-right"
        src="/welcome.png"
        style={{ width: "370px", height: "320px" }}
        alt=""
      />
      <Link className="btn btn-danger" to="/">
        back to the home Page
      </Link>
    </div>
  );
};

export default Subscribe;

// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import styling from '../style/contact.module.css'
const Contact = () => {
  
  return (
    <>
      <div className={`row ${styling.contact} `}>
        <div data-aos='fade-right' className="contact col-10 col-md-3">
          <p><span className="text-danger">Location</span>: hay inbiat ,sale , Maroc
            <br /><span className="text-danger">Phone</span>: 01712345678
            <br /><span className="text-danger">Email</span>: example@gmail.com
          </p>
        </div>
        <div data-aos='fade-up' className="delivery time col-10 col-md-3">
          <p><span className="text-danger">Sunday - Thursday</span> <br />10:00am - 11:00pm</p>
          <p><span className="text-danger">Friday - Saturday </span><br />Off day</p>
        </div>
        
        <div data-aos='fade-left' className="news col-10 col-md-3">
          <p className="text-danger">Subscribe our newsletter</p>
          <form action="">
          <input type="email" className={`${styling.input}`} placeholder="enter your email here"/>
          <button className={`${styling.iconSend}`}><IoIosSend/></button>
          </form>
        </div>
      </div>
      {/* <footer className={`${styling.footer} container d-flex align-items-center justify-content-between`}>
        <div>
          <p>
            Copyright - 2024, website made by marouane lakhouaja. All Rights
            Reserved.
          </p>
        </div>
        <div className="d-flex align-items-center">
          <p className="me-3">Follow</p>
          <span className="fs-4 mb-3 me-3">
            <FaInstagram />
          </span>
          <span className="fs-4 mb-3 me-3">
            <FaGithub />
          </span>
          <span className="fs-4 mb-3 me-3">
            <FaFacebookF />
          </span>
          <span className="fs-4 mb-3 ">
            <FaLinkedin />
          </span>
        </div>
      </footer> */}
    </>
  );
};

export default Contact;

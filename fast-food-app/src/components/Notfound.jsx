import { Link } from "react-router-dom"


const Notfound = () => {
  const styleDiv={height:'80dvh',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'monospace',flexDirection:'column'} 
  const styleImg={width:'650px',height:'300px',marginBottom:'-80px'} 
  return (
    <div style={styleDiv}>
        <img style={styleImg} src="404.png" alt="404" />
        <h4 className="fs-1">Page not found</h4>
        <h4 className="fs-1">404</h4>
        <Link to='/' className="btn btn-danger">back to home page</Link>
    </div>
  )
}

export default Notfound
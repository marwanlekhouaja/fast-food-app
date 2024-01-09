import { useState } from "react"
import {motion} from 'framer-motion'


const Category = () => {
  const [listCategory,setListCategory]=useState([
    {id:1,name:'All',active:true},
    {id:2,name:'Burger',active:false},
    {id:3,name:'Pizza',active:false},
    {id:4,name:'Bread',active:false}
  ]) 
  
  const activeCategory=(id)=>{
    setListCategory((prev)=>prev.map(product=>
        product.id==id?{...product,active:true}:{...product,active:false}
        ))
  }
  return (
    <div className="d-flex align-items-center justify-content-evenly mb-4 text-light bg-danger rounded shadow p-2">
    {listCategory.map((category)=>(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="m-2" key={category.id}>
            <div style={{cursor:'pointer'}} className={`${category.active?'btn btn-light text-danger':''}`} onClick={()=>activeCategory(category.id)}>{category.name}</div>
        </motion.div>
    ))}
    </div>
  )
}

export default Category
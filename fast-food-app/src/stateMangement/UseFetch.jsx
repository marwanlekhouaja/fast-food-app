import { products } from "../assets/fake-data/products"

export const UseFetch=async () => {
    let res=await fetch(products)
    
    return res
}
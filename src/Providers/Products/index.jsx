import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        axios.get('https://kenzieshop.herokuapp.com/products/')
        .then((res)=>setProducts(res.data))
    },[])

    return<ProductsContext.Provider value={{products}} >{children}</ProductsContext.Provider>

}
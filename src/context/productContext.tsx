import React, { createContext, useState } from "react";
import { getAllProducts, getProduct } from "../services/productService";
import type { productList } from "../Components/Catalogo";


type contextProps = {
    getProducts: () => Promise<productList[]>
    getProducID: (id: number) => Promise<void>
    product: productList | undefined
}

export const productContext = createContext<contextProps | undefined>(undefined)

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {

    const [product, setProduct] = useState<productList | undefined>(undefined)

    const getProducts = async (): Promise<productList[]> => {
        const response = await getAllProducts()
        return response
    }

    const getProducID = async (id: number) => {
        const response = await getProduct(id)
        if (response.id !== id){
            setProduct(undefined)
        }
        setProduct(response)
    }
    

    return (
        <productContext.Provider
            value={{
                getProducts,
                product,
                getProducID
            }}
        >
            {children}
        </productContext.Provider>
    )
}
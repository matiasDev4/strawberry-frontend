import React, { createContext, useState } from "react";
import { getAllProducts, getProduct } from "../services/productService";
import type { productList } from "../Components/Catalogo";


type contextProps = {
    getProducts: () => Promise<productList[]>
    getProducID: (id: number | null) => Promise<void>
    product: productList | undefined
}

export const productContext = createContext<contextProps | undefined>(undefined)

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {

    const [product, setProduct] = useState<productList | undefined>(undefined)

    const getProducts = async (): Promise<productList[]> => {
        const response = await getAllProducts()
        return response
    }

    const getProducID = async (id: number | null) => {
        //limpio el estado
        setProduct(undefined)
        //obtengo y asigno el resultado al estado
        const response = await getProduct(id)
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
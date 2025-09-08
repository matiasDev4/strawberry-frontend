import React, { createContext } from "react";
import { getAllProducts } from "../services/productService";
import type { productList } from "../Components/Catalogo";

type contextProps = {
    getProducts: () => Promise<productList[]>
}

export const productContext = createContext<contextProps | undefined>(undefined)

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {

    const getProducts = async (): Promise<productList[]> => {
        const response = await getAllProducts()
        return response
    }

    return (
        <productContext.Provider
            value={{
                getProducts
            }}
        >
            {children}
        </productContext.Provider>
    )
}
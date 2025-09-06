import React, { createContext } from "react";
import type { productInterface } from "../config/productsTypes";
import { insertProduct } from "../services/productService";

type contextProps = {
    createProduct: ({products}:{products: productInterface}) => Promise<void>
}

export const productContext = createContext<contextProps | undefined>(undefined)

export const productProvider = ({ children }: { children: React.ReactNode }) => {
    
    const createProduct = async ({products}:{products: productInterface}) => {
       await insertProduct({products})
    }

    return (
        <productContext.Provider
            value={{
                createProduct
            }}
        >
            {children}
        </productContext.Provider>
    )
}
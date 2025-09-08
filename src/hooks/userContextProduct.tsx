import { useContext } from "react"
import { productContext } from "../context/productContext"

export const useContextProduct = () => {
    const data = useContext(productContext)
    if (!data) throw new Error('Error al usar el productContext')
    return data
}
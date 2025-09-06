import { useContext } from "react"
import { usersContext } from "../context/usersContext"

export const useContextUser = () => {
    const data = useContext(usersContext)
    if (!data) throw new Error('Error al usar el usersContext')
    return data
}
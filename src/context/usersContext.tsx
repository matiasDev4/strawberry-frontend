import React, { createContext } from "react";
import { getUserData } from "../services/authService";

type contextProp = {
    getUser: () => Promise<{username: string, role: string}>

}



export const usersContext = createContext<contextProp | undefined>(undefined)

export const ProviderUser = ({children}:{children: React.ReactNode}) => {

    const getUser = async (): Promise<{username: string, role: string}> => {
        const token = localStorage.getItem('token')
        if (!token) throw new Error('No se encontro el token')

        try {
            const userData = await getUserData(token)
            return userData
        } catch (error) {
            throw new Error('No se encontro el rol')
        }
    }


    
    return (
        <usersContext.Provider
        value={{
            getUser
        }}
        >
            {children}
        </usersContext.Provider>
    )
}
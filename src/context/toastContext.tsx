import React, { createContext, useContext, useState } from "react"
import { ToastMessage } from "../Components/ToastMessage"

type contextProp = {
    addToast: (id: number, message: string, type: "error" | "success" | "alert" | "info") => void
    removeToast: (id: number) => void
}

export type toastProps = {
    id: number
    message: string
    type: 'error' | 'success' | 'alert' | 'info'
    close?: () => void
}

export const toastContext = createContext<contextProp | null>(null)
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toast, setToast] = useState<toastProps[]>([])

    const addToast = (id: number, message: string, type: toastProps['type']) => {
        setToast(prev => [...prev, { id, message, type }])
        setTimeout(() => {
            removeToast(id)
        }, 3000);
    }

    const removeToast = (id: number) => {
        setToast(prev => prev.filter(item => item.id !== id))
    }

    return (
        <toastContext.Provider
            value={{
                addToast,
                removeToast
            }}
        >
            {children}
            <div className="flex flex-col gap-5 fixed bottom-0 left-1 m-1 z-100">
                {toast.map(item =>
                    <ToastMessage key={item.id} message={item.message} type={item.type}/>
                )}
            </div>
        </toastContext.Provider>
    )
}

export const useToast = () => {
    const context = useContext(toastContext)
    if (!context) throw new Error('No se puede usar useToast')
    return context
}
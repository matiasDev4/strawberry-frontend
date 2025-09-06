import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import type { PanelProps } from "../../layouts/Panel";
import { useContextUser } from "../../hooks/useContextUse";
import { useEffect, useState } from "react";

export const HeaderPanel = ({openSidebar, setOpenSidebar}:PanelProps) => {

    const [username, setUsername] = useState('')
    const [role, setRole] =  useState('')

    const {getUser} = useContextUser()

    useEffect(()=> {
        const handlerData = async () => {
            const user = await getUser()
            setUsername(user.username)
            setRole(user.role)
        }
        handlerData()
    }, [])

    return (
        <header className="w-full h-16 bg-white flex items-center justify-between px-4 sticky top-0">
            <div>
                <h1 className="font-play text-xl">{username}</h1>
                <h2 className="text-sm text-black/60">{role === 'admin' ? 'Administrador' : 'cargando...'}</h2>
            </div>
            <span 
            onClick={()=>{setOpenSidebar(!openSidebar)}}
            className="bg-red-500 p-2 rounded-md text-white font-bold text-xl"
            ><BsLayoutSidebarInsetReverse /></span>
        </header>
    )
}
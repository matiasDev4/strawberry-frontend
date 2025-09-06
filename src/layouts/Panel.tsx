import type React from "react"
import { Sidebar } from "../Components/Panel/Sidebar"
import { HeaderPanel } from "../Components/Panel/HeaderPanel"
import { useState } from "react"
import { Outlet } from "react-router-dom"

export type PanelProps = {
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
    openSidebar: boolean
}

export const Panel = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    return (
        <section className="w-full h-screen flex">
            <Sidebar openSidebar={openSidebar}/>
            <main className="w-full h-full">
                <HeaderPanel openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
                <Outlet />
            </main>
        </section>
    )
}
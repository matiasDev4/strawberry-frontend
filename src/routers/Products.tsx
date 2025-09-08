import { useState } from 'react'
import logo from '../assets/logo.webp'
import { ModalProduct } from '../Components/modal/modalProduct'

export const Products = () => {
    const [mode, setMode] = useState('create')
    const [openModal, setOpenModal] = useState(false)
    
    return (
        <section className="h-[calc(100vh - 4rem)] w-full">
            <div className='px-4 py-4 flex flex-col gap-y-2'>
                <h1 className='font-play text-lg'>Gestion de productos</h1>
                <button className='bg-green-500 w-42 py-1 rounded-md text-white font-play
                hover:cursor-pointer'
                onClick={()=>{
                    setOpenModal(true)
                }}
                >Crear producto</button>
            </div>
            <div className="flex flex-col gap-y-5 p-2">
                <article className='w-full bg-white flex items-center gap-x-5 px-2 rounded-lg'>
                    <img src={logo} alt=""
                        className="w-15 h-15 rounded-lg" />
                    <div className='py-2'>
                        <h1 className='text-lg font-play'>Conjunto</h1>
                        <span className='text-sm font-play text-black/60'>$ 9000</span>
                        <div className='flex gap-x-5 pt-1.5'>
                            <button className='bg-sky-500 text-sky-100 rounded-sm font-semibold px-2'
                            onClick={()=>setMode('editar')}
                            >Editar</button>
                            <button className='px-2 text-red-600 rounded-sm'>Eliminar</button>
                        </div>
                    </div>
                </article>
            </div>
            {openModal && <ModalProduct openModal={openModal} setOpenModal={setOpenModal} mode={mode}/>}
        </section>
    )
}
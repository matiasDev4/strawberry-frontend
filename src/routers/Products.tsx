import { useEffect, useState } from 'react'

import { ModalProduct } from '../Components/modal/modalProduct'

import { useContextProduct } from '../hooks/userContextProduct'

import type { productList } from '../Components/Catalogo'
import { deleteProduct } from '../services/productService'
import { useToast } from '../context/toastContext'

export const Products = () => {
    const [mode, setMode] = useState('create')
    const [openModal, setOpenModal] = useState(false)
    const [product, setProduct] = useState<productList[]>([])
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState(0)
    const { getProducts } = useContextProduct()
    const { addToast } = useToast()

    const handlerProduct = async () => {
        const data = await getProducts()
        if(data){
            setProduct(data)
        }
    }

    const handlerDelete = async (id: number) => {
        await deleteProduct(id)
        addToast(id, 'Producto eliminado', 'success')
        setRefresh(true)
        
    }

    useEffect(() => {
        handlerProduct()
        if (refresh) {
            setRefresh(false)
        }
    }, [openModal, refresh])

    return (
        <section className="h-[calc(100vh - 4rem)] w-full">
            <div className='px-4 py-4 flex flex-col gap-y-2'>
                <h1 className='font-play text-lg'>Gestion de productos</h1>
                <button className='bg-green-500 w-42 py-1 rounded-md text-white font-play
                hover:cursor-pointer'
                    onClick={() => {
                        setOpenModal(true)
                    }}
                >Crear producto</button>
            </div>
            <div className="flex flex-col gap-y-5 p-2">
                {product.map(item => <article
                key={item.id} className='w-full bg-white flex items-center gap-x-5 px-2 rounded-lg'>
                    <img src={item.image} alt={item.name}
                        className="w-15 h-15 rounded-lg" />
                    <div className='py-2'>
                        <h1 className='text-lg font-play'>{item.name}</h1>
                        <span className='text-sm font-play text-black/60'>$ {item.price}</span>
                        <div className='flex gap-x-5 pt-1.5'>
                            <button className='bg-sky-500 text-white hover:cursor-pointer rounded-sm font-semibold px-2'
                                onClick={() => {
                                    setMode('editar')
                                    setOpenModal(true)
                                    setId(item.id as number)
                                }}
                            >Editar</button>
                            <button className='px-2 text-red-600 rounded-sm hover:cursor-pointer'
                                onClick={() => handlerDelete(item.id as number)}
                            >Eliminar</button>
                        </div>
                    </div>
                </article>)}
            </div>
            {openModal && <ModalProduct openModal={openModal} setOpenModal={setOpenModal} mode={mode} id={id}/>}
        </section>
    )
}
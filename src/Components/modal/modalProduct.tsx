import React, { useEffect, useRef, useState } from "react"
import { insertProduct, updateProduct } from "../../services/productService"
import { useToast } from "../../context/toastContext"


type modalProps = {
    id?: number
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    mode: string

}

export const ModalProduct = ({ openModal, setOpenModal, mode, id }: modalProps) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [active, setActive] = useState(true)


    const ref = useRef<HTMLFormElement | null>(null)

    const { addToast } = useToast()
    const date = new Date()
    const form = new FormData()

    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (image) {
            form.append('image', image)
        }
        if (name.trim() !== '' && description.trim() !== '' && category !== '' && price.trim() !== '' && stock !== '') {
            form.append('name', name)
            form.append('description', description)
            form.append('category', category)
            form.append('stock', stock)
            form.append('price', price)
            form.append('active', active ? 'true' : 'false')

            if (mode === 'create') {
                const res = await insertProduct(form)
                const message = await res.json()
                if (res.status === 201) {
                    addToast(date.getTime(), message['success'], 'success')
                    setOpenModal(false)
                } else {
                    addToast(date.getTime(), 'Ese producto ya esta registrado', 'error')
                }
            } else {
                updateProduct(id as number, form)
                addToast(date.getTime(), 'Producto actualizado', 'success')
                setOpenModal(false)
            }
        } else {
            addToast(date.getTime(), 'Hay campos vacios', 'error')
        }
    }


    useEffect(() => {
        const closeModal = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpenModal(false)
            }
        }

        if (openModal) {
            document.addEventListener('mousedown', closeModal)
        }
        return () => document.removeEventListener('mousedown', closeModal)
    }, [openModal])

    return (
        <section className="bg-black/50 fixed top-0 bottom-0 left-0 right-0 z-20 backdrop-blur-sm
        flex justify-center items-center">
            <form ref={ref}
                onSubmit={(e) => handlerSubmit(e)}
                className="w-full h-[450px] bg-white px-4 py-4 overflow-auto flex flex-col gap-y-4 md:w-[500px] rounded-xl
            shadow-[0px_0px_10px_black]/50">
                <h1 className="font-play text-xl mt-5 text-center">{mode === 'create' ? 'Crear producto' : 'Editar producto'}</h1>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Nombre</label>
                    <input type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="border border-black/50 px-2 py-2 rounded-md outline-0"
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Descripcion</label>
                    <textarea name="" id=""
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className="border border-black/50 px-2 py-2 rounded-md outline-0"
                    ></textarea>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Categoria</label>
                    <input type="text"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        className="border border-black/50 px-2 py-2 rounded-md outline-0"
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Precio</label>
                    <input type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        inputMode="decimal"
                        className="border border-black/50 px-2 py-2 rounded-md outline-0"
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Stock</label>
                    <input type="text"
                        inputMode="decimal"
                        onChange={(e) => setStock(e.target.value)}
                        value={stock}
                        className="border border-black/50 px-2 py-2 rounded-md outline-0"
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label className="block mb-2 text-md text-black" htmlFor="file_input">Imagen</label>
                    <input
                        onChange={(e) => setImage(e.target.files?.[0] ?? null)}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer 
                        focus:outline-none py-2 px-4"
                        id="file_input" type="file"></input>
                </div>
                <div className="flex items-center gap-x-2">
                    <label htmlFor="">Activo</label>
                    <input type="checkbox"
                        onChange={(e) => setActive(e.target.checked)}
                        checked={active}
                        className="border border-black/50 px-2 py-2 rounded-md outline-0"
                    />
                </div>
                <button
                    type="submit"
                    className="
                bg-green-500 py-2 rounded-md font-play text-white
                ">Guardar</button>
            </form>
        </section>
    )
}
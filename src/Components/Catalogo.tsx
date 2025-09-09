
import { useEffect, useState } from "react"
import { Card } from "./CardProduct"
import { useContextProduct } from "../hooks/userContextProduct"


export type productList = {
    id?: number
    name: string,
    description: string,
    price: number,
    image: string
    category?: string
}


export const Catalago = () => {
    const [product, setProduct] = useState<productList[]>([])
    const {getProducts} = useContextProduct()
    const [categ, setCateg] = useState('todos')

    const handlerProducts = async () => {
        const res = await getProducts()
        if (res) {
            setProduct(res)
        } 
    }
    useEffect(()=>{
        handlerProducts()
    },[])

    return (
        <section className="w-full max-w-[1300px] mx-auto min-h-screen scroll-mt-20 scroll-smooth" id="catalogo">
            <div className="px-5 py-2 flex justify-between">
                <h1 className="text-3xl font-soft">Catalogo</h1>  
                <div className="flex items-center gap-x-4">
                    <h1 className="font-play text-lg">Filtro</h1>
                    <select 
                    onChange={(e)=>{setCateg(e.target.value)}}
                    name="" id="" className="border px-2 py-1 rounded-md border-[#646464]">
                        <option value="todos">Todos</option>
                        {product.map(item => <option 
                        
                        value={item.category}>{item.category}</option>)}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-5 gap-5 items-start">
                {product.filter(item => categ === "todos" || item.category === categ).map((item, index) => 
                    <Card product={item} key={index}/>
                )}
            </div>
        </section>
    )
}
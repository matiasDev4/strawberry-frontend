import { useState } from "react"
import { Card } from "./CardProduct"

const prod = [{
    'name': 'Conjunto',
    'description': 'talle 2xl, 3xl',
    'image': '../assets/ropa.webp',
    'price': 2000
},{
    'name': 'Conjunto',
    'description': 'talle 2xl, 3xl',
    'image': '../assets/ropa.webp',
    'price': 2000
},{
    'name': 'Conjunto',
    'description': 'talle 2xl, 3xl',
    'image': '../assets/ropa.webp',
    'price': 2000
},{
    'name': 'Conjunto',
    'description': 'talle 2xl, 3xl',
    'image': '../assets/ropa.webp',
    'price': 2000
}]





export const Catalago = () => {
    const [pagination, setPagination] = useState(0)



    return (
        <section className="w-full max-w-[1300px] mx-auto min-h-screen">
            <div className="px-2 py-2 flex justify-between">
                <h1 className="text-3xl font-soft">Catalogo</h1>  
                <div className="flex items-center gap-x-4">
                    <h1 className="font-play">Filtro</h1>
                    <select name="" id="" className="border px-2 rounded-md border-[#c0c0c0]">
                        <option value="todos">Todos</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-5 gap-5 items-start">
                {prod.map((item, index) => 
                    <Card key={index}/>
                )}
            </div>
            <div className="flex gap-x-5 justify-center py-2">
                {prod.map((item, index) => 
                <h1 className="border px-4 py-2">{index}</h1>
                )}
            </div>
        </section>
    )
}
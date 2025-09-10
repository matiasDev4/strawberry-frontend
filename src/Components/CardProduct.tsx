import { useEffect, useState } from "react"
import { ViewImage } from "./viewImage"
import { useContextProduct } from "../hooks/userContextProduct"
import { AnimatePresence } from "framer-motion"

type productCardProp = {
    id: number
    name: string
    description: string
    price: number
    image: string
    category: string
}

export const Card = ({ product }: { product: productCardProp }) => {
    const [viewImage, setViewImage] = useState(false)
    const {getProducID} = useContextProduct()

    const handlerViewImage = (id: number) => {
        getProducID(id)
        setViewImage(true)
    }

    useEffect(()=>{
        if (viewImage){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = ''
        }
    },[viewImage])

    return (
        <>
            <article className=" w-[320px] h-auto py-2 px-2 rounded-xl
         shadow-[0px_0px_12px_black]/15 border border-[#e2e2e2] bg-white">
                <div className='p-2 border rounded-lg border-[#d1d1d1] my-2'>
                    <img src={product.image}
                    onClick={()=>{handlerViewImage(product.id)}}
                        className='w-full h-70 object-cover rounded-lg'
                    />
                </div>
                <div className='flex flex-col gap-y-1 p-2 items-left flex-1'>
                    <h1 className='text-md md:text-lg font-play'>{product.name.toUpperCase()}</h1>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-black/50 py-1">{product.category}</span>
                        <span className='text-sm text-center font-semibold bg-[#fa54ba] px-1 py-0.2 rounded-sm
                text-white w-16'>$ {product.price.toLocaleString("es-AR")}</span>
                    </div>
                </div>
                <div className='p-2 leading-relaxed font-play text-sm text-[#424242] mt-auto'>
                    <p>
                        {product.description}
                    </p>
                </div>
                {/* <div className='py-2'>
                <button className='bg-green-500 w-full py-2 rounded-md text-white font-play text-sm'>
                    Pedir por whatsapp
                </button>
            </div> */}
            
            </article>
            <AnimatePresence>
                {viewImage === true ? <ViewImage close={setViewImage}/> : ''}
            </AnimatePresence>
        </>

    )
}

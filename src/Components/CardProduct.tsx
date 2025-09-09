
type productCardProp = {
    name: string,
    description: string,
    price: number,
    image: string
}

export const Card = ({product}:{product: productCardProp}) => {
    return (
        <article className=" w-[320px] h-auto py-2 px-2 rounded-xl
         shadow-[0px_0px_12px_black]/15 border border-[#e2e2e2] bg-white">
            <div className='p-2 border rounded-lg border-[#d1d1d1] my-2'>
                <img src={product.image}
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>
            <div className='flex flex-col gap-y-1 p-2 items-left'>
                <h1 className='text-lg font-play'>{product.name.toUpperCase()}</h1>
                <span className='text-md font-semibold bg-red-400 px-2 py-0.2 rounded-sm
                text-white'>$ {product.price}</span>
            </div>
            <div className='p-2 leading-relaxed font-play text-sm text-[#424242]'>
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
    )
}

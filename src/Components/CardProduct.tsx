import ropa from '../assets/ropa.webp'

export const Card = () => {
    return (
        <article className=" w-[300px] h-auto py-2 px-2 rounded-xl
         shadow-[0px_0px_12px_black]/15 border border-[#e2e2e2]">
            <div className='p-2 border rounded-lg border-[#d1d1d1] my-2'>
                <img src={ropa}
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>
            <div className='flex justify-between p-2 items-center'>
                <h1 className='text-lg font-play'>Conjunto verano</h1>
                <span className='text-md font-semibold bg-red-400 px-2 py-0.2 rounded-sm
                text-red-100'>$ 9.000</span>
            </div>
            <div className='p-2 leading-relaxed font-play text-sm text-[#424242]'>
                <p>
                    Fusce sed diam vitae purus lacinia dignissim sed vitae neque.
                    Nam quis lectus auctor, ultrices lectus ac, faucibus ex.
                    Praesent accumsan ipsum sed nulla sagittis, in fringilla nisl faucibus.
                </p>
            </div>
            <div className='py-2'>
                <button className='bg-green-500 w-full py-2 rounded-md text-white font-play text-sm'>
                    Pedir por whatsapp
                </button>
            </div>
        </article>
    )
}
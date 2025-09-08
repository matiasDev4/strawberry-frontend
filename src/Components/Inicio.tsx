import logo from '../assets/logo.webp'

export const Inicio = () => {
    return (
        <section 
        id='inicio'
        className='flex flex-col-reverse w-auto items-center lg:items-center lg:flex-row lg:justify-around my-8 lg:max-w-[1000px] lg:mx-auto scroll-mt-20'>
            <div className='w-auto h-80 flex flex-col gap-y-5 justify-start p-3 my-5 lg:w-110'>
                <h1 className='font-bold text-xl lg:text-3xl font-soft'>Bienvenida a <span className='
                text-red-500 font-prise'>Strawberry!</span> 🍓</h1>
                <p className='text-[#4d4d4d] font-normal font-play leading-relaxed text-md lg:text-lg'>
                    Traemos ropa por encargue todos los sábados, 
                    te dejamos nuestro catálogo para que veas todo lo que tenemos disponible
                </p>
                {/* <button className='bg-red-500 py-2 w-full my-2 rounded-md font-normal text-white font-play
                hover:cursor-pointer hover:bg-red-400 transition-colors duration-200'>
                    Ver catalogo
                </button> */}
            </div>
            <div className='p-2 border-3 rounded-lg border-[#ffb6b6] w-60 h-60 lg:w-80 lg:h-80'>
                <img src={logo} alt="logo"
                    className='w-full h-full rounded-lg'
                />
            </div>
        </section>
    )
}
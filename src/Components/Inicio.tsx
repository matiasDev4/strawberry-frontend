import logo from '../assets/logo.webp'
import { FaWhatsapp } from "react-icons/fa";

export const Inicio = () => {
    return (
        <section 
        id='inicio'
        className='flex flex-col-reverse w-auto items-center lg:items-center lg:flex-row lg:justify-around my-8 lg:max-w-[1000px] lg:mx-auto scroll-mt-20'>
            <div className='w-auto h-80 flex flex-col gap-y-3 justify-center p-3 my-5 lg:w-110'>
                <h1 className='font-bold text-xl lg:text-3xl font-soft'>Bienvenida a <span className='
                text-red-500 font-prise'>Strawberry!</span> 🍓</h1>
                <p className='text-[#4d4d4d] font-normal font-play leading-relaxed text-md lg:text-lg'>
                    Traemos ropa por encargue todos los Lunes, 
                    te dejamos nuestro catálogo para que veas todo lo que tenemos disponible
                </p>
                <h2 className='font-play'>Podes unirte a nuestro grupo!</h2>
                <a href='https://chat.whatsapp.com/Gx41AUfuOSv0Nu7EuT6eUj?mode=ems_copy_t' className='bg-[#fa54ba] py-2 w-full my-1 rounded-md font-normal text-white font-play
                hover:cursor-pointer hover:bg-[#b63c87] transition-colors duration-200 text-center flex items-center justify-center'>
                    <span className='px-2 text-xl py-1'><FaWhatsapp /></span>
                    Grupo de whatsapp
                </a> 
            </div>
            <div className='p-2 border-3 rounded-lg border-[#ffb6b6] w-60 h-60 lg:w-80 lg:h-80'>
                <img src={logo} alt="logo"
                    className='w-full h-full rounded-lg'
                />
            </div>
        </section>
    )
}
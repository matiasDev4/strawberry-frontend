import logo from '../assets/logo.webp'
import { IoMenu } from "react-icons/io5";
import { options } from '../config/menuOptions'
import { useState } from 'react';

export const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className="bg-[#ffd1d3] w-full h-18 flex px-5 items-center justify-between sticky top-0">
            <div className='flex items-center gap-x-2'>
                <img src={logo} alt="strawberry" 
                className='w-18 h-18'
                />
            </div>
            <nav className={`bg-[#ffd1d3] absolute w-full left-0 h-auto top-18 p-5
                ${open ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0'} 
                transition-all duration-300 lg:static lg:w-auto lg:translate-x-0 lg:opacity-100 lg:h-auto lg:p-0`}>
                <ul className='flex flex-col gap-y-3 lg:gap-x-5 lg:items-center lg:flex-row text-[rem]'>
                    {options.map((item, index) => 
                        <li key={index}
                        ><a href={item.link}
                        onClick={()=>setOpen(!open)}
                        className='px-2 py-1 text-lg font-prise
                        text-red-400 hover:text-red-800 font-semibold block transition-colors duration-200'
                        >{item.name}</a></li>
                    )}
                </ul>
            </nav>
            <span
            className='text-[2rem] text-red-500 hover:cursor-pointer hover:text-red-800
            transition-colors duration-200
            lg:hidden'
            onClick={()=>setOpen(!open)}
            ><IoMenu /></span>
        </header>
    )
}
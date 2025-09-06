import { Link } from "react-router-dom"
import { AiFillProduct } from "react-icons/ai";

export const Sidebar = ({openSidebar}:{openSidebar: boolean}) => {
    return (
        <aside className={`${openSidebar ? 'left-[0] md:w-[250px]' : 'left-[-100%] md:w-[56px]'} w-[200px] sm:w-[250px] bg-white h-full
        absolute border-r z-10 border-black/30 px-2 py-4 transition-all duration-300 md:static`}>
            <ul className="">
                <li><Link 
                className="bg-red-500 text-white w-full flex items-center px-2 py-2 rounded-md"
                to={'/panel/productos'}>
                    <span className="text-2xl"><AiFillProduct /></span>
                    <span className={`${openSidebar ? 'left-12' : 'left-[-100%]'}
                    absolute`}>Productos</span>
                    </Link></li>
            </ul>
        </aside>
    )
}
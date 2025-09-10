
import { useContextProduct } from "../hooks/userContextProduct"
import { RiCloseLargeFill } from "react-icons/ri";
export const ViewImage = ({close}:{close: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const { product } = useContextProduct()

    return (
        <section className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black/50 flex items-center justify-center">
            <div className="p-2">
                <img src={product?.image} alt={product?.name}
                className="w-70 h-80 rounded-xl"/>
            </div>
            <button 
            onClick={()=>{close(false)}}
            className="absolute top-10 right-5 text-xl bg-[#585858]/50 text-white p-2 rounded-full
            active:bg-red-500"><RiCloseLargeFill /></button>
        </section>
    )
}
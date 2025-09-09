import type { toastProps } from "../context/toastContext"
import { MdError } from "react-icons/md";
import { GrInfo } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import { PiWarningFill } from "react-icons/pi";


export const ToastMessage = ({ message, type }: { message: string, type: toastProps['type'] }) => {

    const colors = {
        'error': 'border-l-red-500',
        'success': 'border-l-green-600',
        'alert': 'border-l-amber-500',
        'info': 'border-l-sky-500'
    }

    const icons = {
        'error': <MdError />,
        'success': <FaCheckCircle />,
        'alert': <PiWarningFill />,
        'info': <GrInfo />
    }

    return (
        <div className={`w-auto px-3 py-2 rounded-r-lg border-l-5 bg-white
        flex gap-x-3 items-center ${colors[type]}`}>
            <h1 className="text-xl">{icons[type]}</h1>
            <h1 className="text-md font-semibold">{message}</h1>
        </div>
    )
}